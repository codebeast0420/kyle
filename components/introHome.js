import { useEffect, useState } from "react";
import Image from "next/image";
import { getSession } from "../src/utils/contentful";
import AboutUs from "./aboutUs";
import WhatWeDo from "./whatWeDo";
import Session from "./session";
import Date from "./date";
import SupportBar from "./supportbar";
import FactAndQuote from "./factAndQuote";
import Bottom from "./bottom";

const IntroHome = () => {

	const [sessionTitle, setSessionTitle] = useState('');
	const [sessionData, setSessionData] = useState('');

	useEffect(() => {
		getSession().then((res) => {
			setSessionTitle(res.title);
			setSessionData(res.description.json.content[0].content[0].value);
		})
	}, [])
	return (
		<div>
			<div className="flex flex-col items-center" style={{ background: "linear-gradient(242.14deg, #EAF8FA 0%, #EFFCF7 100%)" }}>
				<div className=" p-[30px] w-2/3 bg-white flex flex-col items-center z-1" >
					<p className="text-[#FF9900]">First Session</p>
					<div className="mt-[10px] flex flex-col items-center">
						<h1 style={{ fontFamily: 'Lato' }} className="font-bold text-3xl text-black">{sessionTitle}</h1>
						<p className="mt-[10px] text-center text-sm pl-[10%] pr-[10%] text-black">{sessionData}</p>
					</div>
					<div className="flex mt-[10px] flex-col w-full">
						<Date date={"January 22, 2023"} time={"03:00PM - 05:00PM ET"} />
						<div className=" flex justify-between mt-[-30px]">
							<Image src="/src/img/megaphone1.png" width={60} height={60} alt="megaphone left" />
							<Image src="/src/img/megaphone2.png" width={60} height={60} alt="megaphone right" />
						</div>
					</div>
				</div>
				<div className="w-1/4 h-[50px] bg-[#142630] mt-[-25px] mb-[200px]"></div>
			</div>
			<AboutUs />
			<Image src="/src/img/frame.png" width={1374} height={60} alt="frame" className="absolute z-10 top-[950px]" style={{ maxWidth: "1374px" }} />
			<WhatWeDo />
			<Session />
			<SupportBar />
			<FactAndQuote />
			<Bottom />
		</div>
	)
}

export default IntroHome;