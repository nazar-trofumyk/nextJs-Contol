import Joi from 'joi'

export const filmValidator = Joi.object({
    query: Joi.string()
        .pattern(/^[a-zA-Z0-9\s]+$/)
        .min(1)
        .max(30)
        .required()
        .messages({
            "string.pattern.base": "Only English letters, numbers, and spaces are allowed.",
            "string.min": "Search query must be at least 1 character.",
            "string.max": "The query is too long (maximum is 30 characters).",
            "any.required": "This field is required."
        })

})