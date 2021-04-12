import TextField from "@material-ui/core/TextField";

export default function MyBanks() {
	return (
		<div className="my-10 lg:w-3/4 xl:w-1/2 md:px-8 md:py-12 md:bg-white md:rounded-xl">
			<h1 className="text-purple mb-5">Available Banks</h1>
			<div className="grid grid-cols-12 items-center justify-center bg-light-blue px-2 py-2 text-sm sm:px-4 sm:py-6 md:px-6 md:py-8 rounded-xl mb-5 shadow">
				<div className="col-span-2">
					<div className="p-4 w-10 h-10 flex justify-center items-center rounded-full text-center bg-light-blue shadow">
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M13.0687 6.54026C13.0844 10.0652 10.2236 13.0682 6.54025 13.0729C2.94672 13.0771 -0.00279801 10.1803 1.9919e-06 6.53354C0.00280199 2.83922 3.01112 -0.00754498 6.5464 1.50223e-05C10.166 0.00757502 13.0864 2.96242 13.0687 6.54026ZM6.79253 3.9595C6.78105 5.01398 7.66501 5.86854 8.70101 5.86826C9.69137 5.86826 10.6078 5.06857 10.61 3.9567C10.6123 2.83446 9.69557 2.04037 8.71053 2.03842C7.69244 2.03646 6.78049 2.88486 6.79253 3.9595Z"
								fill="#DB353A"
							/>
						</svg>
					</div>
				</div>
				<div className="col-span-5">
					<h3 className="text-purple font-bold mb-0">Fasisi Tariq</h3>
					<p className="text-gray-700">Sterling Bank Nigeria PLC</p>
				</div>
				<div className="col-span-5">
					<p className="text-gray-700">Account Number</p>
					<h3 className="text-purple font-bold">0080106259</h3>
				</div>
			</div>
			<div className="grid grid-cols-12 items-center justify-center bg-light-blue px-2 py-2 text-sm sm:px-4 sm:py-6 md:px-6 md:py-8 rounded-xl mb-5 shadow">
				<div className="col-span-2">
					<div className="p-4 w-10 h-10 flex justify-center items-center rounded-full text-center bg-light-blue shadow">
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M13.0687 6.54026C13.0844 10.0652 10.2236 13.0682 6.54025 13.0729C2.94672 13.0771 -0.00279801 10.1803 1.9919e-06 6.53354C0.00280199 2.83922 3.01112 -0.00754498 6.5464 1.50223e-05C10.166 0.00757502 13.0864 2.96242 13.0687 6.54026ZM6.79253 3.9595C6.78105 5.01398 7.66501 5.86854 8.70101 5.86826C9.69137 5.86826 10.6078 5.06857 10.61 3.9567C10.6123 2.83446 9.69557 2.04037 8.71053 2.03842C7.69244 2.03646 6.78049 2.88486 6.79253 3.9595Z"
								fill="#DB353A"
							/>
						</svg>
					</div>
				</div>
				<div className="col-span-5">
					<h3 className="text-purple font-bold mb-0">Fasisi Tariq</h3>
					<p className="text-gray-700">Sterling Bank Nigeria PLC</p>
				</div>
				<div className="col-span-5">
					<p className="text-gray-700">Account Number</p>
					<h3 className="text-purple font-bold">0080106259</h3>
				</div>
			</div>
			<div className="grid grid-cols-12 items-center justify-center bg-light-blue px-2 py-2 text-sm sm:px-4 sm:py-6 md:px-6 md:py-8 rounded-xl mb-5 shadow">
				<div className="col-span-2">
					<div className="p-4 w-10 h-10 flex justify-center items-center rounded-full text-center bg-light-blue shadow">
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M13.0687 6.54026C13.0844 10.0652 10.2236 13.0682 6.54025 13.0729C2.94672 13.0771 -0.00279801 10.1803 1.9919e-06 6.53354C0.00280199 2.83922 3.01112 -0.00754498 6.5464 1.50223e-05C10.166 0.00757502 13.0864 2.96242 13.0687 6.54026ZM6.79253 3.9595C6.78105 5.01398 7.66501 5.86854 8.70101 5.86826C9.69137 5.86826 10.6078 5.06857 10.61 3.9567C10.6123 2.83446 9.69557 2.04037 8.71053 2.03842C7.69244 2.03646 6.78049 2.88486 6.79253 3.9595Z"
								fill="#DB353A"
							/>
						</svg>
					</div>
				</div>
				<div className="col-span-5">
					<h3 className="text-purple font-bold mb-0">Fasisi Tariq</h3>
					<p className="text-gray-700">Sterling Bank Nigeria PLC</p>
				</div>
				<div className="col-span-5">
					<p className="text-gray-700">Account Number</p>
					<h3 className="text-purple font-bold">0080106259</h3>
				</div>
			</div>

			<style jsx>
				{`
					.bg-light-blue {
						background: #e6e8ff;
					}
				`}
			</style>
		</div>
	);
}
