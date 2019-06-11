import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	icon: {
		marginRight: theme.spacing(0.5),
		height: 20,
		width: 20,
	},
}));

const ImageButtonBase = ({className, src, label, ...props}) => {
	const classes = useStyles();
	return (
		<Button className={classNames(classes.root, className)} {...props}>
			{src && <img src={src} alt="" className={classes.icon} />}
			{label}
		</Button>
	);
};

ImageButtonBase.propTypes = {
	className: PropTypes.string,
};

export default ImageButtonBase;
