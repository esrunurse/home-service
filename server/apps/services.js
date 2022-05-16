import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protects.js";
// import multer from "multer";
//import { cloudinaryUpload } from "../utils/uploads.js";

const serviceRouter = Router();
//serviceRouter.use(protect);

//const multerUpload = multer({ dest: "uploads/" });
//const servicePhotoUpload = multerUpload.fields([
//  { name: "servicePhoto", maxCount: 1 },
//]);

// API route to service listing page
serviceRouter.get("/", async (req, res) => {
  const keywords = req.query.keywords || "";

  let query = "";
  let values = [];

  if (keywords) {
    query = `select service.service_id, category.category_name, service.category_id, service.service_name, 
    service.service_photo, min(sub_service.price_per_unit) as min_price, 
    max(sub_service.price_per_unit) as max_price, service.service_created_date, service.service_edited_date
    from service
    inner join sub_service
    on service.service_id = sub_service.service_id  
    inner join category
    on category.category_id = service.category_id
    where service_name ilike '%'||$1||'%' 
    group by service.service_id, category.category_name
    order by service.service_id asc`; // '%' || tag_name || '%' can search anything in keywords
    values = [keywords];
  } else {
    query = `select service.service_id, category.category_name, service.category_id, service.service_name, 
    service.service_photo, min(sub_service.price_per_unit) as min_price, 
    max(sub_service.price_per_unit) as max_price, service.service_created_date, service.service_edited_date
    from service
    inner join sub_service
    on service.service_id = sub_service.service_id  
    inner join category
    on category.category_id = service.category_id
    group by service.service_id, category.category_name
    order by service.service_id asc`;
  }
  const results = await pool.query(query, values);

  return res.status(200).json({
    data: results.rows,
  });
});

//API route to one service item page
serviceRouter.get("/:id", async (req, res) => {
  const serviceId = req.params.id;

  const result = await pool.query(
    `select service.service_id, category.category_name, service.category_id, service.service_name, 
            service.service_photo, min(sub_service.price_per_unit) as min_price, 
            max(sub_service.price_per_unit) as max_price, service.service_created_date, service.service_edited_date,
            sub_service.sub_service_id, sub_service.sub_service_name, sub_service.unit, sub_service.price_per_unit, 
            sub_service.sub_service_quantity, sub_service.total_price
    from service
    inner join category
    on category.category_id = service.category_id
    inner join sub_service
    on service.service_id = sub_service.service_id  
    where service.service_id = $1
    group by service.service_id, category.category_name, sub_service.sub_service_id`,
    [serviceId]
  );
  return res.json({
    data: result.rows,
  });
});

serviceRouter.post("/", async (req, res) => {
  //add parameter servicePhoto
  //console.log(req.files.servicePhoto);
  const newServiceItem = {
    ...req.body,
    service_created_date: new Date(),
    service_edited_date: new Date(),
  };

  // const servicePhotoUrl = await cloudinaryUpload(req.files);
  // newServiceItem["servicePhotos"] = servicePhotoUrl;

  await pool.query(
    `insert into service (service_name, category_id, service_photo, service_created_date, service_edited_date)
    values ($1, (select category_id from category where category_name = $2), $3, $4, $5)`,
    [
      newServiceItem.service_name,
      newServiceItem.category_name,
      newServiceItem.service_photo, // newServiceItem.servicePhotos,
      newServiceItem.service_created_date,
      newServiceItem.service_edited_date,
    ]
  );
  //console.log(newServiceItem.sub_service.length);
  if (newServiceItem.sub_service) {
    for (let r = 0; r <= newServiceItem.sub_service.length - 1; r++) {
      await pool.query(
        `insert into sub_service ( service_id, sub_service_name, unit, price_per_unit, sub_service_quantity, total_price)
    values ((select service_id from service where service_name = $1 ), $2, $3, $4, 0, 0);`,
        [
          newServiceItem.service_name,
          newServiceItem.sub_service[r].sub_service_name,
          newServiceItem.sub_service[r].unit,
          newServiceItem.sub_service[r].price_per_unit,
        ]
      );
    }
  }

  return res.json({
    message: "New service item has been created successfully.",
  });
});

//API route to update existing service item page
serviceRouter.put("/:id", async (req, res) => {
  const updateServiceItem = {
    ...req.body,
  };

  const serviceId = req.params.id;
  const subServiceId = [];

  for (let r = 0; r <= updateServiceItem.data.length - 1; r++) {
    subServiceId.push(updateServiceItem.data[r].sub_service_id);
  }

  // ใช้ได้แล้ว
  for (let r = 0; r <= updateServiceItem.data.length - 1; r++) {
    await pool.query(
      `update service
    set service_name=$1,  
    category_id=(select category_id from category where category_name=$2),
    service_photo=$3, 
    service_edited_date=$4 
    where service_id=$5
    `,
      [
        updateServiceItem.data[updateServiceItem.data.length - 1].service_name,
        updateServiceItem.data[updateServiceItem.data.length - 1].category_name,
        updateServiceItem.data[updateServiceItem.data.length - 1].service_photo,
        (updateServiceItem.data[
          updateServiceItem.data.length - 1
        ].service_edited_date = new Date()),
        serviceId,
      ]
    );

    // ให้ลบ sub_service_id ทั้งหมดที่ไม่อยู่ใน array subServiceId
    await pool.query(
      `delete from sub_service where sub_service_id != all($1) and service_id =$2`,
      [subServiceId, serviceId]
    );

    await pool.query(
      `update sub_service set sub_service_name=$1, unit=$2, price_per_unit=$3, sub_service_quantity=0, total_price=0
    where sub_service_id=$4`,
      [
        updateServiceItem.data[r].sub_service_name,
        updateServiceItem.data[r].unit,
        updateServiceItem.data[r].price_per_unit,
        updateServiceItem.data[r].sub_service_id,
      ]
    );
  }

  return res.json({
    message: `Service item ${serviceId} has been updated.`,
  });
});

//API ROUTE to delete exisitng service item
serviceRouter.delete("/:id", async (req, res) => {
  const serviceId = req.params.id;

  await pool.query(`delete from service where service_id=$1`, [serviceId]);

  return res.json({
    message: `service item ${serviceId} has been deleted.`,
  });
});

export default serviceRouter;
