import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protects.js";
import multer from "multer";
import { cloudinaryUpload } from "../utils/uploads.js";

const serviceRouter = Router();
//serviceRouter.use(protect);

const multerUpload = multer({ dest: "uploads/" });
const servicePhotoUpload = multerUpload.fields([
  { name: "servicePhoto", maxCount: 1 },
]);

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

  const result = await pool.query(`select * from service where service_id=$1`, [
    serviceId,
  ]);
  return res.json({
    data: result.rows[0],
  });
});

// Need to fix
//API route to create service item page
serviceRouter.post("/", servicePhotoUpload, async (req, res) => {
  console.log(req.files.servicePhoto);
  const newServiceItem = {
    ...req.body,
    service_created_date: new Date(),
    service_edited_date: new Date(),
  };

  const servicePhotoUrl = await cloudinaryUpload(req.files);
  newServiceItem["servicePhotos"] = servicePhotoUrl;

  await pool.query(
    `insert into service (service_name, category_id, service_photo, service_created_date, service_edited_date) 
    values ($1, $2, $3, $4, $5)`,
    [
      newServiceItem.service_name,
      newServiceItem.category_id,
      newServiceItem.service_photo, // newServiceItem.servicePhotos,
      newServiceItem.service_created_date,
      newServiceItem.service_edited_date,
    ]
  );

  return res.json({
    message: "New service item has been created successfully.",
  });
});

//API route to update existing service item page
serviceRouter.put("/:id", async (req, res) => {
  const updateServiceItem = {
    ...req.body,
    service_edited_date: new Date(),
  };

  const serviceId = req.params.id;

  await pool.query(
    `update service 
    set service_name=$1, 
    category_id=$2,  
    service_photo=$3, 
    service_edited_date=$4 
    where service_id=$5`,
    [
      updateServiceItem.service_name,
      updateServiceItem.category_id,
      updateServiceItem.service_photo,
      updateServiceItem.service_edited_date,
      serviceId,
    ]
  );

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
