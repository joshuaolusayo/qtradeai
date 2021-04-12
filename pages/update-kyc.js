import Head from "next/head";
import Layout from "../components/Layout";

export default function UpdateKYC() {
	return (
		<div>
			<Layout title="UpdateKYC" back={true}>
				<Head>
					<title>UpdateKYC</title>
				</Head>

				<div className="px-6 sm:px-0 min-h-screen w-full sm:w-3/5 md:w-4/5 lg:w-3/4 xl:w-1/2 mx-auto change__password">
					<div className="my-10 flex flex-col justify-center text-left w-full md:pt-6">
						<h2 className="hidden md:block text-purple font-bold">Update KYC</h2>
						<form className="md:my-5 w-full">
							<div className="flex flex-col mb-5">
								<label className="text-purple text-sm mb-1">Address ID</label>
								<input className="bg-white border border-purple py-1 px-1 focus:outline-none text-purple rounded" type="file" />
							</div>
							<div className="flex flex-col mb-3">
								<label className="text-purple text-sm mb-1">Country ID</label>
								<input className="bg-white border border-purple py-1 px-1 focus:outline-none text-purple rounded" type="file" />
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
