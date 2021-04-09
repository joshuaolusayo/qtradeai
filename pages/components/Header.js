import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
	const [width, setWidth] = useState("");

	useEffect(() => {
		window.innerWidth >= 768 ? setWidth(true) : setWidth(false);
	}, [width]);
	return (
		<header className="bg-white">
			<div className="md:shadow-sm py-10 px-4 md:p-4 flex justify-between items-center">
				{width && <Image className="header-img" src="/assets/logo.png" alt="Logo" width={186} height={37} />}

				<div className="flex justify-between items-center">
					<div className="notification px-2 relative top-2 flex">
						<svg width="24" height="27" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M6.9998 16.3333C7.91647 16.3333 8.66647 15.5833 8.66647 14.6667H5.33313C5.33313 15.5833 6.0748 16.3333 6.9998 16.3333ZM11.9998 11.3333V7.16668C11.9998 4.60834 10.6331 2.46668 8.2498 1.90001V1.33334C8.2498 0.641677 7.69147 0.0833435 6.9998 0.0833435C6.30813 0.0833435 5.7498 0.641677 5.7498 1.33334V1.90001C3.35813 2.46668 1.9998 4.60001 1.9998 7.16668V11.3333L0.924799 12.4083C0.399799 12.9333 0.766465 13.8333 1.50813 13.8333H12.4831C13.2248 13.8333 13.5998 12.9333 13.0748 12.4083L11.9998 11.3333Z"
								fill="#162A56"
							/>
						</svg>
						<span className="bg-green-400 text-white rounded-full relative -top-3 -left-3 inline-block w-8 h-8 leading-8 text-center">
							21
						</span>
					</div>
					<div className="flex flex-col justify-content-center items-end">
						<h3 className="text-black">Ayomide Olopha</h3>
						<span className="text-gray-500">ayomideolopha@gmail.com</span>
					</div>
					<div className="px-2 flex justify-center items-center">
						<Image src="/assets/profile.png" width={40} height={40} />
					</div>
				</div>

				<style jsx>
					{`
						
						@media screen and (max-width: 767px) {
							.header-img {
								display: none !important;
							}
						}
					`}
				</style>
			</div>
		</header>
	);
}
