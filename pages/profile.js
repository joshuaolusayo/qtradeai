import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import { Progress } from "antd";

export default function Profile() {
	return (
		<div>
			<Layout title="Profile">
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
							<div className="bg-purple text-light py-6 lg:py-8 flex flex-col justify-center items-center rounded-2xl">
								<Image src="/assets/profile.png" width={80} height={80} className="rounded-circle" />
								<h1 className="text-white mt-4 text-lg">Ayomide Olopha</h1>
								<div className="w-60 mt-4 text-center text-white">
									<div className="mb-1">60%</div>
									<Progress percent={60} showInfo={false} strokeColor="#fff" trailColor="#3440a3" className="rounded" />
								</div>
								<Link href="/edit-profile">
									<a>
										<button className="px-4 py-1 bg-purple border border-white text-white hover:bg-white hover:text-black mt-4 rounded">
											Edit Profile
										</button>
									</a>
								</Link>
							</div>
							<div className="my-6">
								<Link href="/change-password">
									<a>
										<button className="bg-gray-300 bg-opacity-30 btn-purple hover:text-black text-purple flex justify-between items-center w-full py-2 px-3 border border-purple rounded mb-4 text-sm">
											Change Password
											<svg width="8" height="16" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M1 1.5L9 9L1 16.5"
													stroke="#5F6FFE"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</button>
									</a>
								</Link>

								<Link href="/update-kyc">
									<a>
										<button className="bg-gray-300 bg-opacity-30 btn-purple hover:text-black text-purple flex justify-between items-center w-full py-2 px-3 border border-purple rounded mb-4 text-sm">
											<span>Update KYC</span>
											<svg width="8" height="16" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M1 1.5L9 9L1 16.5"
													stroke="#5F6FFE"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</button>
									</a>
								</Link>

								<button className="bg-gray-300 bg-opacity-30 btn-purple hover:text-black text-purple flex justify-between items-center w-full py-2 px-3 border border-purple rounded mb-4 text-sm">
									<span>Logout</span>
									<svg width="8" height="16" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M1 1.5L9 9L1 16.5"
											stroke="#5F6FFE"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
								<button
									className="bg-purple text-white text-center w-full rounded py-3 text-sm"
									onClick={(e) => e.preventDefault()}
								>
									Save Changes
								</button>
							</div>
						</div>
					</div>
				</div>

				<style jsx>
					{`
						.btn-purple {
							transition: all 300ms ease;
						}

						.btn-purple:hover {
							background: #09157f;
							color: #fff;
						}

						.btn-purple:hover svg path {
							stroke: #fff !important;
						}
					`}
				</style>
			</Layout>
		</div>
	);
}
