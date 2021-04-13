export default function MyCards(): JSX.Element {
  return (
    <div className="my-10 lg:w-3/4 xl:w-1/2 md:px-8 md:py-12 md:bg-white md:rounded-xl">
      <h1 className="text-purple mb-5">Available Cards</h1>
      <div className="grid grid-cols-12 items-center justify-between bg-light-blue px-4 py-4 sm:py-6 md:px-6 md:py-8 rounded-xl mb-5 shadow">
        <div className="col-span-8">
          <h3 className="text-purple font-bold">Card ID: 01293887377ywy</h3>
          <p className="text-gray-700">BVN:12225524526</p>
        </div>
        <div className="col-span-4 text-right">
          <button className="bg-gray-200 text-black rounded px-3 py-2">Pending</button>
        </div>
      </div>
      <div className="grid grid-cols-12 items-center justify-between bg-light-blue px-4 py-4 sm:py-6 md:px-6 md:py-8 rounded-xl mb-5 shadow">
        <div className="col-span-8">
          <h3 className="text-purple font-bold">Card ID: 01293887377ywy</h3>
          <p className="text-gray-700">BVN:12225524526</p>
        </div>
        <div className="col-span-4 text-right">
          <button className="bg-gray-200 text-black rounded px-3 py-2">Pending</button>
        </div>
      </div>
      <div className="grid grid-cols-12 items-center justify-between bg-light-blue px-4 py-4 sm:py-6 md:px-6 md:py-8 rounded-xl mb-5 shadow">
        <div className="col-span-8">
          <h3 className="text-purple font-bold">Card ID: 01293887377ywy</h3>
          <p className="text-gray-700">BVN:12225524526</p>
        </div>
        <div className="col-span-4 text-right">
          <button className="bg-gray-200 text-black rounded px-3 py-2">Pending</button>
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
