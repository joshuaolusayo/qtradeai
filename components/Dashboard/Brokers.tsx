import Link from 'next/link';

export default function Brokers(): JSX.Element {
  return (
    <>
      <button className="bg-purple text-white md:hidden p-3 mt-10 rounded-md">Brokers</button>
      <div className="py-2 px-4 mt-5 border border-purple text-sm rounded-md bg-gray-50">
        <div className="flex justify-between items-center">
          <h2 className="text-purple">Hantech Global Limited</h2>
          <Link href="/">
            <a className="text-gray-700 underline hover:no-underline">View details</a>
          </Link>
        </div>
      </div>
      <div className="py-2 px-4 mt-5 border border-purple text-sm rounded-md bg-gray-50">
        <div className="flex justify-between items-center">
          <h2 className="text-purple">Hantech Global Limited</h2>
          <Link href="/">
            <a className="text-gray-700 underline hover:no-underline">View details</a>
          </Link>
        </div>
      </div>
      <div className="py-2 px-4 mt-5 border border-purple text-sm rounded-md bg-gray-50">
        <div className="flex justify-between items-center">
          <h2 className="text-purple">Hantech Global Limited</h2>
          <Link href="/">
            <a className="text-gray-700 underline hover:no-underline">View details</a>
          </Link>
        </div>
      </div>
    </>
  );
}
