import { useEffect, useState } from "react";
import { getSessionList } from "../src/utils/contentful";

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
		<div className="pt-[100px] pl-[10%] pr-[10%]">
			<p className="text-lg">{preHeader}</p>
			<p className="text-3xl font-bold mt-[5px]">{header}</p>
		</div>
	)
}

export default Session;