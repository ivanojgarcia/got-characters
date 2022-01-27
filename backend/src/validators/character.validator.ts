import joi from 'joi';

const characterSchema = (data: object) => {
    const schema = joi.object({
        id: joi.string().min(10).required()
    });
    return schema.validate(data);
}

export default characterSchema;
