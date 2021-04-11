import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import WalletAddress from "../components/Account/WalletAddress";
import MyBanks from "../components/Account/MyBanks";
import MyCards from "../components/Account/MyCards";

import "antd/dist/antd.css";

export default function Account() {
	const [current, setCurrent] = useState("myBanks");

	return (
		<div>
			<Layout>
				<Head>
					<title>Account</title>
				</Head>
				<div className="p-4 md:p-6 lg:p-10 min-h-screen">
					<div className="flex justify-between items-center">
						<h1>Account</h1>
						<Image className="header-img" src="/assets/logo.png" alt="Logo" width={215} height={43} />
					</div>

					<div className="my-10">
						{current !== "walletAddress" && (
							<div className="bg-purple px-4 py-3 text-white inline-flex rounded-xl">
								<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="13.5" cy="13" r="13" fill="white" />
									<path
										d="M13.0137 8V17.0278"
										stroke="#3440A3"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M8.5 12.5139L17.5278 12.5139"
										stroke="#3440A3"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>

								<span className="ml-3">
									{current === "myBanks" ? "Create Bank" : current === "walletAddress" ? "" : "Create Card"}
								</span>
							</div>
						)}
						<div className="grid grid-cols-2 justify-between gap-4 my-5">
							<div className="col-span-2 sm:col-span-1 h-20 flex justify-center items-center bg-purple rounded-xl shadow text-white text-center">
								Withdrawal Money
							</div>
							<div className="col-span-2 sm:col-span-1 h-20 flex justify-center items-center bg-purple rounded-xl shadow text-white text-center">
								Transfer to BMC Account
							</div>
						</div>
						<div className="rounded bg-gray-300 lg:w-3/4 xl:w-1/2 flex justify-between items-center flex-wrap px-2">
							<button
								className={`${
									current === "myBanks"
										? "bg-purple text-white text-center px-4 py-2 rounded my-2 lg:px-8"
										: "text-purple rounded px-1 h-full py-2"
								} focus:outline-none`}
								onClick={() => setCurrent("myBanks")}
							>
								My Banks
							</button>
							
							<button
								className={`${
									current === "walletAddress"
										? "bg-purple text-white text-center px-4 py-2 rounded my-2 lg:px-8"
										: "text-purple rounded px-1 h-full py-2"
								} focus:outline-none`}
								onClick={() => setCurrent("walletAddress")}
							>
								Wallet Address
							</button>
							
							<button
								className={`${
									current === "myCards"
										? "bg-purple text-white text-center px-4 py-2 rounded my-2 lg:px-8"
										: "text-purple rounded px-1 h-full py-2"
								} focus:outline-none`}
								onClick={() => setCurrent("myCards")}
							>
								My Cards
							</button>
						</div>
						{current === "myBanks" ? <MyBanks /> : current === "walletAddress" ? <WalletAddress /> : <MyCards />}
					</div>
				</div>
			</Layout>
		</div>
	);
}
