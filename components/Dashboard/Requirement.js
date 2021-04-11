import Link from "next/link";

export default function Requirement() {
	return (
		<>
			<div className="grid md:grid-cols-2 md:gap-4">
				<h2 className="text-purple font-bold md:hidden pt-8 pb-4">Trust Commitment</h2>
				<div className="bg-white p-4 md:py-8 md:px-5 rounded-md md:rounded-2xl border border-gray-500">
					<h3 className="text-purple">GET PLATINUM MEMBERSHIP</h3>
					<h4 className="text-gray-400 my-3 font-bold">NGN 1,015,000</h4>
					<Link href="/">
						<a className="text-red-500 underline hover:no-underline">Click here to pay your commitment</a>
					</Link>
					<div className="mt-5 grid grid-cols-10 gap-1 mb-3">
						<span className="text-gray-800 col-span-6">GEI Empowerment Due Date</span>
						<span className="text-purple col-span-4">5 September, 2020</span>
					</div>
					<div className="grid grid-cols-10 gap-1 mb-3">
						<span className="text-gray-800 col-span-6">Trust Empowerment Due Date</span>
						<span className="text-purple col-span-4">5 September, 2020</span>
					</div>
				</div>

				<h2 className="text-purple font-bold md:hidden pt-8 pb-4">GEI Requirement</h2>
				<div className="bg-white p-4 md:py-8 md:px-5 rounded-md md:rounded-2xl border border-gray-500">
					<h3 className="text-purple">GET PLATINUM MEMBERSHIP</h3>
					<h4 className="text-gray-400 my-3 font-bold">NGN 1,015,000</h4>
					<Link href="/">
						<a className="text-red-500 underline hover:no-underline">Click here to pay your commitment</a>
					</Link>
					<div className="mt-5 grid grid-cols-10 gap-1 mb-3">
						<span className="text-gray-800 col-span-6">GEI Empowerment Due Date</span>
						<span className="text-purple col-span-4">5 September, 2020</span>
					</div>
					<div className="grid grid-cols-10 gap-1 mb-3">
						<span className="text-gray-800 col-span-6">Trust Empowerment Due Date</span>
						<span className="text-purple col-span-4">5 September, 2020</span>
					</div>
				</div>
			</div>
			<style jsx>{`
				h3 {
					font-size: 14px;
				}

				h4 {
					font-size: 24px;
				}

				a {
					font-size: 15px;
				}

				span {
					font-size: 14px;
				}
			`}</style>
		</>
	);
}
