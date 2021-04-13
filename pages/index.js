import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/Dashboard/Slider";
import Invoice from "../components/Dashboard/Invoice";
import Requirement from "../components/Dashboard/Requirement";
import Selection from "../components/Dashboard/Selection";
import Brokers from "../components/Dashboard/Brokers";
import Rewards from "../components/Dashboard/Rewards";

export default function Home() {
	const [open, setOpen] = useState(true);

	return (
		<div>
			<Layout title="Dashboard">
				<Head>
					<title>Qtrade AI</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className="p-4 md:p-6 lg:p-10 min-h-screen">
					{open && (
						<div className="relative px-2 md:px-4 py-3 my-3 bg-gray-50 border-2 border-purple rounded">
							<span className="text-sm">
								BMWToken now trading on Naija Crypt exchange paired with NGN --{" "}
								<Link href="/">
									<a className="text-purple underline">Read more</a>
								</Link>
							</span>
							<div className="absolute -right-2 -top-2" onClick={() => setOpen(false)}>
								<svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="8" cy="8" r="8" fill="#3440A3" />
									<path d="M5 5L10.5 10.5" stroke="#F9F5F5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M10.5 5L5 10.5" stroke="#F9F5F5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
						</div>
					)}
					<div className="md:hidden pb-20">
						<Carousel />
						<Brokers />
						<Rewards />
						<Requirement />
					</div>
					<div className="md:grid md:grid-cols-6 xl:grid-cols-5 md:gap-8">
						<div className="hidden md:block md:col-span-6 xl:col-span-2 mt-6">
							<Invoice />
						</div>
						<div className="hidden md:block md:col-span-6 xl:col-span-3 my-6 md:my-0 xl:mt-14">
							<Requirement />
							<Selection />
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}
