import TextField from '@material-ui/core/TextField';

export default function WalletAddress(): JSX.Element {
  return (
    <div className="my-10 lg:w-3/4 xl:1/2 md:px-8 md:py-12 md:bg-white md:rounded-xl">
      <form>
        <div className="mb-5">
          <TextField
            id="outlined-search"
            label="BMCT Address"
            type="text"
            variant="outlined"
            className="w-full"
          />
        </div>
        <div className="mb-5">
          <TextField
            id="outlined-search"
            label="BMT Address"
            type="text"
            variant="outlined"
            className="w-full"
          />
        </div>
        <div className="mb-5">
          <TextField
            id="outlined-search"
            label="BTC Address"
            type="text"
            variant="outlined"
            className="w-full"
          />
        </div>
        <div className="mb-5">
          <TextField
            id="outlined-search"
            label="BPD Address"
            type="text"
            variant="outlined"
            className="w-full"
          />
        </div>
        <div className="">
          <button className="bg-purple w-full py-4 text-center text-white rounded mt-8 hover:bg-white border border-purple">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
