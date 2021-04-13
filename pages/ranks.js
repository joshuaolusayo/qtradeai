import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Ranks() {
	return (
		<div>
			<Layout title="Ranks">
				<Head>
					<title>Ranks</title>
				</Head>

				<div className="p-4 md:p-6 lg:p-10 min-h-screen">
					<div className="my-10 mx-auto justify-center grid sm:grid-cols-3 gap-6">
						<div className="w-44">
							<Image src="/assets/rank.png" width={175} height={175} />
							<button className="bg-purple text-white py-1 text-sm text-center rounded w-full border border-purple">
								Attained
							</button>
						</div>
						<div className="w-44">
							<Image src="/assets/rank.png" width={175} height={175} />
							<button className="text-white py-1 text-sm text-center rounded w-full border disabled">Attained</button>
						</div>
						<div className="w-44">
							<Image src="/assets/rank.png" width={175} height={175} />
							<button className="text-white py-1 text-sm text-center rounded w-full border disabled">Attained</button>
						</div>
						<div className="w-44">
							<Image src="/assets/rank.png" width={175} height={175} />
							<button className="text-white py-1 text-sm text-center rounded w-full border disabled">Attained</button>
						</div>
						<div className="w-44">
							<Image src="/assets/rank.png" width={175} height={175} />
							<button className="text-white py-1 text-sm text-center rounded w-full border disabled">Attained</button>
						</div>
						<div className="w-44">
							<Image src="/assets/rank.png" width={175} height={175} />
							<button className="text-white py-1 text-sm text-center rounded w-full border disabled">Attained</button>
						</div>
					</div>
				</div>
			</Layout>

			<style>
				{`
                    .disabled {
                        background: #9399CF;
                        border-color: #9399CF;
                    }
                `}
			</style>
		</div>
	);
}
