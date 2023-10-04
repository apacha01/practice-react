import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function DoubleSlider({ values = { min: 0, max: 1200 }, range = { min: 0, max: 1200 }, onChange }) {
	return (
		<div className="flex flex-wrap items-center justify-between gap-3 w-full lg:flex-1">
			<label htmlFor="">Pages</label>
			<div className="flex items-center justify-between gap-3 flex-1">
				<strong>{values.min}</strong>
				<Slider
					min={range.min}
					max={range.max}
					value={[values.min, values.max]}
					onChange={(values) => onChange({ min: values[0], max: values[1] })}
					range
					allowCross={false}
				/>
				<strong>{values.max}</strong>
			</div>
		</div>
	);
}

export default DoubleSlider;