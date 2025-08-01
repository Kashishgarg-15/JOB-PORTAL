class ErrorHandler extends Error{
    constructor(message,statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500; //Internal Server error
    err.message = err.message || "Internal Server Error";

    if(err.name ==="CastError"){
        const message = `Invalid ${err.path}`;
        err = new ErrorHandler(message,400); //Bad Request
    }
    if(err.code ===11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered.`
         err = new ErrorHandler(message,400); //Bad Request
    }
    if(err.name ==="JsonWebTokenError"){
        const message = `Json Web Token is invalid, Try again.`;
        err = new ErrorHandler(message,400); //Bad Request
    }
        if(err.name ==="TokenExpired"){
        const message = `Json Web Token is expired, Try Again`;
        err = new ErrorHandler(message,400); //Bad Request
    }

    return res.status(err.statusCode).json({
        success : false,
        message : err.message,
        // err:err // for understanding
    })
}   
export default ErrorHandler;
// 💡 Why do we make our own error class?
// Because the default Error has only message.
// But we also want to attach statusCode (like 404, 500).