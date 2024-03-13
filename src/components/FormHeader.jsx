function FormHeader({title}) {
    return (
        <div className='p-5 border border-gray-600 w-2/5 rounded-tl rounded-tr text-center'>
            <span className='text-2xl font-bold'>{title}</span>
        </div>
    )
}

export default FormHeader