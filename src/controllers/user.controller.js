import {asynHandlier } from "../utils/asynHandlier.js";


const registerUser = asynHandlier(async (req,res) =>{
    res.status(200).json({
        message: "ok"
    })
})

export {
    registerUser

}