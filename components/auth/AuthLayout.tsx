import Image from 'next/image';
import { ReactNode } from 'react';

export default function AuthLayout(props: { title; children: ReactNode }): JSX.Element {
  return (
    <>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 items-center">
        <div
          className="hidden md:col-span-1 md:flex md:flex-col justify-center items-center lg:col-span-2 bg-purple text-white h-screen"
          style={{
            background:
              'linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("/assets/background.jpeg")',
          }}
        >
          <Image src="/assets/logo.png" alt="Logo" width={186} height={37} />
          <h1 className="mb-0">{props.title}</h1>
        </div>
        <div className="md:col-span-1 flex justify-center items-center h-full bg-gray-200 min-h-screen py-20 overflow-scroll">
          {props.children}
        </div>
      </div>

      <style jsx>
        {`
          .bg-auth {
            // background
          }
        `}
      </style>
    </>
  );
}
