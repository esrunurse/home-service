import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protects.js";

const categoryRouter = Router();
//categoryRouter.use(protect);

categoryRouter.get("/", async (req, res) => {
  const keywords = req.query.keywords || "";

  let query = "";
  let values = [];

  if (keywords) {
    query = `select * from category 
    where category_name ilike '%'||$1||'%' order by category_id asc`; // '%' || tag_name || '%' can search anything in keywords
    values = [keywords];
  } else {
    query = `select * from category order by category_id asc`;
  }
  const results = await pool.query(query, values);

  return res.json({
    data: results.rows,
  });
});

categoryRouter.get("/:id", async (req, res) => {
  const categoryId = req.params.id;

  const result = await pool.query(`select * from where category_id=$1`, [
    categoryId,
  ]);
  return res.json({
    data: result.rows[0],
  });
});

categoryRouter.post("/", async (req, res) => {
  const newCategory = {
    ...req.body,
    category_created_date: new Date(),
    category_edited_date: new Date(),
  };

  await pool.query(
    `insert into category (category_name, category_created_date, category_edited_date) 
    values ($1, $2, $3)`,
    [
      newCategory.category_name,
      newCategory.category_created_date,
      newCategory.category_edited_date,
    ]
  );

  return res.json({
    message: "New category has been created successfully.",
  });
});

categoryRouter.put("/:id", async (req, res) => {
  const updatedCategory = {
    ...req.body,
    category_edited_date: new Date(),
  };
  const categoryId = req.params.id;

  await pool.query(
    `update category set category_name=$1, 
  category_edited_date=$2 where category_id=$3`,
    [
      updatedCategory.category_name,
      updatedCategory.category_edited_date,
      categoryId,
    ]
  );

  return res.json({
    message: `Category ${categoryId} has been updated successfully.`,
  });
});

categoryRouter.delete("/:id", async (req, res) => {
  const categoryId = req.params.id;

  await pool.query("delete from category where category_id=$1", [categoryId]);

  return res.json({
    message: `Category ${categoryId} has been deleted successfully.`,
  });
});

export default categoryRouter;
