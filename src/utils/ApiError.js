class ApiError extends Error{
    constructor(
        statusecode,
        message="Something went Wrong",
        errors =[],
        stack=""
    ){
        super(message)
        this.statusecode=statusecode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors

        if(stack){
            this.stack=stack
        }else(
            Error.captureStackTrace(this,this.constructor)
        )
    }
}

export {ApiError}