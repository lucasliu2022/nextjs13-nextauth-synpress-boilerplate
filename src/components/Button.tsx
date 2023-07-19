import classNames from 'classnames';

export const Button: React.FC<{
  label: string;
  type?: 'button' | 'submit';
  outline?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
  size?: string;
  onClick?: (e: React.MouseEvent) => void;
}> = ({
  label,
  type = 'button',
  outline,
  rounded,
  disabled = false,
  className = '',
  size = 'md',
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        'py-2 px-4 disabled:opacity-50',
        outline
          ? 'bg-transparent text-indigo-700 font-semibold  border border-indigo-500'
          : 'bg-indigo-500 text-white font-bold',
        !disabled &&
          (outline
            ? 'hover:bg-indigo-500 hover:text-white hover:border-transparent'
            : 'hover:bg-indigo-700'),
        rounded ? 'rounded-full' : 'rounded',
        className,
        size === 'sm' && 'text-sm'
      )}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
