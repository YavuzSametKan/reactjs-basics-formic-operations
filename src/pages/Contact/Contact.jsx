import {useFormik} from "formik";
import formikConfig from './formik.config'
import FormHeader from "../../components/FormHeader";
import TextField from "../../components/TextField";
import SubmitBtn from "../../components/SubmitBtn";


function Contact() {
    const formik = useFormik(formikConfig)
    return (
        <section className='w-full h-dvh flex flex-col items-center justify-center md:w-11/12'>
            <FormHeader title='İletişim'/>
            <form
                className='p-5 border border-t-0 border-gray-600 w-2/5 rounded-bl rounded-br flex flex-col gap-5'
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    type='text'
                    purpose='firstName'
                    placeholder='İsim'
                    formik={formik}
                />

                <TextField
                    type='text'
                    purpose='lastName'
                    placeholder='Soyisim'
                    formik={formik}
                />

                <TextField
                    type='Number'
                    purpose='age'
                    placeholder='Yaş'
                    formik={formik}
                />

                <TextField
                    type='email'
                    purpose='email'
                    placeholder='E-posta'
                    formik={formik}
                />

                <TextField
                    type='textArea'
                    purpose='message'
                    placeholder='Mesaj'
                    formik={formik}
                />

                <SubmitBtn
                    text='Gönder'
                    formik={formik}
                />
            </form>
        </section>
    )
}

export default Contact