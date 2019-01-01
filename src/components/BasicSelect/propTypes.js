import PropTypes from 'prop-types';

export const item = {
	value: PropTypes.string.isRequired,
	label: PropTypes.node.isRequired,
	icon: PropTypes.node,
	avatar: PropTypes.node,
	secondary: PropTypes.node,
};
