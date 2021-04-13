export default function Invoice() {
	return (
		<>
			<h2 className="font-bold text-purple mb-2">My Wallets</h2>
			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-1">
					<div className="bg-purple p-4 mx-0 rounded-t-md border-purple border">
						<h3 className="text-gray-400 mb-2">INVOICE THIS MONTH</h3>
						<h2 className="font-bold text-white">₦4,080,230,290.00</h2>
					</div>
					<div className="w-full h-16 bg-white rounded-b-md border-purple border"></div>
				</div>
				<div className="col-span-1">
					<div className="bg-purple p-4 mx-0 rounded-t-md border-purple border">
						<h3 className="text-gray-400 mb-2">INVOICE THIS MONTH</h3>
						<h2 className="font-bold text-white">₦4,080,230,290.00</h2>
					</div>
					<div className="w-full h-16 bg-white rounded-b-md border-purple border"></div>
				</div>
				<div className="col-span-1">
					<div className="bg-purple p-4 mx-0 rounded-t-md border-purple border">
						<h3 className="text-gray-400 mb-2">INVOICE THIS MONTH</h3>
						<h2 className="font-bold text-white">₦4,080,230,290.00</h2>
					</div>
					<div className="w-full h-16 bg-white rounded-b-md border-purple border"></div>
				</div>
				<div className="col-span-1">
					<div className="bg-purple p-4 mx-0 rounded-t-md border-purple border">
						<h3 className="text-gray-400 mb-2">INVOICE THIS MONTH</h3>
						<h2 className="font-bold text-white">₦4,080,230,290.00</h2>
					</div>
					<div className="w-full h-16 bg-white rounded-b-md border-purple border"></div>
				</div>
			</div>

			<style jsx>
				{`
					h3 {
						font-size: 12px;
					}

					h2 {
						font-size: 16px;
					}
				`}
			</style>
		</>
	);
}
