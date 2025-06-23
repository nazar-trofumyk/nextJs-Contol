import Joi from 'joi'

export const filmValidator =Joi.object({
    query:Joi.string()  .pattern(/^[a-zA-Z0-9\s]+$/)
        .min(1)
        .max(30)
        .messages({
            "string.pattern.base": "Only English letters, numbers, and spaces are allowed.",
            "string.max": "The query is too long (maximum is 20 characters)."
        })
        .allow("")
})
