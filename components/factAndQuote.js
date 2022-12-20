import { useEffect, useState } from "react"
import { getFactAndQuote } from "../src/utils/contentful"
import FactQuoteCard from "./factQuoteCard";
import SlideBtn from "./slideBtn";

const FactAndQuote = () => {
	const [header, setHeader] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		getFactAndQuote().then((res) => {
			setHeader(res.header);
			setDescription(res.description);
			console.log(res);
		})
	}, [])
	return (
		<div className="pl-[10%] pr-[10%] pt-[100px] pb-[100px]" style={{ backgroundColor: "rgba(28, 202, 223, 0.08)" }}>
			<p className="text-3xl font-bold text-black">{header}</p>
			<p className="text-lg mt-[5px] text-black">{description}</p>
			<div className="mt-[30px] flex">
				<FactQuoteCard imgSrc={"/src/img/image 12.png"} name={"Nicolas Smith"} content={"Consectetur a erat nam at lectus urna duis.Ut eu sem integer vitae justo eget magna fermentum.In vitae turpis massa sed elementum tempus egestas sed sed.Est eget nulla facilisi. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras."} school={"12th Science Student at ABC High School."} />
				<FactQuoteCard imgSrc={"/src/img/image 13.png"} className={"ml-[10px]"} name={"Michal Jordan"} content={"Lorem ipsum is simply dummy textsConsectetur a erat nam at lectus urna duis. Ut eu sem integer vitae. In vitae turpis massa sed elementum tempus egestas sed sed. Est eget nulla facilisi. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras."} school={"12th Science Student at ABC High School."} />
			</div>
			<SlideBtn />
		</div>
	)
}

export default FactAndQuote;