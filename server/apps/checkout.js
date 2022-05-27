import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protects.js";

const checkoutRouter = Router();

// API route to add new checkout item to checkout table
checkoutRouter.post("/", async (req, res) => {
  const newCheckoutItem = {
    // service_name: req.body.service_name,
    // date_time: req.body.date_time,
    // address: req.body.address,
    // subdistrict: req.body.subdistrict,
    // district: req.body.district,
    // province: req.body.province,
    // zipcode: req.body.zipcode,
    // total_price: req.body.total_price,
    // sub_service: JSON.parse(req.body.sub_service),
    ...req.body,
  };

  await pool.query(
    `insert into checkout (service_date_time, address, sub_district, district, province, postal_code, total_price)
  values ($1, $2, $3, $4, $5, $6, $7)`,
    [
      newCheckoutItem.date_time,
      newCheckoutItem.address,
      newCheckoutItem.subdistrict,
      newCheckoutItem.district,
      newCheckoutItem.province,
      newCheckoutItem.zipcode,
      newCheckoutItem.total_price,
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
    and total_price = $9))
    , $10);`,
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
          newCheckoutItem.sub_service[r].sub_service_quantity,
        ]
      );
    }
  }

  return res.json({
    message: `New checkout item has been created successfully.`,
  });
});

export default checkoutRouter;
