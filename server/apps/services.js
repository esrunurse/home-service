import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protects.js";

const serviceRouter = Router();
//serviceRouter.use(protect);

// API route to service listing page
serviceRouter.get("/", async (req, res) => {
  const keywords = req.query.keywords || "";
  
  let query = "";
  let values = [];

  if (keywords) {
    query = `select * from service 
    where service_name ilike '%'||$1||'%' order by service_id asc`; // '%' || tag_name || '%' can search anything in keywords
    values = [keywords];
  } else {
    query = `select * from service order by service_id asc`;
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

//API route to create service item page
serviceRouter.post("/", async (req, res) => {
  const newServiceItem = {
    ...req.body,
    service_created_date: new Date(),
    service_edited_date: new Date(),
  };

  await pool.query(
    `insert into service (service_name, category, price_range_estimate, service_photo, service_created_date, service_edited_date) 
    values ($1, $2, $3, $4, $5, $6)`,
    [
      newServiceItem.service_name,
      newServiceItem.category,
      newServiceItem.price_range_estimate,
      newServiceItem.service_photo,
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
    price_range_estimate=$3, 
    service_photo=$4, 
    service_edited_date=$5 
    where service_id=$6`,
    [
      updateServiceItem.service_name,
      updateServiceItem.category_id,
      updateServiceItem.price_range_estimate,
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
