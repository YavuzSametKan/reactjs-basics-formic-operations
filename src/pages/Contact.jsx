import React, {useState} from 'react';

function Contact() {
    const [inputStates, setInputStates] = useState({
        name: false,
        surname: false,
        email: false,
        message: false
    })

    const handleInputChange = (fieldName, value) => {
        setInputStates(prevState => ({
            ...prevState,
            [fieldName]: value !== ''
        }))
    }

    return (<section className='w-full h-dvh flex flex-col items-center justify-center'>
        <div className={'p-5 border border-gray-600 w-2/5 rounded-tl rounded-tr text-center'}>
            <span className={'text-2xl font-bold'}>Contact</span>
        </div>
        <form className={'p-5 border border-t-0 border-gray-600 w-2/5 rounded-bl rounded-br flex flex-col gap-5'}>
            <div className='flex items-center relative focused-state'>
                <input
                    id='name'
                    type="text"
                    className={'border-gray-600 border rounded p-4 outline-none w-full'}
                    required='true'
                    onInput={(e) => handleInputChange('name', e.target.value)}
                />
                <label
                    htmlFor='name'
                    className={
                        `absolute select-none bg-white left-4 top-1/2 -translate-y-1/2 transition-all rounded
                         ${inputStates.name && 'top-0 -translate-y-1/2 p-1 py-0 px-2 border border-gray-600'}`
                    }
                >
                    Name
                </label>
            </div>

            <div className='flex items-center relative focused-state'>
                <input
                    id='surname'
                    type="text"
                    className={'border-gray-600 border rounded p-4 outline-none w-full'}
                    required='true'
                    onInput={(e) => handleInputChange('surname', e.target.value)}
                />
                <label
                    htmlFor='surname'
                    className={
                        `absolute select-none bg-white left-4 top-1/2 -translate-y-1/2 transition-all rounded
                         ${inputStates.surname && 'top-0 -translate-y-1/2 p-1 py-0 px-2 border border-gray-600'}`
                    }
                >
                    Surname
                </label>
            </div>

            <div className='flex items-center relative focused-state'>
                <input
                    id='email'
                    type="email"
                    className={'border-gray-600 border rounded p-4 outline-none w-full'}
                    required='true'
                    onInput={(e) => handleInputChange('email', e.target.value)}
                />
                <label
                    htmlFor='email'
                    className={
                        `absolute select-none bg-white left-4 top-1/2 -translate-y-1/2 transition-all rounded
                         ${inputStates.email && 'top-0 -translate-y-1/2 p-1 py-0 px-2 border border-gray-600'}`
                    }
                >
                    Email
                </label>
            </div>

            <div className='flex items-center relative focused-state'>
                <textarea
                    id='message'
                    className={'border-gray-600 border rounded p-4 outline-none w-full resize-none h-40'}
                    required='true'
                    onInput={(e) => handleInputChange('message', e.target.value)}
                />
                <label
                    htmlFor='message'
                    className={
                        `absolute select-none bg-white left-4 top-7 -translate-y-1/2 transition-all rounded
                         ${inputStates.message && 'top-0 -translate-y-1/2 p-1 py-0 px-2 border border-gray-600'}`
                    }
                >
                    Message
                </label>
            </div>
        </form>
    </section>);
}

export default Contact;