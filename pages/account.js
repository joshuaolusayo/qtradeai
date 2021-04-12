import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import WalletAddress from "../components/Account/WalletAddress";
import MyBanks from "../components/Account/MyBanks";
import MyCards from "../components/Account/MyCards";

import { Modal, Button } from "antd";

import CreateBank from "../components/Account/CreateBank";

import "antd/dist/antd.css";
import Saving from "../components/Account/Saving";
import Saved from "../components/Account/Saved";

export default function Account() {
	const [current, setCurrent] = useState("myBanks");
	const [showBank, setShowBank] = useState(false);
	const [saving, setSaving] = useState(false);
	const [saved, setSaved] = useState(false);

	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
		setSaving(false);
		setSaved(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
		setSaving(false);
		setSaved(false);
	};

	return (
		<div>
			<Layout title="Account">
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

								{current === "myBanks" ? (
									<span
										className="ml-3"
										onClick={() => {
											showModal();
											setShowBank(true);
										}}
									>
										Create Bank
									</span>
								) : current === "walletAddress" ? (
									""
								) : (
									<span className="ml-3">Create Card</span>
								)}

								{showBank && (
									<Modal
										title="Creating Banking Information"
										visible={isModalVisible}
										onOk={handleOk}
										onCancel={handleCancel}
										centered
										footer={[
											<Button key="back" onClick={handleCancel}>
												Close
											</Button>,
										]}
									>
										{!saving && !saved ? (
											<CreateBank setSaved={setSaved} setSaving={setSaving} />
										) : saving && !saved ? (
											<Saving setSaved={setSaved} />
										) : (
											<Saved handleCancel={handleCancel} />
										)}
									</Modal>
								)}

								{/* {createBank && <CreateBank onClick={setCreateBank} />} */}
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
						<div className="rounded bg-gray-300 lg:w-3/4 xl:w-1/2 flex justify-between items-center flex-wrap">
							<button
								className={`${
									current === "myBanks"
										? "bg-purple text-white text-center px-4 py-2 rounded lg:px-8"
										: "text-purple rounded px-1 h-full py-2"
								} focus:outline-none px-3`}
								onClick={() => setCurrent("myBanks")}
							>
								My Banks
							</button>

							<button
								className={`${
									current === "walletAddress"
										? "bg-purple text-white text-center px-4 py-2 rounded lg:px-8"
										: "text-purple rounded px-1 h-full py-2"
								} focus:outline-none px-3`}
								onClick={() => setCurrent("walletAddress")}
							>
								Wallet Address
							</button>

							<button
								className={`${
									current === "myCards"
										? "bg-purple text-white text-center px-4 py-2 rounded lg:px-8"
										: "text-purple rounded px-1 h-full py-2"
								} focus:outline-none px-3`}
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
