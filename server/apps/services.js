import { Router } from "express";
import { pool } from "../utils/db.js";
import multer from "multer";
import { cloudinaryUpload } from "../utils/uploads.js";
//import { protect } from "../middlewares/protects.js";

const serviceRouter = Router();

// comment ออก เพราะว่า user ที่ไม่ได้ login สามารถดูรายการ services ได้ด้วย
//serviceRouter.use(protect);

const multerUpload = multer({ dest: "uploads/" });
const servicePhotoUpload = multerUpload.fields([
  { name: "servicePhoto", maxCount: 1 },
]);

// API route to service listing page
serviceRouter.get("/", async (req, res) => {
  const keywords = req.query.keywords || "";
  const categoryFilter = req.query.categoryFilter || "";
  const maxPriceFilter = req.query.maxPriceFilter || Number.MAX_SAFE_INTEGER;
  const minPriceFilter = req.query.minPriceFilter || 0;
  const orderFilter = req.query.orderFilter || "";

  let query = "";
  let values = [];

  if (
    keywords &&
    categoryFilter &&
    maxPriceFilter &&
    minPriceFilter &&
    orderFilter === "asc"
  ) {
    query = `select service.service_id, category.category_name, service.category_id, service.service_name, 
      service.service_photo, min(sub_service.price_per_unit) as min_price, 
      max(sub_service.price_per_unit) as max_price, service.service_created_date, service.service_edited_date
      from service
      inner join sub_service
      on service.service_id = sub_service.service_id  
      inner join category
      on category.category_id = service.category_id
      where service.service_name ilike '%'||$1||'%' and category.category_name = $2 and
      (sub_service.price_per_unit <= $3) and (sub_service.price_per_unit >= $4)
      group by service.service_id, category.category_name
      order by service.service_name asc`; // '%' || tag_name || '%' can search anything in keywords
    values = [keywords, categoryFilter, maxPriceFilter, minPriceFilter];
  } else if (
    keywords &&
    categoryFilter &&
    maxPriceFilter &&
    minPriceFilter &&
    orderFilter === "desc"
  ) {
    query = `select service.service_id, category.category_name, service.category_id, service.service_name, 
      service.service_photo, min(sub_service.price_per_unit) as min_price, 
      max(sub_service.price_per_unit) as max_price, service.service_created_date, service.service_edited_date
      from service
      inner join sub_service
      on service.service_id = sub_service.service_id  
      inner join category
      on category.category_id = service.category_id
      where service.service_name ilike '%'||$1||'%' and category.category_name = $2 and
      (sub_service.price_per_unit <= $3) and (sub_service.price_per_unit >= $4)
      group by service.service_id, category.category_name
      order by service.service_name desc`; // '%' || tag_name || '%' can search anything in keywords
    values = [keywords, categoryFilter, maxPriceFilter, minPriceFilter];
  } else if (
    keywords &&
    maxPriceFilter &&
    minPriceFilter &&
    orderFilter === "asc"
  ) {
    query = `select service.service_id, category.category_name, service.category_id, service.service_name, 
      service.service_photo, min(sub_service.price_per_unit) as min_price, 
      max(sub_service.price_per_unit) as max_price, service.service_created_date, service.service_edited_date
      from service
      inner join sub_service
      on service.service_id = sub_service.service_id  
      inner join category
      on category.category_id = service.category_id
	    where service.service_name ilike '%'||$1||'%' and (sub_service.price_per_unit <= $2) 
      and (sub_service.price_per_unit >= $3)
      group by service.service_id, category.category_name
      order by service.service_name asc`;
    values = [keywords, maxPriceFilter, minPriceFilter];
  } else if (
    keywords &&
    maxPriceFilter &&
    minPriceFilter &&
    orderFilter === "desc"
  ) {
    query = `select service.service_id, category.category_name, service.category_id, service.service_name, 
      service.service_photo, min(sub_service.price_per_unit) as min_price, 
      max(sub_service.price_per_unit) as max_price, service.service_created_date, service.service_edited_date
      from service
      inner join sub_service
      on service.service_id = sub_service.service_id  
      inner join category
      on category.category_id = service.category_id
	    where service.service_name ilike '%'||$1||'%' and (sub_service.price_per_unit <= $2) 
      and (sub_service.price_per_unit >= $3)
      group by service.service_id, category.category_name
      order by service.service_name desc`;
    values = [keywords, maxPriceFilter, minPriceFilter];
  } else if (
    categoryFilter &&
    maxPriceFilter &&
    minPriceFilter &&
    orderFilter === "asc"
  ) {
    query = `select service.service_id, category.category_name, service.category_id, service.service_name, 
      service.service_photo, min(sub_service.price_per_unit) as min_price, 
      max(sub_service.price_per_unit) as max_price, service.service_created_date, service.service_edited_date
      from service
      inner join sub_service
      on service.service_id = sub_service.service_id  
      inner join category
      on category.category_id = service.category_id
	    where category.category_name = $1 and (sub_service.price_per_unit <= $2) 
      and (sub_service.price_per_unit >= $3)
      group by service.service_id, category.category_name
      order by service.service_name asc`;
    values = [categoryFilter, maxPriceFilter, minPriceFilter];
  } else if (
    categoryFilter &&
    maxPriceFilter &&
    minPriceFilter &&
    orderFilter === "desc"
  ) {
    query = `select service.service_id, category.category_name, service.category_id, service.service_name, 
      service.service_photo, min(sub_service.price_per_unit) as min_price, 
      max(sub_service.price_per_unit) as max_price, service.service_created_date, service.service_edited_date
      from service
      inner join sub_service
      on service.service_id = sub_service.service_id  
      inner join category
      on category.category_id = service.category_id
	    where category.category_name = $1 and (sub_service.price_per_unit <= $2) 
      and (sub_service.price_per_unit >= $3)
      group by service.service_id, category.category_name
      order by service.service_name desc`;
    values = [categoryFilter, maxPriceFilter, minPriceFilter];
  } else if (maxPriceFilter && minPriceFilter && orderFilter === "asc") {
    query = `select service.service_id, category.category_name, service.category_id, service.service_name, 
      service.service_photo, min(sub_service.price_per_unit) as min_price, 
      max(sub_service.price_per_unit) as max_price, service.service_created_date, service.service_edited_date
      from service
      inner join sub_service
      on service.service_id = sub_service.service_id  
      inner join category
      on category.category_id = service.category_id
      where (sub_service.price_per_unit <= $1) and (sub_service.price_per_unit >= $2)
      group by service.service_id, category.category_name
      order by service.service_name asc`;
    values = [maxPriceFilter, minPriceFilter];
  } else if (maxPriceFilter && minPriceFilter && orderFilter === "desc") {
    query = `select service.service_id, category.category_name, service.category_id, service.service_name, 
      service.service_photo, min(sub_service.price_per_unit) as min_price, 
      max(sub_service.price_per_unit) as max_price, service.service_created_date, service.service_edited_date
      from service
      inner join sub_service
      on service.service_id = sub_service.service_id  
      inner join category
      on category.category_id = service.category_id
      where (sub_service.price_per_unit <= $1) and (sub_service.price_per_unit >= $2)
      group by service.service_id, category.category_name
      order by service.service_name desc`;
    values = [maxPriceFilter, minPriceFilter];
  } else if (keywords) {
    query = `select service.service_id, category.category_name, service.category_id, service.service_name,
      service.service_photo, min(sub_service.price_per_unit) as min_price, 
      max(sub_service.price_per_unit) as max_price, service.service_created_date, service.service_edited_date
      from service
      inner join sub_service
      on service.service_id = sub_service.service_id  
      inner join category
      on category.category_id = service.category_id
      where service.service_name ilike '%'||$1||'%'
      group by service.service_id, category.category_name
      order by service.service_id asc`;
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
            sub_service.sub_service_quantity
    from service
    inner join category
    on category.category_id = service.category_id
    inner join sub_service
    on service.service_id = sub_service.service_id  
    where service.service_id = $1
    group by service.service_id, category.category_name, sub_service.sub_service_id
    order by sub_service.sub_service_id asc`,
    [serviceId]
  );

  return res.json({
    data: result.rows,
  });
});

//API route to create service item page
serviceRouter.post("/", servicePhotoUpload, async (req, res) => {
  const newServiceItem = {
    service_name: req.body.service_name,
    category_name: req.body.category_name,
    servicePhotos: req.body.servicePhoto,
    sub_service: JSON.parse(req.body.sub_service),
    service_created_date: new Date(),
    service_edited_date: new Date(),
  };

  const servicePhotoUrl = await cloudinaryUpload(req.files);
  newServiceItem["servicePhotos"] = servicePhotoUrl;

  await pool.query(
    `insert into service (service_name, category_id, service_photo, service_created_date, service_edited_date)
    values ($1, (select category_id from category where category_name = $2), $3, $4, $5)`,
    [
      newServiceItem.service_name,
      newServiceItem.category_name,
      newServiceItem.servicePhotos[0],
      newServiceItem.service_created_date,
      newServiceItem.service_edited_date,
    ]
  );

  if (newServiceItem.sub_service) {
    for (let r = 0; r <= newServiceItem.sub_service.length - 1; r++) {
      await pool.query(
        `insert into sub_service ( service_id, sub_service_name, unit, price_per_unit, sub_service_quantity)
    values ((select service_id from service where service_name = $1 ), $2, $3, $4, 0);`,
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
    data: [...req.body],
  };

  const serviceId = req.params.id;
  const subServiceId = [];

  // เก็บ sub_service_id ที่จะทำการ update
  for (let r = 0; r <= updateServiceItem.data.length - 1; r++) {
    if (updateServiceItem.data[r].sub_service_id !== undefined)
      subServiceId.push(updateServiceItem.data[r].sub_service_id);
  }

  for (let r = 0; r <= updateServiceItem.data.length - 1; r++) {
    await pool.query(
      `update service
    set service_name=$1,  
    category_id=(select category_id from category where category_name=$2), 
    service_edited_date=$3 
    where service_id=$4
    `,
      [
        updateServiceItem.data[updateServiceItem.data.length - 1].service_name,
        updateServiceItem.data[updateServiceItem.data.length - 1].category_name,
        (updateServiceItem.data[
          updateServiceItem.data.length - 1
        ].service_edited_date = new Date()),
        serviceId,
      ]
    );

    // ให้ลบ sub_service_id ทั้งหมดที่ไม่อยู่ใน array subServiceId และอยู่ใน service_id นั้นๆ
    await pool.query(
      `delete from sub_service where sub_service_id != all($1) and service_id =$2`,
      [subServiceId, serviceId]
    );

    if (!updateServiceItem.data[r].sub_service_id) {
      await pool.query(
        `insert into sub_service ( service_id, sub_service_name, unit, price_per_unit, sub_service_quantity)
    values ((select service_id from service where service_name = $1 ), $2, $3, $4, 0);`,
        [
          updateServiceItem.data[r].service_name,
          updateServiceItem.data[r].sub_service_name,
          updateServiceItem.data[r].unit,
          updateServiceItem.data[r].price_per_unit,
        ]
      );
    }

    await pool.query(
      `update sub_service set sub_service_name=$1, unit=$2, price_per_unit=$3
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
