import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import ClassButton from '../../../core/components/ClassButton';
import ElementButton from '../../../core/components/ElementButton';
import HeroStars from '../HeroStars';
import HeroStats from '../HeroStats';
import Zodiac from '../../../core/components/ZodiacButton';
import LevelSelect from '../LevelSelect';

const style = theme => ({
	root: {
		minWidth: 420,
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
	heroDetails: {
		display: 'flex',
	},
	inputs: {
		display: 'flex',
	},
});

const HeroView = ({
	classes,
	className,
	hero,
	onAwakeningChange,
	onAwakeningHover,
	stars,
	...props
}) => (
	<Paper className={classNames(classes.root, className)} {...props}>
		<div className={classes.head}>
			<Typography className={classes.title} variant="h4" component="span">
				{hero.name}
			</Typography>
			<HeroStars awakened={hero.rarity} total={hero.rarity} />
			<div className={classes.heroDetails}>
				<ElementButton variant={hero.element} />
				<ClassButton variant={hero.classType} />
				<Zodiac variant={hero.zodiac} />
			</div>
			<Typography variant="h5">Stats</Typography>
			<HeroStars
				minimum={hero.rarity}
				awakened={stars}
				total={6}
				onMouseEnter={onAwakeningHover}
				onClick={onAwakeningChange}
			/>
		</div>
		<HeroStats stats={hero.stats} />
	</Paper>
);

export default withStyles(style)(HeroView);
