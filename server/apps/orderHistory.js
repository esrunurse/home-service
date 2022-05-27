import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protects.js";

const orderHistoryRouter = Router();

// API route to view order history by userId
orderHistoryRouter.get("/:id", async (req, res) => {
  const orderHistoryByUserId = req.params.id;

  const result = await pool.query(
    `select order_history.order_number, checkout.service_date_time, order_history.status, serviceman_detail.serviceman_name, 
    service.service_name, sub_service.sub_service_name, checkout_quantity.sub_service_quantity, sub_service.unit, checkout.total_price    
    from order_history
        inner join checkout
        on order_history.checkout_id = checkout.checkout_id
        inner join serviceman_detail
        on serviceman_detail.serviceman_detail_id = order_history.serviceman_detail_id
        inner join users
        on users.user_id = order_history.user_id
        inner join checkout_quantity
        on checkout_quantity.checkout_id = checkout.checkout_id
        inner join sub_service
        on checkout_quantity.sub_service_id = sub_service.sub_service_id
        inner join service
        on service.service_id = sub_service.service_id
        where users.user_id = $1`,
    [orderHistoryByUserId]
  );

  return res.status(200).json({
    data: result.rows,
  });
});

export default orderHistoryRouter;
