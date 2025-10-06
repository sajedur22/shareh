import {CreateService} from "../../services/common/CreateServices.ts";
import DataModel from "../../models/Categories/CategoriesModel.ts"
import {UpdateService} from "../../services/common/UpdateService.ts";
import {ListService} from "../../services/common/ListService.ts";
import DropDownService from "../../services/common/DropDownService.ts";
import DeleteService from "../../services/common/DeleteService.ts";

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