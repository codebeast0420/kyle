import { useEffect, useState } from "react";
import { getHeroSection } from "../src/utils/contentful";
import Image from "next/image";
import DotLine from "./dotline";

const Landing = () => {
	const [heroHeader, setHeroHeader] = useState('');
	const [heroSub, setHeroSub] = useState('');
	useEffect(() => {
		getHeroSection().then((res) => {
			setHeroHeader(res.header);
			setHeroSub(res.subtext);
		});
	}, []);

	return (
		<div className="flex">
			<div className="hero ml-[10%] w-[27%] mt-[85px]">
				<h1 className="text-[50px] font-semibold" style={{ fontFamily: "Lato" }}>{heroHeader}</h1>
				<p className="font-normal text-base" style={{ fontFamily: "Jost" }}>{heroSub}</p>
				<div>
					<button className="w-[180px] h-[40px] rounded-lg bg-sky-400 mt-[30px] text-white">
						Join Us Today!
					</button>
				</div>
			</div>
			<div className="w-2/5 mt-[20px] ml-[18%] pb-8 z-1">
				<Image src="/src/img/Group.png" width={530} height={465} alt="main image"/>
			</div>
			<div className="absolute mt-[308px] dot-line">
				<DotLine />
			</div>
		</div>
	);
}

export default Landing;