import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import ClassButton from '../../../core/components/ClassButton';
import ElementButton from '../../../core/components/ElementButton';
import Zodiac from '../../../core/components/ZodiacButton';
import HeroStars from '../HeroStars';
import HeroStats from '../HeroStats';
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
	row: {
		display: 'flex',
	},
	awakening: {
		display: 'flex',
		marginBottom: theme.spacing.unit,
	},
	awakeningStars: {
		marginLeft: theme.spacing.unit,
	},
});

const HeroView = ({classes, className, hero, onAwakeningChange, stars, maxStars, ...props}) => (
	<Paper className={classNames(classes.root, className)} {...props}>
		<div className={classes.head}>
			<Typography className={classes.title} variant="h4" component="span">
				{hero.name}
			</Typography>
			<HeroStars awakened={hero.rarity} total={hero.rarity} />
			<div className={classes.row}>
				<ElementButton variant={hero.element} />
				<ClassButton variant={hero.classType} />
				<Zodiac variant={hero.zodiac} />
			</div>
			<Typography variant="h5">Stats</Typography>
			<div className={classes.awakening}>
				<Typography variant="body2">Awakening</Typography>
				<HeroStars
					awakened={stars}
					total={maxStars}
					onChange={onAwakeningChange}
					className={classes.awakeningStars}
				/>
			</div>
			<LevelSelect fullWidth />
		</div>
		<HeroStats stats={hero.stats} />
	</Paper>
);

export default withStyles(style)(HeroView);
