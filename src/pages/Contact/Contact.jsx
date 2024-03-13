import {useFormik} from "formik"
import formikConfig from './formik.config'
import FormHeader from "../../components/FormHeader"
import textFields from "./textFields"
import TextField from "../../components/TextField"
import SubmitBtn from "../../components/SubmitBtn"

function Contact() {
    const formik = useFormik(formikConfig)
    return (
        <section className='w-full py-5 min-h-screen flex flex-col items-center justify-center'>

            <FormHeader title='İletişim'/>

            <form
                className='p-5 border border-t-0 border-gray-600 w-2/5 rounded-bl rounded-br flex flex-col gap-5 max-[1024px]:w-11/12'
                onSubmit={formik.handleSubmit}
            >

                {textFields.map((tF, i) => (
                    <TextField
                        key={i}
                        type={tF.type}
                        purpose={tF.purpose}
                        placeholder={tF.placeholder}
                        formik={formik}
                    />
                ))}

                <SubmitBtn
                    text='Gönder'
                    formik={formik}
                />
            </form>

        </section>
    )
}

export default Contact