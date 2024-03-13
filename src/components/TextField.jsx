function TextField({type, purpose, placeholder, formik}) {
    return (
        <div className='input-errorMsg-container'>
            <div className='flex items-center relative input-container'>
                {type !== 'textarea' && type !== 'textArea' && type !== 'TextArea' // (Is textArea?) Condition
                ? // type value isn't "textArea"
                    (
                    <input
                        id={purpose}
                        name={purpose}
                        type={type}
                        className={`border-gray-600 border rounded p-4 outline-none w-full disabled:bg-gray-200
                                           ${formik.errors[purpose] && formik.touched[purpose] && 'ring-1 ring-red-700'}`}
                        placeholder='' // for moving the label middle to top
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[purpose]}
                        disabled={formik.isSubmitting}
                    />
                    )
                : // type value is "textArea"
                    (
                    <textarea
                        id={purpose}
                        name={purpose}
                        className={`border-gray-600 border rounded p-4 outline-none w-full resize-none h-40 disabled:bg-gray-200
                                   ${formik.errors.message && formik.touched.message && 'ring-1 ring-red-700'}`}
                        placeholder='' // for moving the label middle to top*/}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[purpose]}
                        disabled={formik.isSubmitting}
                    />
                    )
                }
                <label
                    htmlFor={purpose}
                    className={`absolute select-none bg-white left-4 top-7 -translate-y-1/2 transition-all rounded
                                       ${formik.errors[purpose] && formik.touched[purpose] && 'text-red-700'}`}
                >
                    {placeholder}
                </label>
            </div>
            {formik.errors[purpose] && formik.touched[purpose] &&
                <div
                    className='text-red-700'
                >
                    {formik.errors[purpose]}
                </div>
            }
        </div>
    )
}

export default TextField