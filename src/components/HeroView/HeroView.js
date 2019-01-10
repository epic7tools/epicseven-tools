import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import Element from '../Element';
import HeroStars from '../HeroStars';
import HeroStats from '../HeroStats';
import Zodiac from '../Zodiac';

const style = theme => ({
	root: {},
	title: {
		display: 'inline',
		marginRight: theme.spacing.unit,
	},
	head: {
		padding: theme.spacing.unit * 3,
		paddingBottom: theme.spacing.unit,
	},
});

const HeroView = ({classes, className, hero, ...props}) => (
	<div className={classNames(classes.root, className)} {...props}>
		{hero && (
			<React.Fragment>
				<div className={classes.head}>
					<Typography className={classes.title} variant="h4" component="span">
						{hero.name}
					</Typography>
					<HeroStars awakened={hero.rarity} total={hero.rarity} />
					<Element variant={hero.element} />
					<Zodiac variant={hero.zodiac} />
				</div>
				<HeroStats stats={hero.stats} />
			</React.Fragment>
		)}
	</div>
);

export default withStyles(style)(HeroView);
