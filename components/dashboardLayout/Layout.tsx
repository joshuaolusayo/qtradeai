import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Fade as Hamburger } from 'hamburger-react';
import Header from './Header';
import Navigation from './Navigation';

export default function Layout({ children, title = 'Dashboard', back = false }): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="layout">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <div className="hidden md:grid md:grid-flow-col md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <div className="col-span-1 bg-purple md:h-full">
          <div className="h-screen bg-purple md:w-1/4 lg:w-1/5 xl:w-1/6 fixed overflow-hidden">
            <Navigation />
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-4 xl:col-span-5 bg-theme">
          <Header />
          <div className="flex justify-between items-center px-6 lg:px-10">
            <h1>{title}</h1>
            <Image
              className="header-img"
              src="/assets/logo.png"
              alt="Logo"
              width={215}
              height={43}
            />
          </div>
          {children}
        </div>
      </div>

      <div
        className={`md:hidden bg-theme ${isOpen ? 'overflow-hidden h-screen' : ''}`}
        onClick={() => {
          if (isOpen) setOpen(!isOpen);
        }}
      >
        <div className="flex justify-between items-center p-2 shadow sm:px-4 fixed w-full z-20 bg-white">
          {!back ? (
            <Hamburger toggled={isOpen} toggle={setOpen} />
          ) : (
            <Link href="/profile">
              <a className="py-2 pl-2">
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 16 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 25L2 13.5L14 2"
                    stroke="#09157F"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Link>
          )}

          <h3 className="text-black mb-0">{title}</h3>
          {/* <Image src="/assets/profile.png" width={40} height={40} /> */}
          <span></span>
        </div>
        <div className="pt-16"></div>

        {children}

        {isOpen && (
          <div className="absolute z-30 bg-white top-0 bottom-0 left-0 w-4/5 sm:w-1/2 h-screen overflow-scroll shadow flex flex-col justify-between items-start">
            <div className="w-full">
              <Header />
              <Navigation />
            </div>
            <div className="mb-5 px-4">
              <Image src="/assets/logo.png" alt="Logo" width={236} height={47} />
            </div>
          </div>
        )}

        {isOpen && (
          <div className="overlay fixed overflow-hidden top-0 bg-black bg-opacity-40 z-20 w-full h-screen"></div>
        )}
      </div>
    </div>
  );
}
