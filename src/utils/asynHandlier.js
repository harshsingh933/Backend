
const asynHandlier =(requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err)
        )
    }

}



export {asynHandlier}

/*
const asynHandlier = (fn) => asyn (req, res, next)
 => {
    try {
        await fn(req, res, next)
    } 
    catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
    */
