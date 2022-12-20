import { useEffect, useState } from "react";
import AboutUsCard from "../components/aboutUsCard";
import Bottom from "../components/bottom";
import Header from "../components/header"
import TopTitle from "../components/topTitle";
import { getAboutUs } from "../src/utils/contentful";
import styles from '../styles/Home.module.css'

const AboutUs = () => {
	const [header, setHeader] = useState('');
	const [studentLeadersHeader, setStudentLeadersHeader] = useState('');
	const [subheading, setSubheading] = useState('');
	const [text1, setText1] = useState([]);
	const [text2, setText2] = useState([]);
	const [text3, setText3] = useState([]);
	const [text4, setText4] = useState([]);
	const [text5, setText5] = useState([]);
	const [text6, setText6] = useState([]);

	useEffect(() => {
		getAboutUs().then((res) => {
			setHeader(res.header);
			setStudentLeadersHeader(res.studentLeadersHeader);
			setSubheading(res.subheading);

			let temp = res.body.json.content[0].content[0].value.split("\n");
			for (let i = 0; i < temp.length; i++) {
				if (temp[i] === "") {
					temp.splice(i, 1);
					i--;
				}
			}
			setText1(temp);

			temp = res.body.json.content[1].content[0].value.split("\n");
			for (let i = 0; i < temp.length; i++) {
				if (temp[i] === "") {
					temp.splice(i, 1);
					i--;
				}
			}
			setText2(temp);

			temp = res.body.json.content[2].content[0].value.split("\n");
			for (let i = 0; i < temp.length; i++) {
				if (temp[i] === "") {
					temp.splice(i, 1);
					i--;
				}
			}
			setText3(temp);

			temp = res.body.json.content[3].content[0].value.split("\n");
			for (let i = 0; i < temp.length; i++) {
				if (temp[i] === "") {
					temp.splice(i, 1);
					i--;
				}
			}
			setText4(temp);

			temp = res.body.json.content[4].content[0].value.split("\n");
			for (let i = 0; i < temp.length; i++) {
				if (temp[i] === "") {
					temp.splice(i, 1);
					i--;
				}
			}
			setText5(temp);

			temp = res.body.json.content[5].content[0].value.split("\n");
			for (let i = 0; i < temp.length; i++) {
				if (temp[i] === "") {
					temp.splice(i, 1);
					i--;
				}
			}
			setText6(temp);

		})
	}, [])
	return (
		<div className={styles.home} >
			<div style={{ maxWidth: "1374px" }}>
				<Header />
				<TopTitle title={header} />
				<div className="relative z-[11] pl-[10%] pr-[10%] pt-[80px] flex ">
					<div className="w-[45%]">
						<p className="font-medium text-2xl text-black">{studentLeadersHeader}</p>
						<div className="mt-[10px] flex justify-evenly flex-wrap ml-[-10px]" >
							<AboutUsCard />
							<AboutUsCard />
							<AboutUsCard />
							<AboutUsCard />
							<AboutUsCard />
							<AboutUsCard />
							<AboutUsCard />
							<AboutUsCard />
							<AboutUsCard />
							<AboutUsCard />
						</div>
					</div>
					<div className="w-[50%] pl-[10px] mb-[50px]" style={{ borderLeft: "1px solid #D9D9D9" }}>
						<p className="font-medium text-2xl text-black">{subheading}</p>
						{text1.map((text, index) => (
							<>
								<p className="mt-[15px] text-black" key={index}>{text}</p>
							</>
						))}
						{text2.map((text, index) => (
							<>
								{index === 0 && (
									<p className="mt-[15px] font-medium text-lg text-black" key={index}>Host Organization:</p>
								)}
								{index !== 0 && (
									<p className="mt-[15px] text-black" key={index}>{text}</p>
								)}
							</>
						))}
						<p className="mt-[15px] font-medium text-lg text-black">{text3[0]}</p>
						<p className="mt-[15px] text-black">{text4[0]}</p>
						<p className="mt-[15px] text-black">{text5[0]}</p>
						<p className="mt-[15px] text-black">{text6[0]}</p>
					</div>
				</div>
				<Bottom />
			</div>
		</div>
	)
}

export default AboutUs;