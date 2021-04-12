import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
	const settings = {
		centerPadding: "20px",
		className: "center",
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 500,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 567,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div>
			<Slider {...settings} className="mx-0 my-6">
				<div className="bg-purple rounded-xl py-5 px-4 mx-0 w-100 text-white">
					<h3 className="mb-2 text-sm">GEI Products Wallet</h3>
					<h2 className="text-sm">NGN</h2>
					<h1 className="font-bold text-lg">#10,000,000</h1>
				</div>
				<div className="bg-purple rounded-xl py-5 px-4 mx-0 w-100 text-white">
					<h3 className="mb-2 text-sm">GEI Products Wallet</h3>
					<h2 className="text-sm">NGN</h2>
					<h1 className="font-bold text-lg">#10,000,000</h1>
				</div>
				<div className="bg-purple rounded-xl py-5 px-4 mx-0 w-100 text-white">
					<h3 className="mb-2 text-sm">GEI Products Wallet</h3>
					<h2 className="text-sm">NGN</h2>
					<h1 className="font-bold text-lg">#10,000,000</h1>
				</div>
				<div className="bg-purple rounded-xl py-5 px-4 mx-0 w-100 text-white">
					<h3 className="mb-2 text-sm">GEI Products Wallet</h3>
					<h2 className="text-sm">NGN</h2>
					<h1 className="font-bold text-lg">#10,000,000</h1>
				</div>
			</Slider>
		</div>
	);
}
