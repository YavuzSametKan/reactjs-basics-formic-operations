import {useFormik} from 'formik'

function Contact() {
    const { // Destructuring the useFormik Hook
            handleSubmit,
            handleChange,
            values,
            isSubmitting
        } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        onSubmit: async (values, bag) => {
            await new Promise(r => setTimeout(r, 2000)) // For simulating asynchronous delay
            console.log(values)
            bag.resetForm() // for resetting the inputs
        }
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
                <div className='flex items-center relative input-container'>
                    <input
                        id='firstName'
                        name='firstName'
                        type='text'
                        className='border-gray-600 border rounded p-4 outline-none w-full disabled:bg-gray-200'
                        placeholder='' // for moving the label middle to top
                        onChange={handleChange('firstName')}
                        value={values.firstName}
                        disabled={isSubmitting}
                    />
                    <label
                        htmlFor='firstName'
                        className='absolute select-none bg-white left-4 top-1/2 -translate-y-1/2 transition-all rounded'
                    >
                        First Name
                    </label>
                </div>

                <div className='flex items-center relative input-container'>
                    <input
                        id='lastName'
                        name='lastName'
                        type='text'
                        className='border-gray-600 border rounded p-4 outline-none w-full disabled:bg-gray-200'
                        placeholder='' // for moving the label middle to top
                        onChange={handleChange('lastName')}
                        value={values.lastName}
                        disabled={isSubmitting}
                    />
                    <label
                        htmlFor='lastName'
                        className='absolute select-none bg-white left-4 top-1/2 -translate-y-1/2 transition-all rounded'
                    >
                        Last Name
                    </label>
                </div>

                <div className='flex items-center relative input-container'>
                    <input
                        id='email'
                        name='email'
                        type="email"
                        className='border-gray-600 border rounded p-4 outline-none w-full disabled:bg-gray-200'
                        placeholder='' // for moving the label middle to top
                        onChange={handleChange('email')}
                        value={values.email}
                        disabled={isSubmitting}
                    />
                    <label
                        htmlFor='email'
                        className='absolute select-none bg-white left-4 top-1/2 -translate-y-1/2 transition-all rounded'
                    >
                        Email
                    </label>
                </div>

                <div className='flex items-center relative input-container'>
                    <textarea
                        id='message'
                        name='message'
                        className='border-gray-600 border rounded p-4 outline-none w-full resize-none h-40 disabled:bg-gray-200'
                        placeholder='' // for moving the label middle to top
                        onChange={handleChange('message')}
                        value={values.message}
                        disabled={isSubmitting}
                    />
                    <label
                        htmlFor='message'
                        className='absolute select-none bg-white left-4 top-7 -translate-y-1/2 transition-all rounded'
                    >
                        Message
                    </label>
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