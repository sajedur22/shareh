// api.js

import express from "express";
import {UserControllers} from "../controllers/Users/UsersControllers.js";
import {BranController} from "../controllers/brand/BrandControlller.js"
import AuthVerifyMiddleware from "../middlewares/AuthVerifyMiddleware.js";
import {CategoriesController} from "../controllers/Categoris/CategoriesController.js";

const router = express.Router();

router.post("/Registration", UserControllers.Registration);
router.post("/Login", UserControllers.Login);
router.post("/ProfileUpdate",AuthVerifyMiddleware,UserControllers.ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware,UserControllers.ProfileDetails);
router.get("/RecoverVerifyEmail/:email",UserControllers.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UserControllers.RecoverVerifyOTP);
router.post("/RecoverResetPass",UserControllers.RecoverResetPass);
export default router;


// Brands
router.post("/CreateBrand",AuthVerifyMiddleware,BranController.CreateBrand);
router.post("/UpdateBrand/:id",AuthVerifyMiddleware,BranController.UpdateBrand);
router.get("/BrandList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BranController.BrandList);
router.get("/BrandDropDown",AuthVerifyMiddleware,BranController.BrandDropDown);
router.get("/DeleteBrand/:id",AuthVerifyMiddleware,BranController.DeleteBrand);


// Categories
router.post("/CreateCategories",AuthVerifyMiddleware,CategoriesController.CreateCategories);
router.post("/UpdateCategories/:id",AuthVerifyMiddleware,CategoriesController.UpdateCategories);
router.get("/CategoriesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CategoriesController.CategoriesList);
router.get("/CategoriesDropDown",AuthVerifyMiddleware,CategoriesController.CategoriesDropDown);
router.get("/DeleteCategories/:id",AuthVerifyMiddleware,CategoriesController.DeleteCategories);
//router.get("/CategoriesDetailsByID/:id",AuthVerifyMiddleware,CategoriesController.CategoriesDetailsByID);