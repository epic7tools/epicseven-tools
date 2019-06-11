import {makeStyles} from '@material-ui/core';
import classNames from 'classnames';
import Content from 'gear-preview/components/Content';
import Toolbar from 'gear-preview/components/Toolbar';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	toolbarSpacer: theme.mixins.toolbar,
	toolbar: {},
	content: {},
}));

const GearPreview = ({className, equipment, onHeroChange, onGearChange, hero, ...props}) => {
	const classes = useStyles();
	return (
		<div className={classNames(classes.root, className)} {...props}>
			<Toolbar />
			<Content />
		</div>
	);
};

export default GearPreview;
