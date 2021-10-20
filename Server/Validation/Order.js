import joi from "joi";

export const validateOrderId = (resOrderId) =>{

    const Schema = joi.object({
        
        _id :joi.string().required()

    })

    return Schema.validateAsync(resOrderId);

}

export const validateOrderaddnewId = (resOrderId) =>{

    const Schema = joi.object({
        
        

    })

    return Schema.validateAsync(resOrderId);

}