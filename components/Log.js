export default function Log() {
	return (
		<>
			<div className="lg:grid lg:grid-cols-2 lg:gap-4 mt-8">
				<div className="bg-gray-300 bg-opacity-30 p-3 rounded border border-purple mb-3 lg:mb-0">
					<div className="grid grid-cols-3 items-center mb-3">
						<div className="col-span-2">
							<p className="text-purple text-sm font-bold mb-0">ID: 01293887377ywy</p>
						</div>
						<div className="col-span-1 flex justify-end">
							<button className="bg-yellow text-black text-sm p-2 rounded focus:outline-none btn">Awaiting Payment</button>
						</div>
					</div>
					<div className="grid grid-cols-3 items-center mb-3">
						<div className="col-span-2">
							<span className="text-gray-500 text-v-sm">
								<span className="font-bold">Package: </span>Business Coins (BC Leverage Program)
							</span>
						</div>
						<div className="col-span-1 flex justify-end">
							<span className="text-v-sm">
								Cost: <span className="font-bold">#120,000</span>
							</span>
						</div>
					</div>
					<div className="grid grid-cols-3 items-center mb-3">
						<div className="col-span-2">
							<button className="bg-red-300 hover:bg-red-500 text-black text-sm py-2 px-4 rounded">Cancel Order</button>
						</div>
						<div className="col-span-1 flex justify-end">
							<span className="text-purple text-v-sm">
								<span className="font-bold">Date: </span>15-05-21
							</span>
						</div>
					</div>
				</div>
				<div className="bg-gray-300 bg-opacity-30 p-3 rounded border border-purple mb-3 lg:mb-0">
					<div className="grid grid-cols-3 items-center mb-3">
						<div className="col-span-2">
							<p className="text-purple text-sm font-bold mb-0">ID: 01293887377ywy</p>
						</div>
						<div className="col-span-1 flex justify-end">
							<button className="bg-yellow text-black text-sm p-2 rounded focus:outline-none btn">Awaiting Payment</button>
						</div>
					</div>
					<div className="grid grid-cols-3 items-center mb-3">
						<div className="col-span-2">
							<span className="text-gray-500 text-v-sm">
								<span className="font-bold">Package: </span>Business Coins (BC Leverage Program)
							</span>
						</div>
						<div className="col-span-1 flex justify-end">
							<span className="text-v-sm">
								Cost: <span className="font-bold">#120,000</span>
							</span>
						</div>
					</div>
					<div className="grid grid-cols-3 items-center mb-3">
						<div className="col-span-2">
							<button className="bg-red-300 hover:bg-red-500 text-black text-sm py-2 px-4 rounded">Cancel Order</button>
						</div>
						<div className="col-span-1 flex justify-end">
							<span className="text-purple text-v-sm">
								<span className="font-bold">Date: </span>15-05-21
							</span>
						</div>
					</div>
				</div>
				<div className="bg-gray-300 bg-opacity-30 p-3 rounded border border-purple mb-3 lg:mb-0">
					<div className="grid grid-cols-3 items-center mb-3">
						<div className="col-span-2">
							<p className="text-purple text-sm font-bold mb-0">ID: 01293887377ywy</p>
						</div>
						<div className="col-span-1 flex justify-end">
							<button className="bg-yellow text-black text-sm p-2 rounded focus:outline-none btn">Awaiting Payment</button>
						</div>
					</div>
					<div className="grid grid-cols-3 items-center mb-3">
						<div className="col-span-2">
							<span className="text-gray-500 text-v-sm">
								<span className="font-bold">Package: </span>Business Coins (BC Leverage Program)
							</span>
						</div>
						<div className="col-span-1 flex justify-end">
							<span className="text-v-sm">
								Cost: <span className="font-bold">#120,000</span>
							</span>
						</div>
					</div>
					<div className="grid grid-cols-3 items-center mb-3">
						<div className="col-span-2">
							<button className="bg-red-300 hover:bg-red-500 text-black text-sm py-2 px-4 rounded">Cancel Order</button>
						</div>
						<div className="col-span-1 flex justify-end">
							<span className="text-purple text-v-sm">
								<span className="font-bold">Date: </span>15-05-21
							</span>
						</div>
					</div>
				</div>
			</div>

			<style jsx>
				{`
					.bg-yellow {
						background: #e4cf0b;
					}

					.btn {
						font-size: 9px;
					}

                    @media screen and (min-width: 400px) {
						.btn {
							font-size: 12px;
						}
					}
                   
                    @media screen and (min-width: 1024px) {
						.btn {
							font-size: 11px;
						}
					}
                    
                    @media screen and (min-width: 1100px) {
						.btn {
							font-size: 12px;
						}
					}

					.text-v-sm {
						font-size: 11.9px;
					}

					@media screen and (min-width: 400px) {
						.text-v-sm {
							font-size: 14px;
						}
					}
				`}
			</style>
		</>
	);
}
