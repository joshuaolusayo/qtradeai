import Head from 'next/head';
import Link from 'next/link';
import AuthLayout from '../components/auth/AuthLayout';

export default function Login(): JSX.Element {
  return (
    <AuthLayout title="Reset your password">
      <Head>
        <title>Forgotten Password</title>
      </Head>

      <form className="w-full sm:w-3/4 sm:mx-auto md:w-full px-4 px-md-6" action="#">
        <div className="mb-10 text-center text-purple">
          <h1 className="text-dark text-xl text-dark">Recover your account.</h1>
          <p className="text-gray-500 text-sm">
            GEI/QTRADEAI is an Empowerment, Traning and MasterNode Distribution platform of BeepPay
            System & Technology.
          </p>
        </div>

        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Username</label>
          <input
            className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="text"
            placeholder="Ayomide"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Email address</label>
          <input
            className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="email"
            placeholder="ayomideolopha@gmail.com"
          />
        </div>

        <div className="text-right">
          <Link href="/login">
            <a className="text-purple my-4 hover:underline text-sm">Login</a>
          </Link>
        </div>
        <div>
          <button
            className="bg-purple w-full py-3 text-sm text-center text-white rounded mt-3 border focus:outline-none border-purple"
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
