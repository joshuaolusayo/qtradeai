import TextField from "@material-ui/core/TextField";

export default function CreateBank(props) {
	return (
		<>
			<span className="font-gray-500">We need your information in order to process your withdrawal</span>
			<div className="my-5">
				<div className="mb-5">
					<TextField id="outlined-search" label="Account Name" type="text" variant="outlined" className="w-full" />
				</div>
				<div className="mb-5">
					<TextField id="outlined-search" label="Bank Name" type="text" variant="outlined" className="w-full" />
				</div>
				<div className="mb-5">
					<TextField id="outlined-search" label="Account Number" type="text" variant="outlined" className="w-full" />
				</div>
				<div>
					<button
						className="bg-purple w-full py-4 text-center text-white rounded mt-8 border focus:outline-none border-purple"
						onClick={(e) => (e.preventDefault(), props.setSaved(false), props.setSaving(true))}
					>
						Save Bank
					</button>
				</div>
			</div>
		</>
	);
}
