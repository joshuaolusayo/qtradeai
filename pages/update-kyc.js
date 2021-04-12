import Head from "next/head";
import Layout from "../components/Layout";

export default function UpdateKYC() {
	return (
		<div>
			<Layout title="UpdateKYC" back="true">
				<Head>
					<title>UpdateKYC</title>
				</Head>

				<div className="px-6 sm:px-0 min-h-screen w-full sm:w-3/5 md:w-4/5 lg:w-3/4 xl:w-1/2 mx-auto change__password">
					<div className="my-10 flex flex-col justify-center text-left w-full md:pt-6">
						<h2 className="hidden md:block text-purple font-bold">Change Password</h2>
						<p>Still working on this</p>
					</div>
				</div>
			</Layout>
		</div>
	);
}
