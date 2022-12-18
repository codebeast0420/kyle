import { useEffect, useState } from "react";
import { getHeroSection } from "../src/utils/contentful";
import Image from "next/image";

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
		<div style={{ display: "flex" }}>
			<div className="hero ml-[10%]" style={{ marginTop: "85px", width: '27%', marginLeft: '10%' }}>
				<h1 className=" " style={{ fontFamily: "Lato", fontSize: "8vh", fontWeight: "900" }}>{heroHeader}</h1>
				<p style={{ fontFamily: "Jost", fontWeight: "400", fontSize: "18px" }}>{heroSub}</p>
				<div style={{ height: "300px" }}>
					<button
						style={{
							width: "180px",
							height: "40px",
							borderRadius: "4px",
							backgroundColor: "#1CCADF",
							marginLeft: "10%",
							marginTop: "30px",
							color: "white"
						}}
					>
						Join Us Today!
					</button>
				</div>
			</div>
			<div style={{ width: "40%", marginTop: '40px', marginLeft: '6%' }}>
				<Image src="/src/img/Group.png" width={570} height={495} alt="main image" />
			</div>
		</div>
	);
}

export default Landing;