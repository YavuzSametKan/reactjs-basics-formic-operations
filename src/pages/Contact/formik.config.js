import validationSchema from "./validations";
import textFields from "./textFields";

const formikConfig = {
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
    initialValues: {},
    validationSchema
}

/* To automatically assign objects generated in the textFields array to there */
textFields.forEach(tF => formikConfig.initialValues[tF.purpose] = '')

export default formikConfig