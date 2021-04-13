import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/dashboardLayout/Layout';
import Log from '../components/Log';

import 'antd/dist/antd.css';

export default function Logs(): JSX.Element {
  const [current, setCurrent] = useState('orders');

  return (
    <div>
      <Layout title="Logs">
        <Head>
          <title>Logs</title>
        </Head>
        <div className="p-4 md:p-6 lg:p-10 min-h-screen">
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-4 my-10">
              <div className="md:col-span-1 h-16 flex justify-center items-center bg-purple rounded-md shadow text-white text-center md:my-0">
                Withdrawal
              </div>
              <div className="hidden md:block md:col-span-1"></div>
              <div className="md:col-span-1 h-16 flex justify-center items-center bg-purple rounded-md shadow text-white text-center md:my-0">
                Subscription
              </div>
              <div className="md:col-span-1 h-16 flex justify-center items-center bg-purple rounded-md shadow text-white text-center md:my-0">
                Transfers
              </div>
              <div className="hidden md:block md:col-span-1"></div>
              <div className="md:col-span-1 h-16 flex justify-center items-center bg-purple rounded-md shadow text-white text-center md:my-0">
                Transactions
              </div>
            </div>
            <div className="rounded bg-gray-300 lg:w-3/4 xl:w-1/2 flex justify-between items-center flex-wrap px-0">
              <button
                className={`rounded text-center h-full py-2 my-0 focus:outline-none ${
                  current === 'orders' ? 'bg-purple text-white px-4 lg:px-8' : 'text-purple px-2'
                } `}
                onClick={() => setCurrent('orders')}
              >
                Orders
              </button>{' '}
              |{' '}
              <button
                className={`rounded text-center h-full py-2 my-0 focus:outline-none ${
                  current === 'withdrawals'
                    ? 'bg-purple text-white px-4 lg:px-8'
                    : 'text-purple px-2'
                } `}
                onClick={() => setCurrent('withdrawals')}
              >
                Withdrawals
              </button>{' '}
              |{' '}
              <button
                className={`rounded text-center h-full py-2 my-0 focus:outline-none ${
                  current === 'transfers' ? 'bg-purple text-white px-4 lg:px-8' : 'text-purple px-2'
                } `}
                onClick={() => setCurrent('transfers')}
              >
                Transfers
              </button>{' '}
              |{' '}
              <button
                className={`rounded text-center h-full py-2 my-0 focus:outline-none ${
                  current === 'payments' ? 'bg-purple text-white px-4 lg:px-8' : 'text-purple px-2'
                } `}
                onClick={() => setCurrent('payments')}
              >
                Payments
              </button>
            </div>
            <Log />
          </>
        </div>
      </Layout>
    </div>
  );
}
