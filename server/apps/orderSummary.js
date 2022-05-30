import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protects.js";

const orderSummaryRouter = Router();

//API route to view order summary after payment
orderSummaryRouter.get("/:id", async (req, res) => {
  const newOrderSummary = req.params.id;

  const result = await pool.query(
    `select sub_service.sub_service_name, checkout_quantity.sub_service_quantity, checkout.service_date_time,
    checkout.address, checkout.sub_district, checkout.district, checkout.province, checkout.postal_code, 
    checkout.note, checkout.total_price
    from checkout
    inner join checkout_quantity
    on checkout_quantity.checkout_id = checkout.checkout_id
    inner join sub_service
    on sub_service.sub_service_id = checkout_quantity.sub_service_id
    where checkout.checkout_id = $1`,
    [newOrderSummary]
  );

  return res.status(200).json({
    data: result.rows,
  });
});

export default orderSummaryRouter;
