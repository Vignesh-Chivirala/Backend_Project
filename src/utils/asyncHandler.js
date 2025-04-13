const asyncHandler =(requestHandler)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>nexr(err))
}

export {asyncHandler}