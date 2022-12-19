import { useEffect, useState } from "react";
import Image from "next/image";
import { getSession } from "../src/utils/contentful";
import AboutUs from "./aboutUs";
import WhatWeDo from "./whatWeDo";
import Session from "./session";

const IntroHome = () => {

	const [sessionTitle, setSessionTitle] = useState('');
	const [sessionData, setSessionData] = useState('');
	const winWidth = window.innerWidth;

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
						<h1 style={{ fontFamily: 'Lato' }} className="font-bold text-3xl">{sessionTitle}</h1>
						<p className="mt-[10px] text-center text-sm pl-[10%] pr-[10%]">{sessionData}</p>
					</div>
					<div className="flex mt-[10px] flex-col w-full">
						<div className="flex justify-center">
							<div className="flex items-center">
								<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 16.3125C0 17.2441 0.767857 18 1.71429 18H14.2857C15.2321 18 16 17.2441 16 16.3125V6.75H0V16.3125ZM11.4286 9.42188C11.4286 9.18984 11.6214 9 11.8571 9H13.2857C13.5214 9 13.7143 9.18984 13.7143 9.42188V10.8281C13.7143 11.0602 13.5214 11.25 13.2857 11.25H11.8571C11.6214 11.25 11.4286 11.0602 11.4286 10.8281V9.42188ZM11.4286 13.9219C11.4286 13.6898 11.6214 13.5 11.8571 13.5H13.2857C13.5214 13.5 13.7143 13.6898 13.7143 13.9219V15.3281C13.7143 15.5602 13.5214 15.75 13.2857 15.75H11.8571C11.6214 15.75 11.4286 15.5602 11.4286 15.3281V13.9219ZM6.85714 9.42188C6.85714 9.18984 7.05 9 7.28571 9H8.71429C8.95 9 9.14286 9.18984 9.14286 9.42188V10.8281C9.14286 11.0602 8.95 11.25 8.71429 11.25H7.28571C7.05 11.25 6.85714 11.0602 6.85714 10.8281V9.42188ZM6.85714 13.9219C6.85714 13.6898 7.05 13.5 7.28571 13.5H8.71429C8.95 13.5 9.14286 13.6898 9.14286 13.9219V15.3281C9.14286 15.5602 8.95 15.75 8.71429 15.75H7.28571C7.05 15.75 6.85714 15.5602 6.85714 15.3281V13.9219ZM2.28571 9.42188C2.28571 9.18984 2.47857 9 2.71429 9H4.14286C4.37857 9 4.57143 9.18984 4.57143 9.42188V10.8281C4.57143 11.0602 4.37857 11.25 4.14286 11.25H2.71429C2.47857 11.25 2.28571 11.0602 2.28571 10.8281V9.42188ZM2.28571 13.9219C2.28571 13.6898 2.47857 13.5 2.71429 13.5H4.14286C4.37857 13.5 4.57143 13.6898 4.57143 13.9219V15.3281C4.57143 15.5602 4.37857 15.75 4.14286 15.75H2.71429C2.47857 15.75 2.28571 15.5602 2.28571 15.3281V13.9219ZM14.2857 2.25H12.5714V0.5625C12.5714 0.253125 12.3143 0 12 0H10.8571C10.5429 0 10.2857 0.253125 10.2857 0.5625V2.25H5.71429V0.5625C5.71429 0.253125 5.45714 0 5.14286 0H4C3.68571 0 3.42857 0.253125 3.42857 0.5625V2.25H1.71429C0.767857 2.25 0 3.00586 0 3.9375V5.625H16V3.9375C16 3.00586 15.2321 2.25 14.2857 2.25Z" fill="#1CCADF" />
								</svg>
								<p className="ml-[10px]">January 22, 2023</p>
							</div>
							<div className="flex items-center ml-[20px]">
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 0C4.02823 0 0 4.02823 0 9C0 13.9718 4.02823 18 9 18C13.9718 18 18 13.9718 18 9C18 4.02823 13.9718 0 9 0ZM11.0722 12.7052L7.87137 10.379C7.75887 10.2956 7.69355 10.1649 7.69355 10.027V3.91935C7.69355 3.67984 7.88952 3.48387 8.12903 3.48387H9.87097C10.1105 3.48387 10.3065 3.67984 10.3065 3.91935V8.91653L12.6109 10.5931C12.8069 10.7347 12.8468 11.0069 12.7052 11.2028L11.6819 12.6109C11.5403 12.8032 11.2681 12.8468 11.0722 12.7052Z" fill="#1CCADF" />
								</svg>
								<p className="ml-[10px]">03:00PM - 05:00PM ET</p>
							</div>
						</div>
						<div className=" flex justify-between mt-[-30px]">
							<Image src="/src/img/megaphone1.png" width={60} height={60} alt="megaphone left" />
							<Image src="/src/img/megaphone2.png" width={60} height={60} alt="megaphone right" />
						</div>
					</div>
				</div>
				<div className="w-1/4 h-[50px] bg-[#142630] mt-[-25px] mb-[200px]"></div>
			</div>
			<AboutUs />
			<Image src="/src/img/frame.png" width={winWidth} height={60} alt="frame" className="absolute z-10 top-[950px]" style={{ maxWidth: "1374px" }} />
			<WhatWeDo />
			<Session />
		</div>
	)
}

export default IntroHome;