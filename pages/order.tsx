import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/dashboardLayout/Layout';
import SearchBar from 'material-ui-search-bar';
import usePackages from './api/packages';

export default function Home(): JSX.Element {
  const [value, setValue] = useState('');

  const { loading, packagesData } = usePackages();

  return (
    <div>
      <Layout title="Order">
        <Head>
          <title>Order</title>
        </Head>
        <div className="p-4 md:p-6 lg:p-10 min-h-screen order">
          <div className="my-14">
            <h2 className="font-bold text-center text-2xl mb-1">Plans built for your every need</h2>
            <p className="text-center font-thin text-gray-500 mb-0">
              Support/Subscription Packages
            </p>
          </div>
          <SearchBar
            value={value}
            onChange={(newValue) => setValue(newValue)}
            style={{ background: 'transparent' }}
            className="border border-purple shadow-none"
            placeholder="Search Order"
            // onRequestSearch={() => doSomethingWith(value)}
          />

          <div className="xl:grid xl:grid-cols-2 xl:gap-10">
            {packagesData &&
              packagesData
                .filter((item) => item.gei === '0')
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <div className="my-8 py-8 text-center border border-purple bg-gray-50 rounded-md md:px-16 lg:px-20">
                        <h2 className="text-3xl">NGN{data.calculatedPrice}</h2>
                        <p className="my-1">Per Subscription</p>
                        <p className="text-gray-500 md:hidden">{data.details}</p>
                        <p className="text-gray-500 hidden md:block">{data.details}</p>
                      </div>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                        <div className="col-span-1 md:col-span-1 font-bold">Levels:</div>
                        <div className="col-span-2 md:col-span-4 lg:grid lg:grid-cols-2">
                          <p className="mb-3">
                            <span className="font-bold">Level 1 Cash Bonus:</span>{' '}
                            <span className="font-thin">NGN {data.lv1commission}.00</span>
                          </p>
                          <p className="mb-3">
                            <span className="font-bold">Level 1 BMCT:</span>{' '}
                            <span className="font-thin">{data.lv1bmt}</span>
                          </p>
                          <p className="mb-3">
                            <span className="font-bold">Level 2 Cash Bonus:</span>{' '}
                            <span className="font-thin">NGN {data.lv2commission}.00</span>
                          </p>
                          <p className="mb-3">
                            <span className="font-bold">Level 2 BMCT:</span>{' '}
                            <span className="font-thin">{data.lv2bmt}</span>
                          </p>
                          <p className="mb-3">
                            <span className="font-bold">Level 3 Cash Bonus:</span>{' '}
                            <span className="font-thin">NGN {data.lv3commission}.00</span>
                          </p>
                          <p className="mb-3">
                            <span className="font-bold">Level 3 BMCT:</span>{' '}
                            <span className="font-thin">{data.lv3bmt}</span>
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="font-bold">Remark: 0</div>
                        <div className="font-bold">Duration: {data.duration}</div>
                        <div className="font-bold">Subscriber: 0</div>
                      </div>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 my-8">
                        <div className="col-span-1 md:col-span-1 font-bold">Description:</div>
                        <div className="col-span-2 md:col-span-4">
                          <p>{data.details}</p>
                        </div>
                      </div>
                      <button className="py-3 my-4 text-center bg-purple block w-full text-white rounded border border-purple hover:bg-black transition duration-300 ease">
                        Subscribe
                      </button>
                    </div>
                  );
                })}
          </div>
        </div>
      </Layout>
    </div>
  );
}
