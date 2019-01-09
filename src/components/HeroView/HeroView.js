import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import HeroStars from '../HeroStars';
import HeroStats from '../HeroStats';

const style = theme => ({
	root: {
		width: 600,
		padding: theme.spacing.unit * 2,
	},
	title: {
		display: 'inline',
		marginRight: theme.spacing.unit,
	},
});

const HeroView = ({classes, className, hero, ...props}) => (
	<Paper className={classNames(classes.root, className)} {...props}>
		{hero && [
			<Typography className={classes.title} variant="h4" component="span">
				{hero.name}
			</Typography>,
			<HeroStars awakened={hero.rarity} total={hero.rarity} />,
			<HeroStats stats={hero.stats} />,
		]}
	</Paper>
);

export default withStyles(style)(HeroView);
