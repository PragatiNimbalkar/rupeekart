import { Router } from "express";
import { ProductModel } from "../models/product.model";


export const productRouter = Router();

productRouter.get('/all', async (req, res) => {
    const productList = await ProductModel.findAll();
    console.log(productList.every)
    return res.status(200).json({"success":true, "data": productList.toString()});
});

productRouter.post('/add',async (req,res)=>{
    console.log(`Product here`, req.body);

    const productList = await ProductModel.create(req.body);
    
    console.log(`Product inserted successfully`)
    return res.status(200).send({"success":true, "data": productList.toJSON()});
})
// module.exports = productRouter;