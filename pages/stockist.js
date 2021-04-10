import React, { useState } from "react";
import Head from "next/head";
import Layout from "./components/Layout";
import Image from "next/image";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const countries = [
	{
		value: "United States",
		label: "USD",
	},
	{
		value: "Nigeria",
		label: "NGN",
	},
	{
		value: "South Africa",
		label: "SA",
	},
];

export default function BeepEstate() {
	const [currency, setCurrency] = React.useState("EUR");

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};
	return (
		<div>
			<Layout>
				<Head>
					<title>Stockist</title>
				</Head>
				<div className="p-4 md:p-6 lg:p-10 min-h-screen">
					<div className="flex justify-between items-center">
						<h1>Stockist</h1>
						<Image className="header-img" src="/assets/logo.png" alt="Logo" width={215} height={43} />
					</div>
					<div className=""></div>
					<TextField
						id="standard-select-currency"
						select
						label="Select Country"
						value={currency}
						onChange={handleChange}
						helperText="Please select your currency"
					>
						{countries.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</div>
			</Layout>
		</div>
	);
}
