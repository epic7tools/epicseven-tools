import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';

const style = theme => ({
	root: {
		display: 'flex',
	},
	icon: {
		marginRight: theme.spacing(0.5),
		height: 20,
		width: 20,
	},
});

const ImageButtonBase = ({className, classes, src, label, ...props}) => (
	<Button className={classNames(classes.root, className)} {...props}>
		{src && <img src={src} alt="" className={classes.icon} />}
		{label}
	</Button>
);

ImageButtonBase.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
};

export default withStyles(style)(ImageButtonBase);
