const CheckBox = ({ children }) => {
  return (
    <fieldset>
      <div className="mt-2 space-y-4">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-700">
              {children}
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default CheckBox;
