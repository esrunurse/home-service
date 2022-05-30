import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protects.js";

const checkoutRouter = Router();

// API route to add new checkout item to checkout table
checkoutRouter.post("/", async (req, res) => {
  const newCheckoutItem = {
    // ของจริง ใช้รูปแบบข้างล่างนี้
    // user_id = req.body.user_id,
    // service_name: req.body.service_name,
    // date_time: req.body.date_time,
    // address: req.body.address,
    // subdistrict: req.body.subdistrict,
    // district: req.body.district,
    // province: req.body.province,
    // zipcode: req.body.zipcode,
    // total_price: req.body.total_price,
    // note: req.body.note,
    // sub_service: JSON.parse(req.body.sub_service),
    ...req.body,
  };

  await pool.query(
    `insert into checkout (service_date_time, address, sub_district, district, province, postal_code, total_price, note)
  values ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      newCheckoutItem.date_time,
      newCheckoutItem.address,
      newCheckoutItem.subdistrict,
      newCheckoutItem.district,
      newCheckoutItem.province,
      newCheckoutItem.zipcode,
      newCheckoutItem.total_price,
      newCheckoutItem.note,
    ]
  );

  if (newCheckoutItem.sub_service) {
    for (let r = 0; r <= newCheckoutItem.sub_service.length - 1; r++) {
      await pool.query(
        `insert into checkout_quantity (sub_service_id, checkout_id, sub_service_quantity)
    values (
      (select sub_service_id from sub_service inner join service
      on service.service_id = sub_service.service_id
      where sub_service.sub_service_name = $1 and service.service_name = $2)
    , (select checkout_id from checkout where 
    (service_date_time = $3
    and address = $4 
    and sub_district = $5 
    and district = $6
    and province = $7
    and postal_code = $8
    and total_price = $9
    and note = $10))
    , $11);`,
        [
          newCheckoutItem.sub_service[r].sub_service_name,
          newCheckoutItem.service_name,
          newCheckoutItem.date_time,
          newCheckoutItem.address,
          newCheckoutItem.subdistrict,
          newCheckoutItem.district,
          newCheckoutItem.province,
          newCheckoutItem.zipcode,
          newCheckoutItem.total_price,
          newCheckoutItem.note,
          newCheckoutItem.sub_service[r].sub_service_quantity,
        ]
      );
    }
  }

  await pool.query(
    `insert into order_history (order_number, status, serviceman_detail_id, checkout_id, user_id)
    values ($1, $2, (select serviceman_detail_id from serviceman_detail where serviceman_expertise = $3),
    (select checkout_id from checkout where 
      (service_date_time = $4
      and address = $5 
      and sub_district = $6 
      and district = $7
      and province = $8
      and postal_code = $9
      and total_price = $10
      and note = $11)),
      $12);`,
    [
      "AD04071205", // ต้องทำให้ run order_number ได้แบบ auto
      "รอดำเนินการ",
      newCheckoutItem.service_name,
      newCheckoutItem.date_time,
      newCheckoutItem.address,
      newCheckoutItem.subdistrict,
      newCheckoutItem.district,
      newCheckoutItem.province,
      newCheckoutItem.zipcode,
      newCheckoutItem.total_price,
      newCheckoutItem.note,
      newCheckoutItem.user_id,
    ]
  );

  return res.json({
    message: `New checkout item and order_history item have been created successfully.`,
  });
});

export default checkoutRouter;
