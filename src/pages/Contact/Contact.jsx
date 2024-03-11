import {useFormik} from 'formik'
import validationSchema from './validations'
function Contact() {
    const { // Destructuring the useFormik Hook
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            isSubmitting,
            errors,
            touched
        } = useFormik({
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
                        email: 'Bu e-mail adresi zaten kullanılıyor.'
                    }
                )
            }
            bag.resetForm() // for resetting the inputs
            console.log(values)
        },
        validationSchema
    })



    return (
        <section className='w-full h-dvh flex flex-col items-center justify-center'>
            <div className={'p-5 border border-gray-600 w-2/5 rounded-tl rounded-tr text-center'}>
                <span className={'text-2xl font-bold'}>Contact</span>
            </div>
            <form
                className='p-5 border border-t-0 border-gray-600 w-2/5 rounded-bl rounded-br flex flex-col gap-5'
                onSubmit={handleSubmit}
            >
                <div className='input-errorMsg-container'>
                    <div className='flex items-center relative input-container'>
                        <input
                            id='firstName'
                            name='firstName'
                            type='text'
                            className={`border-gray-600 border rounded p-4 outline-none w-full disabled:bg-gray-200
                                       ${errors.firstName && touched.firstName && 'ring-1 ring-red-700'}`}
                            placeholder='' // for moving the label middle to top
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            disabled={isSubmitting}
                        />
                        <label
                            htmlFor='firstName'
                            className={`absolute select-none bg-white left-4 top-7 -translate-y-1/2 transition-all rounded
                                       ${errors.firstName && touched.firstName && 'text-red-700'}`}
                        >
                            First Name
                        </label>
                    </div>
                    {errors.firstName && touched.firstName &&
                        <div
                            className='text-red-700'
                        >
                            {errors.firstName}
                        </div>
                    }
                </div>

                <div className='input-errorMsg-container'>
                    <div className='flex items-center relative input-container'>
                        <input
                            id='lastName'
                            name='lastName'
                            type='text'
                            className={`border-gray-600 border rounded p-4 outline-none w-full disabled:bg-gray-200
                                       ${errors.lastName && touched.lastName && 'ring-1 ring-red-700'}`}
                            placeholder='' // for moving the label middle to top
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            disabled={isSubmitting}
                        />
                        <label
                            htmlFor='lastName'
                            className={`absolute select-none bg-white left-4 top-7 -translate-y-1/2 transition-all rounded
                                       ${errors.lastName && touched.lastName && 'text-red-700'}`}
                        >
                            Last Name
                        </label>
                    </div>
                    {errors.lastName && touched.lastName &&
                        <div
                            className='text-red-700'
                        >
                            {errors.lastName}
                        </div>
                    }
                </div>

                <div className='input-errorMsg-container'>
                    <div className='flex items-center relative input-container'>
                        <input
                            id='age'
                            name='age'
                            type="number"
                            className={`border-gray-600 border rounded p-4 outline-none w-full disabled:bg-gray-200
                                       ${errors.age && touched.age && 'ring-1 ring-red-700'}`}
                            placeholder='' // for moving the label middle to top
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.age}
                            disabled={isSubmitting}
                        />
                        <label
                            htmlFor='age'
                            className={`absolute select-none bg-white left-4 top-7 -translate-y-1/2 transition-all rounded
                                       ${errors.age && touched.age && 'text-red-700'}`}
                        >
                            Age
                        </label>
                    </div>
                    {errors.age && touched.age &&
                        <div
                            className='text-red-700'
                        >
                            {errors.age}
                        </div>
                    }
                </div>

                <div className='input-errorMsg-container'>
                    <div className='flex items-center relative input-container'>
                        <input
                            id='email'
                            name='email'
                            type="email"
                            className={`border-gray-600 border rounded p-4 outline-none w-full disabled:bg-gray-200
                                       ${errors.email && touched.email && 'ring-1 ring-red-700'}`}
                            placeholder='' // for moving the label middle to top
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            disabled={isSubmitting}
                        />
                        <label
                            htmlFor='email'
                            className={`absolute select-none bg-white left-4 top-7 -translate-y-1/2 transition-all rounded
                                       ${errors.email && touched.email && 'text-red-700'}`}
                        >
                            Email
                        </label>
                    </div>
                    {errors.email && touched.email &&
                        <div
                            className='text-red-700'
                        >
                            {errors.email}
                        </div>
                    }
                </div>

                <div className='input-errorMsg-container'>
                    <div className='flex items-center relative input-container'>
                    <textarea
                        id='message'
                        name='message'
                        className={`border-gray-600 border rounded p-4 outline-none w-full resize-none h-40 disabled:bg-gray-200
                                   ${errors.message && touched.message && 'ring-1 ring-red-700'}`}
                        placeholder='' // for moving the label middle to top
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        disabled={isSubmitting}
                    />
                        <label
                            htmlFor='message'
                            className={`absolute select-none bg-white left-4 top-7 -translate-y-1/2 transition-all rounded
                                       ${errors.message && touched.message && 'text-red-700'}`}
                        >
                            Message
                        </label>
                    </div>
                    {errors.message && touched.message &&
                        <div
                            className='text-red-700'
                        >
                            {errors.message}
                        </div>
                    }
                </div>

                <button
                    className='border border-gray-600 rounded p-4 hover:bg-gray-200 transition font-bold disabled:bg-gray-200'
                    type='submit'
                    disabled={isSubmitting}
                >
                    Submit
                </button>
            </form>
        </section>
)
}

export default Contact