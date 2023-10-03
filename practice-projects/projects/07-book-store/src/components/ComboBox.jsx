function ComboBox({ options = [], label = '', onChangeSelection = () => { }, id = '' }) {
	return (
		<div className="flex flex-wrap gap-4">
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id} onChange={(e) => onChangeSelection(e.target.value)}>
				{
					options.map((o, i) => {
						return <option key={i} value={o}>{o}</option>;
					})
				}
			</select>
		</div>
	);
}

export default ComboBox;