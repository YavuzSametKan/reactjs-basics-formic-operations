import { object, string, number } from 'yup'

const REQUIRED_MESSAGE = 'Bu alan zorunludur!'

const contactSchema = object({
    firstName: string().required(REQUIRED_MESSAGE),
    lastName: string().required(REQUIRED_MESSAGE),
    age: number()
            .positive('Negatif olamaz!')
            .integer('Tam sayı girin!')
            .max(125, 'Maksimum 125 olabilir!')
            .required(REQUIRED_MESSAGE),
    email: string().email('Geçerli bir e-mail değil!').required(REQUIRED_MESSAGE),
    message: string().min(25, 'Minimum 25 karakter!').max(500, 'Maksimum 500 karakter!').required(REQUIRED_MESSAGE)
})

export default contactSchema
