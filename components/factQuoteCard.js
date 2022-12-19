import Image from "next/image";

const FactQuoteCard = ({ imgSrc, content, name, school, className }) => {
	return (
		<div className={`w-1/2 pl-[40px] pr-[40px] pt-[40px] pb-[10px] bg-white ${className ? className : ""}`}>
			<svg width="16" height="14" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M29 14H24V10C24 7.79375 25.7938 6 28 6H28.5C29.3312 6 30 5.33125 30 4.5V1.5C30 0.66875 29.3312 0 28.5 0H28C22.475 0 18 4.475 18 10V25C18 26.6562 19.3438 28 21 28H29C30.6562 28 32 26.6562 32 25V17C32 15.3438 30.6562 14 29 14ZM11 14H6V10C6 7.79375 7.79375 6 10 6H10.5C11.3313 6 12 5.33125 12 4.5V1.5C12 0.66875 11.3313 0 10.5 0H10C4.475 0 0 4.475 0 10V25C0 26.6562 1.34375 28 3 28H11C12.6562 28 14 26.6562 14 25V17C14 15.3438 12.6562 14 11 14Z" fill="#3185FC" />
			</svg>
			<p className="mt-[10px]">{content}</p>
			<div className="mt-[30px] flex justify-between">
				<div className="flex justify-between">
					<Image src={imgSrc} width={60} height={60} alt="man" className="rounded-[5rem]" />
					<div className="ml-[10px]">
						<p className="text-[#142630] font-bold" style={{ fontFamily: "Jost" }}>{name}</p>
						<p className="mt-[10px]" style={{ fontFamily: "Jost" }}>{school}</p>
					</div>
				</div>
				<div>
					<svg width="60" height="60" viewBox="0 0 120 105" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M89.5 42.2727H90V47.7273H89.5V52.5V53H90H92.983V52.5H96.392V53H102.358V52.5H105.767V53H108.75C109.668 53 110.559 53.1152 111.409 53.3317L111.533 52.8472C112.586 53.1154 113.58 53.5322 114.491 54.074L114.235 54.5038C115.781 55.4231 117.077 56.7192 117.996 58.2649L118.426 58.0093C118.968 58.9202 119.385 59.914 119.653 60.9671L119.168 61.0905C119.385 61.9406 119.5 62.8316 119.5 63.75V66.9318H120V70.5682H119.5V76.9318H120V80.5682H119.5V86.9318H120V90.5682H119.5V93.75C119.5 94.6684 119.385 95.5594 119.168 96.4095L119.653 96.5329C119.385 97.586 118.968 98.5798 118.426 99.4907L117.996 99.2351C117.077 100.781 115.781 102.077 114.235 102.996L114.491 103.426C113.58 103.968 112.586 104.385 111.533 104.653L111.409 104.168C110.559 104.385 109.668 104.5 108.75 104.5H105.568V105H101.932V104.5H95.5682V105H91.9318V104.5H85.5682V105H81.9318V104.5H78.75C77.8316 104.5 76.9406 104.385 76.0905 104.168L75.9671 104.653C74.914 104.385 73.9202 103.968 73.0093 103.426L73.2649 102.996C71.7192 102.077 70.4231 100.781 69.5038 99.2351L69.074 99.4907C68.5322 98.5798 68.1154 97.586 67.8472 96.5329L68.3317 96.4095C68.1152 95.5594 68 94.6684 68 93.75V90.1705H67.5V86.0796H68V78.9205H67.5V74.8295H68V67.6705H67.5V63.5795H68V56.4205H67.5V52.3295H68V45.1705H67.5V41.0795H68V37.5C68 36.253 68.0616 35.0206 68.1819 33.8056L67.6843 33.7564C67.8265 32.3205 68.0495 30.9085 68.3489 29.525L68.8376 29.6307C69.3655 27.1908 70.134 24.8407 71.1169 22.6064L70.6592 22.405C71.2367 21.0924 71.8872 19.8192 72.6056 18.5907L73.0373 18.843C74.2867 16.7063 75.7444 14.7062 77.3825 12.8704L77.0095 12.5375C77.9606 11.4717 78.9717 10.4606 80.0375 9.50945L80.3704 9.88251C82.2062 8.24438 84.2063 6.78671 86.343 5.53726L86.0907 5.10564C87.3192 4.38723 88.5924 3.73673 89.905 3.15925L90.1064 3.61692C92.3407 2.63398 94.6908 1.86553 97.1307 1.33759L97.025 0.848895C98.4085 0.549539 99.8205 0.326472 101.256 0.184313L101.306 0.681881C102.521 0.561594 103.753 0.5 105 0.5H105.597V0H106.278V0.5H106.875C107.769 0.5 108.606 0.725781 109.334 1.12276L109.574 0.683752C110.52 1.19974 111.3 1.97973 111.816 2.92626L111.377 3.16558C111.774 3.89379 112 4.7309 112 5.625V9.20455H112.5V13.2955H112V16.875C112 17.7691 111.774 18.6062 111.377 19.3344L111.816 19.5737C111.3 20.5203 110.52 21.3003 109.574 21.8162L109.334 21.3772C108.606 21.7742 107.769 22 106.875 22H106.278V22.5H105.597V22H105C103.678 22 102.393 22.1663 101.167 22.4794L101.29 22.9638C99.8869 23.3219 98.5622 23.8783 97.3477 24.6013L97.092 24.1717C94.8651 25.4974 92.9974 27.3651 91.6717 29.592L92.1013 29.8477C91.3783 31.0622 90.8219 32.3869 90.4638 33.7902L89.9794 33.6666C89.6663 34.8934 89.5 36.1779 89.5 37.5V42.2727ZM22 42.2727H22.5V47.7273H22V52.5V53H22.5H25.483V52.5H28.892V53H34.858V52.5H38.267V53H41.25C42.1684 53 43.0594 53.1152 43.9095 53.3317L44.0328 52.8472C45.0859 53.1154 46.0798 53.5322 46.9907 54.074L46.7351 54.5038C48.2808 55.4231 49.5769 56.7192 50.4962 58.2649L50.926 58.0093C51.4678 58.9202 51.8846 59.9141 52.1528 60.9671L51.6683 61.0905C51.8848 61.9406 52 62.8316 52 63.75V66.9318H52.5V70.5682H52V76.9318H52.5V80.5682H52V86.9318H52.5V90.5682H52V93.75C52 94.6684 51.8848 95.5594 51.6683 96.4095L52.1528 96.5329C51.8846 97.586 51.4678 98.5798 50.926 99.4907L50.4962 99.2351C49.5769 100.781 48.2808 102.077 46.7351 102.996L46.9907 103.426C46.0798 103.968 45.086 104.385 44.0329 104.653L43.9095 104.168C43.0594 104.385 42.1684 104.5 41.25 104.5H38.0682V105H34.4318V104.5H28.0682V105H24.4318V104.5H18.0682V105H14.4318V104.5H11.25C10.3316 104.5 9.44063 104.385 8.59055 104.168L8.46715 104.653C7.41405 104.385 6.42019 103.968 5.50926 103.426L5.76486 102.996C4.2192 102.077 2.92313 100.781 2.00377 99.2351L1.57404 99.4907C1.03222 98.5798 0.615363 97.586 0.347165 96.5329L0.831699 96.4095C0.615204 95.5594 0.5 94.6684 0.5 93.75V90.1705H0V86.0796H0.5V78.9205H0V74.8295H0.5V67.6705H0V63.5795H0.5V56.4205H0V52.3295H0.5V45.1705H0V41.0795H0.5V37.5C0.5 36.253 0.561594 35.0206 0.681881 33.8056L0.184313 33.7564C0.326472 32.3205 0.549539 30.9085 0.848896 29.525L1.33759 29.6307C1.86553 27.1908 2.63398 24.8407 3.61692 22.6064L3.15925 22.405C3.73673 21.0924 4.38724 19.8192 5.10564 18.5907L5.53727 18.843C6.78672 16.7063 8.24438 14.7062 9.88251 12.8704L9.50945 12.5375C10.4606 11.4717 11.4717 10.4606 12.5375 9.50945L12.8704 9.88251C14.7062 8.24438 16.7063 6.78671 18.8431 5.53726L18.5907 5.10564C19.8192 4.38724 21.0924 3.73673 22.405 3.15925L22.6064 3.61692C24.8407 2.63398 27.1908 1.86553 29.6307 1.33759L29.525 0.848896C30.9085 0.549539 32.3205 0.326472 33.7564 0.184313L33.8056 0.681881C35.0206 0.561594 36.253 0.5 37.5 0.5H38.0966V0H38.7784V0.5H39.375C40.2691 0.5 41.1062 0.725781 41.8344 1.12276L42.0737 0.683752C43.0203 1.19974 43.8003 1.97973 44.3162 2.92626L43.8772 3.16558C44.2742 3.89379 44.5 4.7309 44.5 5.625V9.20455H45V13.2955H44.5V16.875C44.5 17.7691 44.2742 18.6062 43.8772 19.3344L44.3162 19.5737C43.8003 20.5203 43.0203 21.3003 42.0737 21.8162L41.8344 21.3772C41.1062 21.7742 40.2691 22 39.375 22H38.7784V22.5H38.0966V22H37.5C36.1779 22 34.8934 22.1663 33.6666 22.4794L33.7902 22.9638C32.3869 23.3219 31.0622 23.8783 29.8477 24.6013L29.592 24.1717C27.3651 25.4974 25.4974 27.3651 24.1717 29.592L24.6013 29.8477C23.8783 31.0622 23.3219 32.3869 22.9638 33.7902L22.4794 33.6666C22.1663 34.8934 22 36.1779 22 37.5V42.2727Z" stroke="#1CCADF" stroke-dasharray="7 4" />
					</svg>
				</div>
			</div>
		</div>
	)
}

export default FactQuoteCard;