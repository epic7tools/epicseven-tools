import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import Element from '../Element';
import HeroStars from '../HeroStars';
import HeroStats from '../HeroStats';
import Zodiac from '../Zodiac';

const style = theme => ({
	root: {
		padding: theme.spacing.unit,
	},
	title: {
		display: 'inline',
		marginRight: theme.spacing.unit,
	},
	head: {
		padding: theme.spacing.unit * 2,
		paddingBottom: 0,
	},
});

const HeroView = ({classes, className, hero, ...props}) => (
	<Paper className={classNames(classes.root, className)} {...props}>
		<div className={classes.head}>
			<Typography className={classes.title} variant="h4" component="span">
				{hero.name}
			</Typography>
			<HeroStars awakened={hero.rarity} total={6} />
			<Element variant={hero.element} />
			<Zodiac variant={hero.zodiac} />
		</div>
		<HeroStats stats={hero.stats} />
	</Paper>
);

export default withStyles(style)(HeroView);
