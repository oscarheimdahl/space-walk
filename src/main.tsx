import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import forwards from './assets/forwards.mp3';
import left from './assets/left.mp3';
import right from './assets/right.mp3';
import stop from './assets/stop.mp3';
import './index.css';

import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigUp,
  Octagon,
  Rocket,
} from 'lucide-react';
import { cn } from './utils';

const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'p-6 relative select-none flex gap-2 items-center transition-all shadow-red',
        'active:shadow-active active:translate-x-2 active:translate-y-2 font-bold text-4xl rounded-md',
        'bg-gradient-to-br from-red-600 to-red-800',
        className
      )}
    >
      {children}
    </button>
  );
};

const Right = () => {
  return (
    <>
      <Button
        onClick={() => new Audio(right).play()}
        className='from-yellow-600 to-yellow-800 shadow-yellow '
      >
        RIGHT <ArrowBigRight className='size-16 fill-current' />
      </Button>
    </>
  );
};
const Left = () => {
  return (
    <Button
      onClick={() => new Audio(left).play()}
      className='from-green-600 to-green-800 shadow-green '
    >
      LEFT
      <ArrowBigLeft className='size-16 fill-current' />
    </Button>
  );
};

const Forward = () => {
  return (
    <Button
      onClick={() => new Audio(forwards).play()}
      className='from-blue-600 to-blue-800 shadow-blue '
    >
      FORWARD <ArrowBigUp className='size-16 fill-current' />
    </Button>
  );
};

const Stop = () => {
  return (
    <Button
      onClick={() => new Audio(stop).play()}
      className='from-red-600 to-red-800 shadow-red '
    >
      STOP <Octagon className='size-16 fill-red-600' />
    </Button>
  );
};

const router = createHashRouter([
  {
    path: '*',
    element: <Navigate replace to={`right`} />,
  },
  {
    path: `right`,
    element: <Right />,
  },
  {
    path: `left`,
    element: <Left />,
  },
  {
    path: `forward`,
    element: <Forward />,
  },
  {
    path: `stop`,
    element: <Stop />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='fixed inset-0 background opacity-50' />
    <div className='h-full text-white relative flex items-center justify-center flex-col'>
      <div className='rounded-full bg-red-600 size-32 translate-y-8 shadow-md z-20'>
        <div
          style={{ animationDuration: '3000ms' }}
          className='size-full rounded-full animate-ping ring-4 ring-red-200'
        ></div>
      </div>
      <div className='h-32 w-12 bg-neutral-800 shadow-gray relative'></div>
      <div className='z-20 flex relative flex-col items-center p-8 rounded-lg shadow-gray bg-gradient-to-b from-neutral-800 to-neutral-900 justify-center gap-4 '>
        <Rocket className='size-24 text-black' />
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>
);
