import { ChangeEvent, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    'onChange'
  > {
  name?: string;
  label?: string;
  error?: string;
  multiple?: boolean;
  rows?: number;
  onChange?: (value: string | number | boolean | null, name?: string) => void;
}

export const Input: React.FC<InputProps> = ({
  name = '',
  label,
  error,
  className = '',
  type,
  onChange,
  multiple,
  rows = 5,
  ...rest
}) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!onChange) return;

    if (type === 'number') {
      if (!e.target.value) {
        return onChange(null, name);
      }
      if (isNaN(Number(e.target.value))) return;
      return onChange(Number(e.target.value), name);
    } else if (type === 'checkbox') {
      return onChange(
        (e as ChangeEvent<HTMLInputElement>).target.checked,
        name
      );
    } else {
      return onChange(e.target.value, name);
    }
  };
  return (
    <div className={classNames('relative', className)}>
      {type === 'checkbox' ? (
        <label className="flex items-start group">
          <div className="flex items-center h-5">
            <input
              id={name}
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              onChange={handleChange}
              {...rest}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor={name} className="text-gray-500 dark:text-gray-300">
              {label}
            </label>
          </div>
        </label>
      ) : (
        <>
          {label && (
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {label}
            </label>
          )}
          {multiple ? (
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              onChange={handleChange}
              rows={rows}
              {...rest}
            />
          ) : (
            <input
              type={type}
              className={classNames(
                'border text-sm rounded-lg dark:bg-gray-700 block w-full p-2.5 focus:outline-none focus:ring-1',
                error
                  ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500'
                  : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-700 focus:ring-primary-600 focus:border-primary-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
              )}
              onChange={handleChange}
              {...rest}
            />
          )}
        </>
      )}
      {error && (
        <p className="mt-2 text-xs text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
};
