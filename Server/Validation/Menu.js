import joi from "joi";

export const validateMenuId = (resMenuId) =>{

    const Schema = joi.object({
        
        _id :joi.string().required()

    })

    return Schema.validateAsync(resMenuId);

}

export const validateMenuImageId = (resMenuImageId) =>{

    const Schema = joi.object({
        
        _id :joi.string().required()

    })

    return Schema.validateAsync(resMenuImageId);

}