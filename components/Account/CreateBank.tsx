export default function CreateBank(props): JSX.Element {
  return (
    <>
      <span className="font-gray-500">
        We need your information in order to process your withdrawal
      </span>
      <div className="my-5 text-sm">
        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Account Name</label>
          <input
            className="bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="text"
            placeholder="Account Name"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Bank Name</label>
          <input
            className="bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="text"
            placeholder="Bank Name"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-purple text-sm mb-1">Account Number</label>
          <input
            className="bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
            type="number"
            placeholder="Account Number"
          />
        </div>

        <div>
          <button
            className="bg-purple w-full py-3 text-sm text-center text-white rounded mt-3 border focus:outline-none border-purple"
            onClick={(e) => (e.preventDefault(), props.setSaved(false), props.setSaving(true))}
          >
            Save Bank
          </button>
        </div>
      </div>
    </>
  );
}
