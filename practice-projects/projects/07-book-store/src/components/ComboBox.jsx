function ComboBox({ options = [], label = '', onChangeSelection = () => { }, id = '' }) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id} onChange={(e) => onChangeSelection(e.target.value)}>
				<option value="all">All</option>
				{
					options.map((o, i) => {
						return <option key={i} value={o.key}>{o.text}</option>;
					})
				}
			</select>
		</>
	);
}

export default ComboBox;