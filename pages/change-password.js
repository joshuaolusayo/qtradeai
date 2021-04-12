import Head from "next/head";
import Layout from "../components/Layout";

export default function ChangePassword() {
	return (
		<div>
			<Layout title="Change Password" back={true}>
				<Head>
					<title>Change Password</title>
				</Head>

				<div className="px-6 sm:px-0 min-h-screen w-full sm:w-3/5 md:w-4/5 lg:w-3/4 xl:w-1/2 mx-auto change__password">
					<div className="my-10 flex flex-col justify-center text-left w-full md:pt-6">
						<h2 className="hidden md:block text-purple font-bold">Change Password</h2>
						<form className="my-5 w-full">
							<div className="mb-4 w-full flex flex-col">
								<label className="text-purple text-sm mb-1">Old Password</label>
								<input className="bg-white border border-purple text-purple focus:outline-none py-2 px-3 text-sm rounded" type="password" />
							</div>
							<div className="mb-4 w-full flex flex-col">
								<label className="text-purple text-sm mb-1">New Password</label>
								<input className="bg-white border border-purple text-purple focus:outline-none py-2 px-3 text-sm rounded" type="password" />
							</div>
							<div className="mb-4 w-full flex flex-col">
								<label className="text-purple text-sm mb-1">Confirm New Password</label>
								<input className="bg-white border border-purple text-purple focus:outline-none py-2 px-3 text-sm rounded" type="password" />
							</div>
							<div>
								<button
									className="bg-purple w-full py-3 text-sm text-center text-white rounded mt-3 border focus:outline-none border-purple"
									onClick={(e) => e.preventDefault()}
								>
									Save Bank
								</button>
							</div>
						</form>
					</div>
				</div>
			</Layout>
		</div>
	);
}
