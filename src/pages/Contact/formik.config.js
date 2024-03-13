import validationSchema from "./validations";

const formik = {
    initialValues: {
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        message: ''
    },
    onSubmit: async (values, bag) => {
        await new Promise(r => setTimeout(r, 2000)) // For simulating asynchronous delay
        const emails = [
            'yssk.personal@gmail.com',
            'yssk32000@gmail.com'
        ]
        if(emails.includes(values.email)){
            return bag.setErrors(
                {
                    email: 'Bu e-posta adresi engellendi.'
                }
            )
        }
        bag.resetForm() // for resetting the inputs
        console.log(values)
    },
    validationSchema
}

export default formik