import { useEffect, useState } from "react"
import { getWahtYouWillGain } from "../src/utils/contentful"
import TopicItem from "./topicItem";

const WhatWeDo = () => {
	const [preheader, setPreheader] = useState('');
	const [header, setHeader] = useState('');
	const [body, setBody] = useState('');
	const [topicHeader, setTopicHeader] = useState('');
	const [topics, setTopics] = useState([]);
	useEffect(() => {
		getWahtYouWillGain().then((res) => {
			setPreheader(res.preHeader);
			setHeader(res.header);
			setBody(res.body.json.content[0].content[0].value);
			setTopicHeader(res.topicsHeader);
			setTopics(res.topics);
		})
	})
	return (
		<div className="bg-[#ffebcc] w-full mt-[-25px] relative text-black pt-[200px] pl-[10%] pr-[10%] pb-[50px] flex">
			<div className="w-2/3">
				<p className="text-lg">{preheader}</p>
				<p className="text-3xl font-bold mt-[5px]">{header}</p>
				<p className="mt-[15px] text-black" style={{ fontFamily: "Jost" }}>
					Our approach is to create an interactive online training experience and
					foster connections to various interest groups that have successfully employed
					social media to advance social justice causes.
				</p>
				<p className="mt-[15px] text-black" style={{ fontFamily: "Jost" }}>
					<b>The SMSJ program will host four monthly 90 - 120 minute workshops.</b>
				</p>
				<p className="mt-[15px] text-black" style={{ fontFamily: "Jost" }}>
					Each breakout group will be led by a subject matter expert with experience working on the cause,
					plus a representative from our host organization, and will be supported by a student leaders to
					help facilitate conversation among the student participants.
					These individuals will participate in each of the four Sunday workshops.
				</p>
			</div>
			<div className="w-1/3 ml-[5%]">
				<p className="w-[205px] font-bold text-black">{topicHeader}</p>
				<div className="bg-white w-[90%] pl-[20px] pt-[15px] mt-[15px] rounded pb-[20px]">
					{topics.map((topic, index) => (
						<TopicItem key={index} topic={topic} />
					))}
				</div>
			</div>
		</div>
	)
}

export default WhatWeDo;