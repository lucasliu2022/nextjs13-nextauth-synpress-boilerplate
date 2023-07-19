import { Button } from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between sm:p-24 p-8 w-full">
      <div className="flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Welcome to Next.js Landing Page
        </h1>
        <p className="text-lg md:text-xl">
          This is a simple landing page built with Next.js and Tailwind CSS.
        </p>
        <div className="mt-6">
          <Button label="Get Started" />
        </div>
      </div>
    </div>
  );
}
