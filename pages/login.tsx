import Head from 'next/head';
import Link from 'next/link';
import AuthLayout from '../components/auth/AuthLayout';

export default function Login(): JSX.Element {
  return (
    <AuthLayout title="Welome to the Log in page">
      <Head>
        <title>Log in</title>
      </Head>

      <form className="w-full sm:w-3/4 sm:mx-auto md:w-full px-4 px-md-6" action="#">
        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Email address</label>
          <input
            className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="email"
            placeholder="ayomideolopha@gmail.com"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Password</label>
          <input
            className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="text-right">
          <Link href="/forgotten-password">
            <a className="text-purple my-4 hover:underline text-sm">Forgotten password?</a>
          </Link>
        </div>
        <div>
          <button
            className="bg-purple w-full py-3 text-sm text-center text-white rounded mt-3 border focus:outline-none border-purple"
            onClick={(e) => e.preventDefault()}
          >
            Log in
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
