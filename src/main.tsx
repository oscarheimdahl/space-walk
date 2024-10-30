import { StrictMode, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import right from './assets/right.mp3';
import left from './assets/left.mp3';
import forwards from './assets/forwards.mp3';
import stop from './assets/stop.mp3';
// import App from './App.tsx';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigUp,
  Octagon,
  Wifi,
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
        'active:shadow-active active:translate-x-2 active:translate-y-2 font-bold text-5xl rounded-md',
        'bg-gradient-to-br from-red-600 to-red-800',
        className
      )}
    >
      {children}
    </button>
  );
};

const useAudio = (src: string) => {
  const audio = useRef<HTMLAudioElement>(null);

  const play = () => {
    if (!audio.current) return;
    audio.current.currentTime = 0;
    audio.current.play();
  };

  return {
    element: <audio ref={audio} src={src} />,
    play,
  };
};

const Right = () => {
  const { element, play } = useAudio(right);

  return (
    <>
      {element}
      <Button
        onClick={() => play()}
        className='from-yellow-600 to-yellow-800 shadow-yellow '
      >
        RIGHT <ArrowBigRight className='size-16 fill-current' />
      </Button>
    </>
  );
};
const Left = () => {
  const { element, play } = useAudio(left);
  return (
    <>
      {element}
      <Button
        onClick={play}
        className='from-green-600 to-green-800 shadow-green '
      >
        LEFT
        <ArrowBigLeft className='size-16 fill-current' />
      </Button>
    </>
  );
};

const Forward = () => {
  const { element, play } = useAudio(forwards);

  return (
    <>
      {element}
      <Button onClick={play} className='from-blue-600 to-blue-800 shadow-blue '>
        FORWARD <ArrowBigUp className='size-16 fill-current' />
      </Button>
    </>
  );
};

const Stop = () => {
  const { element, play } = useAudio(stop);

  return (
    <>
      {element}
      <Button onClick={play} className='from-red-600 to-red-800 shadow-red '>
        STOP <Octagon className='size-16 fill-red-600' />
      </Button>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '*',
    element: <Navigate replace to={'/right'} />,
  },
  {
    path: '/right',
    element: <Right />,
  },
  {
    path: '/left',
    element: <Left />,
  },
  {
    path: '/forward',
    element: <Forward />,
  },
  {
    path: '/stop',
    element: <Stop />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='fixed inset-0 background opacity-30' />
    <div className='h-full text-white relative grid place-content-center top-32'>
      <Wifi className='size-[15vh] text-white absolute top-[5%] left-1/2 -translate-x-1/2' />
      <div className='h-1/3 w-12 bg-gradient-to-t from-gray-600 to-gray-500  rounded-t-full absolute top-[16.666%] left-1/2 -translate-x-1/2'></div>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
