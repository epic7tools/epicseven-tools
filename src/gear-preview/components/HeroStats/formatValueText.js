export default (value, percentage) => `${Math.abs(Math.floor(value))}${percentage ? '%' : ''}`;
