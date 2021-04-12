import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import SearchBar from "material-ui-search-bar";

export default function BeepEstate() {
	const [value, setValue] = useState("");
	return (
		<div>
			<Layout title="Beep Estate">
				<Head>
					<title>Beep Estate</title>
				</Head>
				<div className="p-4 md:p-6 lg:p-10 min-h-screen">
					<div className="flex justify-between items-center">
						<h1>Beep Estate</h1>
						<Image className="header-img" src="/assets/logo.png" alt="Logo" width={215} height={43} />
					</div>
					<div className="my-14">
						<h2 className="font-bold text-center text-2xl mb-2">BeepCity Leverage Program</h2>
						<p className="text-center font-light text-gray-500">Own YOUR Home in 12 Months</p>
					</div>
					<SearchBar
						value={value}
						onChange={(newValue) => setValue(newValue)}
						style={{ background: "transparent" }}
						className="border border-purple shadow-none"
						placeholder="Search Packages"
						// onRequestSearch={() => doSomethingWith(value)}
					/>
					<div className="my-8 py-8 text-center border border-purple bg-gray-50 rounded-md md:px-16 lg:px-20">
						<h2 className="text-3xl">NGN25,000</h2>
						<p className="my-3">Per Subscription</p>
						<p className="text-gray-500 md:hidden">BMCT Affiliate (BMCTOKEN Reward)</p>
						<p className="text-gray-500 hidden md:block">
							GEI Revenue Share BRONZE PRO + TAX. 40% of your Empowerment is credited in Your MN daily wallet for 30 days. 60%
							of your Empowerment is credited into GEI empowerment wallet for 30 days. After 30 days the wallet is unlocked if
							you have sponsored a minimum of 5 members of the same package or Above. The default of not sponsoring 5 members
							within 30 days attract a 20% fine on your empowerment wallet whenever you complete the requirement, ur wallet
							remains Lock until the requirement is achieved
						</p>
					</div>
					<div className="grid grid-cols-3 md:grid-cols-5 gap-4">
						<div className="col-span-1 md:col-span-1 font-bold">Levels:</div>
						<div className="col-span-2 md:col-span-4 lg:grid lg:grid-cols-2">
							<p className="mb-3">
								<span className="font-bold">Level 1 Cash Bonus:</span> <span className="font-thin">NGN 2,000.00</span>
							</p>
							<p className="mb-3">
								<span className="font-bold">Level 1 BMCT:</span> <span className="font-thin">0.32413527893900282</span>
							</p>
							<p className="mb-3">
								<span className="font-bold">Level 2 Cash Bonus:</span> <span className="font-thin">NGN 2,000.00</span>
							</p>
							<p className="mb-3">
								<span className="font-bold">Level 2 BMCT:</span> <span className="font-thin">0.32413527893900282</span>
							</p>
							<p className="mb-3">
								<span className="font-bold">Level 3 Cash Bonus:</span> <span className="font-thin">NGN 2,000.00</span>
							</p>
							<p className="mb-3">
								<span className="font-bold">Level 3 BMCT:</span> <span className="font-thin">0.32413527893900282</span>
							</p>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-3">
						<div className="font-bold">Remark: 0</div>
						<div className="font-bold">Duration: 0</div>
						<div className="font-bold">Subscriber: 0</div>
					</div>
					<div className="grid grid-cols-3 md:grid-cols-5 gap-4 my-8">
						<div className="col-span-1 md:col-span-1 font-bold">Description:</div>
						<div className="col-span-2 md:col-span-4">
							<p>
								GEI Revenue Share BRONZE PRO + TAX. 40% of your Empowerment is credited in Your MN daily wallet for 30 days.
								60% of your Empowerment is credited into GEI empowerment wallet for 30 days. After 30 days the wallet is
								unlocked if you have sponsored a minimum of 5 members of the same package or Above. The default of not
								sponsoring 5 members within 30 days attract a 20% fine on your empowerment wallet whenever you complete the
								requirement, ur wallet remains Lock until the requirement is achieved
							</p>
						</div>
					</div>
					<button className="py-3 my-4 text-center bg-purple block w-full text-white rounded border border-purple hover:bg-black transition duration-300 ease">
						Subscribe
					</button>
				</div>
			</Layout>
		</div>
	);
}
