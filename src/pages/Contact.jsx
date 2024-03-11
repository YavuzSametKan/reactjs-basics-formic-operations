import {Formik, Field, Form} from 'formik';

function Contact() {
    return (<section className='w-full h-dvh flex flex-col items-center justify-center'>
        <div className={'p-5 border border-gray-600 w-2/5 rounded-tl rounded-tr text-center'}>
            <span className={'text-2xl font-bold'}>Contact</span>
        </div>
        <Formik
            initialValues={{
                name: '',
                surname: '',
                email: '',
                message: ''
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <Form className='p-5 border border-t-0 border-gray-600 w-2/5 rounded-bl rounded-br flex flex-col gap-5'>
                <div className='flex items-center relative focused-state'>
                    <Field
                        id='name'
                        name='name'
                        className='border-gray-600 border rounded p-4 outline-none w-full'
                        placeholder=''
                    />
                    <label
                        htmlFor='name'
                        className='absolute select-none bg-white left-4 top-1/2 -translate-y-1/2 transition-all rounded'
                    >
                        Name
                    </label>
                </div>

                <div className='flex items-center relative focused-state'>
                    <input
                        id='surname'
                        name='surname'
                        className='border-gray-600 border rounded p-4 outline-none w-full'
                        placeholder=''
                    />
                    <label
                        htmlFor='surname'
                        className='absolute select-none bg-white left-4 top-1/2 -translate-y-1/2 transition-all rounded'
                    >
                        Surname
                    </label>
                </div>

                <div className='flex items-center relative focused-state'>
                    <input
                        id='email'
                        name='email'
                        type="email"
                        className='border-gray-600 border rounded p-4 outline-none w-full'
                        placeholder=''
                    />
                    <label
                        htmlFor='email'
                        className='absolute select-none bg-white left-4 top-1/2 -translate-y-1/2 transition-all rounded'
                    >
                        Email
                    </label>
                </div>

                <div className='flex items-center relative focused-state'>
                <Field
                    id='message'
                    name='message'
                    as='textarea'
                    className={'border-gray-600 border rounded p-4 outline-none w-full resize-none h-40'}
                    placeholder='' // for moving the label middle to top
                />
                    <label
                        htmlFor='message'
                        className='absolute select-none bg-white left-4 top-7 -translate-y-1/2 transition-all rounded'
                    >
                        Message
                    </label>
                </div>

                <button className='border border-gray-600 rounded p-4 hover:bg-gray-200 transition font-bold'>Submit</button>
            </Form>
        </Formik>
    </section>);
}

export default Contact;