import {CreateService} from "../../services/common/CreateServices.js";
import DataModel from "../../models/Categories/CategoriesModel.js"
import {UpdateService} from "../../services/common/UpdateService.js";
import {ListService} from "../../services/common/ListService.js";
import DropDownService from "../../services/common/DropDownService.js";
import DeleteService from "../../services/common/DeleteService.js";

export const CategoriesController={
    CreateCategories:async (req, res) => {
        let Result= await CreateService(req,DataModel)
        res.status(200).json(Result)
    },
    UpdateCategories:async (req, res) => {
        let Result=await UpdateService(req,DataModel)
        res.status(200).json(Result)
    },
    CategoriesList:async (req, res) => {
        let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
        let SearchArray=[{Name: SearchRgx}]
        let Result= await ListService(req,DataModel,SearchArray)
        res.status(200).json(Result)
    },
    CategoriesDropDown:async (req, res) => {
        let Result= await DropDownService(req,DataModel,{_id:1,Name:1})
        res.status(200).json(Result)
    },
    DeleteCategories:async (req, res) => {
        let Result=await DeleteService(req,DataModel);
        res.status(200).json(Result)
    },
}