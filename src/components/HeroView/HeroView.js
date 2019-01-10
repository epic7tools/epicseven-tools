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
		{hero && (
			<React.Fragment>
				<Typography className={classes.title} variant="h4" component="span">
					{hero.name}
				</Typography>
				<HeroStars awakened={hero.rarity} total={hero.rarity} />
				<Element variant={hero.element} />
				<Zodiac variant={hero.zodiac} />
				<HeroStats stats={hero.stats} />
			</React.Fragment>
		)}
	</Paper>
);

export default withStyles(style)(HeroView);
