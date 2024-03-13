import React from "react";

function SubmitBtn({text, formik}) {
    return (
        <button
            className='border border-gray-600 rounded p-4 hover:bg-gray-200 transition font-bold disabled:bg-gray-200'
            type='submit'
            disabled={formik.isSubmitting}
        >
            {text}
        </button>
    )
}

export default React.memo(SubmitBtn)