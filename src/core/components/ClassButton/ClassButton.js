import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';
import ClassIcon from '../ClassIcon';

const variants = {
	knight: {
		label: 'Knight',
	},
	mage: {
		label: 'Mage',
	},
	material: {
		label: 'Material',
	},
	ranger: {
		label: 'Ranger',
	},
	'soul-weaver': {
		label: 'Soul Weaver',
	},
	thief: {
		label: 'Thief',
	},
	warrior: {
		label: 'Warrior',
	},
};

const styles = theme => ({
	root: {
		display: 'flex',
	},
	icon: {
		marginRight: theme.spacing.unit / 2,
		height: 20,
		width: 20,
	},
	ice: {},
	earth: {},
	fire: {},
	light: {},
	dark: {},
});

const ClassButton = ({className, classes, variant, ...props}) => (
	<Button className={classNames(classes.root, className)} {...props}>
		<ClassIcon variant={variant} className={classes.icon} />
		{variants[variant].label}
	</Button>
);

ClassButton.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object,
	variant: PropTypes.oneOf([
		'knight',
		'mage',
		'material',
		'ranger',
		'soul-weaver',
		'thief',
		'warrior',
	]),
};

export default withStyles(styles)(ClassButton);
