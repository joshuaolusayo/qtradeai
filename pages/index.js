import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "./components/Layout";
import Image from "next/image";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Carousel from "./components/Dashboard/Slider";
import Invoice from "./components/Dashboard/Invoice";
import Requirement from "./components/Dashboard/Requirement";
import Selection from "./components/Dashboard/Selection";
import Brokers from "./components/Dashboard/Brokers";
import Rewards from "./components/Dashboard/Rewards";

export default function Home() {
	const [open, setOpen] = useState(true);

	return (
		<div>
			<Layout>
				<Head>
					<title>Qtrade AI</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className="p-4 dashboard">
					<div className="flex justify-between items-center">
						<h1>Dashboard</h1>
						<Image className="header-img" src="/assets/logo.png" alt="Logo" width={215} height={43} />
					</div>
					{open && (
						<div className="relative px-4 py-2 my-3 bg-gray-200 border-2 border-purple rounded">
							<Typography variant="body1" className="py-3 px-4">
								BMWToken now trading on Naija Crypt exchange paired with NGN --{" "}
								<Link href="/">
									<a className="text-purple underline">Read more</a>
								</Link>
							</Typography>
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
					<div className="md:grid md:grid-cols-6 md:gap-4">
						<div className="hidden md:block md:col-span-6 xl:col-span-3 my-6">
							<Invoice />
						</div>
						<div className="hidden md:block md:col-span-6 xl:col-span-3 mt-10 mb-6">
							<Requirement />
							<Selection />
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}
