import { object, string, number } from 'yup'

const msg = {
    required: 'Bu alan zorunludur!',
    possitive: 'Negatif olamaz!',
    integer: 'Tam sayı girin!',
    email: 'Geçerli bir e-mail değil!',
    max: (maxVal, thing) => `maksimum ${maxVal} ${thing} olabilir.`,
    min: (minVal, thing) => `minimum ${minVal} ${thing} olabilir.`
}

const contactSchema = object({
    firstName: string()
            .required(msg.required),

    lastName: string()
            .required(msg.required),

    age: number()
            .positive(msg.possitive)
            .integer(msg.integer)
            .max(125, msg.max(125))
            .required(msg.required),

    email: string()
            .email(msg.email)
            .required(msg.required),

    message: string()
            .min(25, msg.min(25, 'karakter'))
            .max(500, msg.max(500, 'karakter'))
            .required(msg.required)
})

export default contactSchema
