import { PRIORITY_VALUES } from '../constants/priority';

const getUpdatedPriority = (priority) => {
	return priority === PRIORITY_VALUES.Low
		? PRIORITY_VALUES.Medium
		: priority === PRIORITY_VALUES.Medium
			? PRIORITY_VALUES.High
			: PRIORITY_VALUES.Low;
};

export { getUpdatedPriority };