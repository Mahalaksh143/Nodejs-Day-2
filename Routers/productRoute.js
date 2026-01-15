import express from "express";
import {  createProduct, getProducts , getProductById,updateProduct,deleteProduct } from "../Controllers/productController.js";


const router = express.Router();

router.get("/getdata", getProducts)
router.get("/getdata/:id",getProductById)
router.post("/create",createProduct)
router.put("/update/:id",updateProduct)
router.delete("/delete/:id",deleteProduct)


export default router;