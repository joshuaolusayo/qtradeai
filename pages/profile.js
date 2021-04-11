import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import { Progress } from "antd";

export default function Profile() {
	return (
		<div>
			<Layout>
				<Head>
					<title>Profile</title>
				</Head>
				<div className="p-4 md:p-6 lg:p-10 min-h-screen">
					<div className="flex justify-between items-center">
						<h1>Profile</h1>
						<Image className="header-img" src="/assets/logo.png" alt="Logo" width={215} height={43} />
					</div>

					<div className="my-10">
						<div className="lg:w-3/4 lg:mx-auto">
							<div className="bg-purple text-light py-10 lg:py-16 flex flex-col justify-center items-center rounded-2xl">
								<Image src="/assets/profile.png" width={80} height={80} className="rounded-circle" />
								<h1 className="text-white mt-6 text-2xl">Ayomide Olopha</h1>
								<div className="w-60 mt-6 text-center text-white">
									<span>60%</span>
									<Progress percent={60} showInfo={false} strokeColor="#fff" trailColor="#eee" />
								</div>
								<button className="px-8 py-3 bg-purple border border-white text-white hover:bg-white hover:text-black mt-6 rounded">
									Edit Profile
								</button>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}
