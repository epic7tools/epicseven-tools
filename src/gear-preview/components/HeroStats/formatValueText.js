// Math.abs used to ensure a positive value so no sign is printed
// so we can manually add the sign if we want to
export default (value, percentage) =>
	`${Math.abs(Math.round(percentage ? value * 100 : value))}${percentage ? '%' : ''}`;
