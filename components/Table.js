import { Table } from "antd";
import { Input } from "antd";
import { Select } from "antd";

const { Search } = Input;
const { Option } = Select;

const columns = [
	{
		title: "TransactionID",
		dataIndex: "transactionID",
	},
	{
		title: "Package",
		dataIndex: "package",
	},
	{
		title: "Cost",
		dataIndex: "cost",
	},
	{
		title: "Amount",
		dataIndex: "amount",
	},
	{
		title: "Date",
		dataIndex: "date",
	},
	{
		title: "Status",
		dataIndex: "status",
	},
];

const data = [
	{
		key: "1",
		transactionID: "ID: 01293887377ywy",
		package: "Package: Business Cons.(BC Leverage Program)",
		cost: "₦ 300,000",
		amount: 1,
		date: "May 27, 2020 | 9:30am",
		status: "Processed",
	},
	{
		key: "1",
		transactionID: "ID: 01293887377ywy",
		package: "Package: Business Cons.(BC Leverage Program)",
		cost: "₦ 300,000",
		amount: 1,
		date: "May 27, 2020 | 9:30am",
		status: "Processed",
	},
	{
		key: "1",
		transactionID: "ID: 01293887377ywy",
		package: "Package: Business Cons.(BC Leverage Program)",
		cost: "₦ 300,000",
		amount: 1,
		date: "May 27, 2020 | 9:30am",
		status: "Processed",
	},
	{
		key: "1",
		transactionID: "ID: 01293887377ywy",
		package: "Package: Business Cons.(BC Leverage Program)",
		cost: "₦ 300,000",
		amount: 1,
		date: "May 27, 2020 | 9:30am",
		status: "Failed",
	},
];

export default function TableData() {
	const onSearch = (value) => console.log(value);
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	return (
		<div className="bg-white rounded-2xl py-4 px-2 md:p-4 my-10 md:my-16">
			<div className="header md:grid md:grid-cols-2 md:gap-6 md:items-center xl:grid-cols-4">
				<div className="flex justify-between">
					<h3 className="text-gray-600">All Transactions</h3>
					<span className="text-gray-600">39,000</span>
				</div>
				<Search placeholder="Search packages" onSearch={onSearch} className="my-3 search-box mb-5" />
				<div className="grid grid-cols-3 gap-1 w-100 justify-center mb-5 md:mb-0 items-center">
					<span className="col-span-3 md:col-span-1">Filter By: </span>
					<Select
						defaultValue="all"
						onChange={handleChange}
						className="bg-purple text-light col-span-3 md:col-span-2 w-100 md:w-auto my-3"
					>
						<Option value="all">All</Option>
						<Option value="state">State</Option>
					</Select>
				</div>
				<div className="grid grid-cols-3 gap-1 w-100 justify-center mb-5 md:mb-0 items-center">
					<span className="col-span-3 md:col-span-1">Showing: </span>
					<Select
						defaultValue="10 entries"
						onChange={handleChange}
						className="bg-purple text-light col-span-3 md:col-span-2 w-100 md:w-auto my-3"
					>
						<Option value="ten entries">10 entries</Option>
						<Option value="twenty entries">Twenty entries</Option>
					</Select>
				</div>
			</div>
			<Table columns={columns} dataSource={data} size="small" className="my-16" scroll={{ x: true }} />
		</div>
	);
}
