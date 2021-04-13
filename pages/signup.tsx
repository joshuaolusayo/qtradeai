import Head from 'next/head';
import Link from 'next/link';
import Select from 'react-select';
import AuthLayout from '../components/auth/AuthLayout';

const options = [
  { value: 'africa', label: 'Africa' },
  { value: 'australia', label: 'Australia' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'antarctica', label: 'Antarctica' },
];

export default function SignUp(): JSX.Element {
  return (
    <AuthLayout title="Welome to the Log in page">
      <Head>
        <title>Register</title>
      </Head>

      <form className="w-full sm:w-3/4 sm:mx-auto md:w-full px-4 px-md-6 login__page" action="#">
        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Username</label>
          <input
            className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="text"
            placeholder="Ayomide"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Password</label>
          <input
            className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="password"
            placeholder="Minimum of 4 characters"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Full Name</label>
          <input
            className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="text"
            placeholder="Ayomide Olopha"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Phone No</label>
          <input
            className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="text"
            placeholder="0812 345 6789"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Email</label>
          <input
            className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="email"
            placeholder="ayomideolopha@gmail.com"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Referral</label>
          <input
            className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="text"
            placeholder="bmcoin"
          />
        </div>
        <div>
          <button
            className="bg-purple w-full py-3 text-sm text-center text-white rounded mt-3 border focus:outline-none border-purple"
            onClick={(e) => e.preventDefault()}
          >
            Create a new account
          </button>
          <div className="text-right mt-3">
            <Link href="/login">
              <a className="text-purple hover:underline text-sm">Already have an account? Log in</a>
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}
