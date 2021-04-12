import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import TableData from "../components/Table";

import "antd/dist/antd.css";

export default function Logs() {
	return (
		<div>
			<Layout title="Logs">
				<Head>
					<title>Logs</title>
				</Head>
				<div className="p-4 md:p-6 lg:p-10 min-h-screen">
					<div className="flex justify-between items-center">
						<h1>Logs</h1>
						<Image className="header-img" src="/assets/logo.png" alt="Logo" width={215} height={43} />
					</div>

					<>
						<div className="grid grid-cols-3 justify-between gap-4 my-10">
							<div className="col-span-1 h-16 flex justify-center items-center bg-purple rounded-md shadow text-white text-center md:my-0">
								Withdrawal
							</div>
							<div className="col-span-1"></div>
							<div className="col-span-1 h-16 flex justify-center items-center bg-purple rounded-md shadow text-white text-center md:my-0">
								Subscription
							</div>
							<div className="col-span-1 h-16 flex justify-center items-center bg-purple rounded-md shadow text-white text-center md:my-0">
								Transfers
							</div>
							<div className="col-span-1"></div>
							<div className="col-span-1 h-16 flex justify-center items-center bg-purple rounded-md shadow text-white text-center md:my-0">
								Transactions
							</div>
						</div>
						<div className="rounded bg-gray-300 lg:w-3/4 xl:w-1/2 flex justify-between items-center flex-wrap px-2">
							<button className="bg-purple text-white rounded text-center px-4 lg:px-8 h-full py-2 my-2">Orders</button> |{" "}
							<button className="text-purple rounded text-center px-1 h-full py-2 my-2">Withdrawals</button> |{" "}
							<button className="text-purple rounded text-center px-1 h-full py-2 my-2">Transfers</button> |{" "}
							<button className="text-purple rounded text-center px-1 h-full py-2 my-2">Payments</button>
						</div>
						<TableData />
					</>
				</div>
			</Layout>
		</div>
	);
}
