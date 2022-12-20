import { useEffect, useState } from "react";
import { getSessionList } from "../src/utils/contentful";
import CommonBtn from "./commonBtn";
import SessionCard from "./sessionCard";
import SlideBtn from "./slideBtn";

const Session = () => {
	const [preHeader, setPreHeader] = useState('');
	const [header, setHeader] = useState('');

	useEffect(() => {
		getSessionList().then((res) => {
			setPreHeader(res.preHeader);
			setHeader(res.header);
		})
	})
	return (
		<div className="pt-[100px] pl-[10%] pr-[10%] pb-[100px]">
			<div className="flex">
				<div>
					<p className="text-lg text-black">{preHeader}</p>
					<p className="text-3xl font-bold mt-[5px] text-black">{header}</p>
				</div>
				<div className="text-black flex  ml-[20%]">
					<CommonBtn text={"Upcoming Sessions"} pdSmall={true} />
					<CommonBtn text={"Completed Sessions"} bgColor={"bg-slate-400"} pdSmall={true} className="ml-[10px]" />
					<CommonBtn text={"Canceled Sessions"} bgColor={"bg-slate-400"} pdSmall={true} className="ml-[10px]" />
				</div>
			</div>
			<div className="mt-[20px] flex over-flow-x-scroll">
				<SessionCard
					src={"/src/img/image 7.png"}
					title={"Introduction To The Problems And Power Of Social Media"}
					text={"This Session is An Overview Session To Ensure All Students Understand How Social Media Platforms Are Designed And Reveraged For Good Or Bad Purpose."}
					date={"January 22, 2023"}
					time={"03.00PM - 05:00AM ET"}
				/>
				<SessionCard
					src={"/src/img/image 10.png"}
					title={"Creating Your Social Media Presence and Profile"}
					text={"This session is designed to acknowledge that students may be interested in different approaches to engaging on social media. Some may want to take on a public, outspoken role while others..."}
					date={"February 26, 2023"}
					time={"03.00PM - 05:00AM ET"}
				/>
				<SessionCard
					src={"/src/img/test.png"}
					title={"Who Can You Trust?"}
					text={"This session is designed to teach students how to discern trust from lies and how to identify malicious content that may be disguised. They will learn how to assess content to determine its validity as well as..."}
					date={"March 5, 2023"}
					time={"03.00PM - 05:00AM ET"}
				/>
			</div>
			<SlideBtn />
		</div>
	)
}

export default Session;