import Link from 'next/link';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <Link href="/" className={className}>
    <span className="sr-only">Your Project</span>
    <img
      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
      alt="logo"
    />
  </Link>
);

export default Logo;
