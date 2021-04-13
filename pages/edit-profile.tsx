import Head from 'next/head';
import Layout from '../components/dashboardLayout/Layout';

export default function EditProfile(): JSX.Element {
  return (
    <div>
      <Layout title="Edit Profile" back={true}>
        <Head>
          <title>Edit Profile</title>
        </Head>

        <div className="px-6 sm:px-0 min-h-screen w-full sm:w-3/5 md:w-4/5 lg:w-3/4 xl:w-1/2 mx-auto change__password">
          <div className="my-10 flex flex-col justify-center text-left w-full md:pt-6">
            <h2 className="hidden md:block text-purple font-bold">Change Password</h2>
            <form className="my-5 w-full">
              <div className="flex flex-col mb-5">
                <label className="text-purple text-sm mb-1">Full Name</label>
                <input
                  className="bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
                  type="text"
                  placeholder="Ayomide Olopha"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-purple text-sm mb-1">Phone Number</label>
                <input
                  className="bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
                  type="number"
                  placeholder="+2347064656768"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-purple text-sm mb-1">Phone Number</label>
                <input
                  className="bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
                  type="email"
                  placeholder="ayomideolopha@gmail.com"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-purple text-sm mb-1">MT4 Account Number</label>
                <input
                  className="bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
                  type="number"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-purple text-sm mb-1">MT4 Password</label>
                <input
                  className="bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
                  type="password"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-purple text-sm mb-1">Investors Details</label>
                <input
                  className="bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
                  type="text"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-purple text-sm mb-1">Address</label>
                <input
                  className="bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
                  type="text"
                />
              </div>

              <div>
                <button
                  className="bg-purple w-full py-3 text-sm text-center text-white rounded mt-3 border focus:outline-none border-purple"
                  onClick={(e) => e.preventDefault()}
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}
