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
		<div className="carousel">
			<Slider {...settings} className="-mx-2 my-6">
				<div className="px-2">
					<div className="bg-purple rounded-xl py-5 px-4 mx-0 w-full">
						<h3 className="mb-2 text-sm text-white">GEI Products Wallet</h3>
						<h2 className="text-sm text-white">NGN</h2>
						<h1 className="font-bold text-lg text-white">#10,000,000</h1>
					</div>
				</div>

				<div className="px-2">
					<div className="bg-purple rounded-xl py-5 px-4 mx-0 w-full">
						<h3 className="mb-2 text-sm text-white">GEI Products Wallet</h3>
						<h2 className="text-sm text-white">NGN</h2>
						<h1 className="font-bold text-lg text-white">#10,000,000</h1>
					</div>
				</div>

				<div className="px-2">
					<div className="bg-purple rounded-xl py-5 px-4 mx-0 w-full">
						<h3 className="mb-2 text-sm text-white">GEI Products Wallet</h3>
						<h2 className="text-sm text-white">NGN</h2>
						<h1 className="font-bold text-lg text-white">#10,000,000</h1>
					</div>
				</div>

				<div className="px-2">
					<div className="bg-purple rounded-xl py-5 px-4 mx-0 w-full">
						<h3 className="mb-2 text-sm text-white">GEI Products Wallet</h3>
						<h2 className="text-sm text-white">NGN</h2>
						<h1 className="font-bold text-lg text-white">#10,000,000</h1>
					</div>
				</div>
			</Slider>
		</div>
	);
}
