function SearchInput({ label, id, placeholder, value, onType }) {
	return (
		<div className="flex gap-4 items-center flex-wrap max-w-full">
			<label htmlFor={id}>{label}</label>
			<input
				className='max-w-full w-80 border-[1px] border-black p-1'
				role="search"
				type="text"
				name={id}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onType}
			/>
		</div>
	);
}

export default SearchInput;