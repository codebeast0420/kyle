const BlueBtn = ({text, onClick}) => {
	return (
		<div>
			<button className="pt-[8px] pb-[8px] pl-[35px] pr-[35px] rounded-lg bg-sky-400 mt-[30px] text-white" onClick={onClick}>
				{text}
			</button>
		</div>
	)
}

export default BlueBtn;