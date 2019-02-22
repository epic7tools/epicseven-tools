import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import React from 'react';
import Content from '../Content';
import Toolbar from '../Toolbar';

const style = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	toolbarSpacer: theme.mixins.toolbar,
	toolbar: {},
	content: {},
});

const GearPreview = ({
	classes,
	className,
	equipment,
	onHeroChange,
	onGearChange,
	hero,
	staticContext,
	...props
}) => (
	<div className={classNames(classes.root, className)} {...props}>
		<Toolbar />
		<Content />
	</div>
);

export default withStyles(style)(GearPreview);
