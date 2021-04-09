import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { Fade as Hamburger } from "hamburger-react";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Layout({ children }) {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="layout">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
			</Head>
			
			<div className="hidden md:grid md:grid-flow-col md:grid-cols-4 lg:grid-cols-5">
				<div className="col-span-1 bg-purple md:min-h-screen">
					<Navigation />
				</div>
				<div className="md:col-span-3 lg:col-span-4">
					<Header />
					{children}
				</div>
			</div>

			<div
				className={`md:hidden ${isOpen ? "bg-gray-500" : ""}`}
				onClick={() => {
					if (isOpen) setOpen(!isOpen);
				}}
			>
				<div className="flex justify-between items-center p-2 shadow sm:px-4 relative">
					<Hamburger toggled={isOpen} toggle={setOpen} />
					<h3 className="text-black">Ayomide Olopha</h3>
					<Image src="/assets/profile.png" width={40} height={40} />
				</div>

				{children}

				{isOpen && (
					<div className="absolute bg-white top-0 left-0 w-4/5 sm:w-1/2 min-h-screen shadow flex flex-col justify-between items-start">
						<div className="w-full">
							<Header />
							<Navigation />
						</div>
						<div className="mb-5">
							<Image src="/assets/logo.png" alt="Logo" width={236} height={47} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
