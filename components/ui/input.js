
const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="mt-2">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor={name}>{label}</label>
            <input {...rest} name={name} id={name} className="block w-full px-4 py-1 md:py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            {error && <small className="text-sm text-red-600">{error}</small>}
        </div>);
};

export default Input;
