import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/dashboardLayout/Layout';
import { Input } from 'antd';
import { Select } from 'antd';
import { Table } from 'antd';

import 'antd/dist/antd.css';
const { Option } = Select;
const { Search } = Input;

const columns = [
  {
    title: 'Area',
    dataIndex: 'area',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const tableData = [
  {
    key: '1',
    area: 'LAG-2020',
    name: 'Xess Stokist Alaba',
    phoneNumber: '09001921212',
    email: 'Doncharlison@gmail.com',
    address: 'My address is my address',
  },
  {
    key: '2',
    area: 'LAG-2020',
    name: 'aXpress Stokist Alaba',
    phoneNumber: '01001921212',
    email: 'Doncharlison@gmail.com',
    address: 'My address is my address',
  },
  {
    key: '3',
    area: 'LAG-2020',
    name: 'wXpress Stokist Alaba',
    phoneNumber: '09001921212',
    email: 'Doncharlison@gmail.com',
    address: 'My address is my address',
  },
  {
    key: '4',
    area: 'LAG-2020',
    name: 'eXpress Stokist Alaba',
    phoneNumber: '08001921212',
    email: 'Doncharlison@gmail.com',
    address: 'My address is my address',
  },
  {
    key: '5',
    area: 'LAG-2020',
    name: 'Xpress Stokist Alaba',
    phoneNumber: '09001921212',
    email: 'Doncharlison@gmail.com',
    address: 'My address is my address',
  },
  {
    key: '6',
    area: 'LAG-2020',
    name: 'Xpress Stokist Alaba',
    phoneNumber: '09001921212',
    email: 'Doncharlison@gmail.com',
    address: 'My address is my address',
  },
  {
    key: '7',
    area: 'LAG-2020',
    name: 'Xpress Stokist Alaba',
    phoneNumber: '02001921212',
    email: 'Doncharlison@gmail.com',
    address: 'My address is my address',
  },
];

export default function Stockist(): JSX.Element {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => console.log(value);

  const [pagination] = useState({ current: 1, pageSize: 10 });

  return (
    <div>
      <Layout title="Stockist">
        <Head>
          <title>Stockist</title>
        </Head>
        <div className="p-4 md:p-6 lg:p-10 min-h-screen">
          <div className="my-10 md:grid md:grid-cols-6 xl:grid-cols-12 md:gap-4 md:items-center text-sm">
            <div className="grid grid-cols-3 col-span-2 gap-1 sm:w-auto mb-5 md:mb-0 items-center order-last md:order-none">
              <span className="col-span-3 md:col-span-1">Sort By: </span>
              <Select
                defaultValue="name"
                onChange={handleChange}
                className="bg-purple text-light col-span-3 md:col-span-2"
              >
                <Option value="name">Name</Option>
                <Option value="area">Area</Option>
                <Option value="number">Number</Option>
              </Select>
            </div>
            <Search
              placeholder="Search packages"
              onSearch={onSearch}
              className="search-box mb-5 md:mb-0 shadow-none col-span-4"
            />
            <div className="grid grid-cols-3 col-span-3 gap-1 w-100 justify-center mb-5 md:mb-0 items-center">
              <span className="col-span-3 md:col-span-1">Filter By State: </span>
              <Select
                defaultValue="all"
                onChange={handleChange}
                className="bg-purple text-light col-span-3 md:col-span-2 w-100 md:w-auto my-3"
              >
                <Option value="all">All</Option>
                <Option value="abia">Abia</Option>
              </Select>
            </div>
            <div className="grid grid-cols-3 col-span-3 gap-1 justify-center mb-5 md:mb-0 items-center">
              <span className="col-span-3 md:col-span-1">Filter By LG: </span>
              <Select
                defaultValue="all"
                onChange={handleChange}
                className="bg-purple col-span-3 md:col-span-2 w-100 md:w-auto my-3"
              >
                <Option value="all">All</Option>
                <Option value="oriire">Oriire</Option>
              </Select>
            </div>
          </div>

          <Table
            columns={columns}
            dataSource={tableData}
            pagination={pagination}
            size="small"
            className="my-10 text-sm"
            scroll={{ x: true }}
          />
        </div>
      </Layout>

      <style jsx>
        {`
          .table {
            font-size: 12px !important;
          }
        `}
      </style>
    </div>
  );
}
