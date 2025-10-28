
import DataModel from '../../models/brand/BrandModel'
import {CreateService} from "../../services/common/CreateServices";
import {UpdateService} from "../../services/common/UpdateService";
import {ListService} from "../../services/common/ListService";
import DropDownService from "../../services/common/DropDownService";
//import CheckAssociateService from "../../services/common/CheckAssociateService.ts";
//import mongoose from "mongoose";
//import DeleteService from "../../services/common/DeleteService.ts";


export const BranController= {

    CreateBrand:async (req: Request, res: Response): Promise<void>=>{
        let Result= await CreateService(req,DataModel)
        res.status(200).json(Result)
    },
    UpdateBrand:async (req: Request, res: Response): Promise<void>=>{
        let Result= await UpdateService(req,DataModel)
        res.status(200).json(Result)
    },
    BrandList:async (req: Request, res: Response): Promise<void>=>{
        let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
        let SearchArray=[{Name: SearchRgx}]
        let Result= await ListService(req,DataModel,SearchArray)
        res.status(200).json(Result)
    },
    BrandDropDown:async (req: Request, res: Response): Promise<void>=>{
        let Result= await DropDownService(req,DataModel,{_id:1,Name:1})
        res.status(200).json(Result)
    },
    DeleteBrand:async (req,res)=> {
    },

}

