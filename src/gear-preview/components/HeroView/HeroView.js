import {makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import ClassButton from 'core/components/ClassButton';
import ElementButton from 'core/components/ElementButton';
import StarsInput from 'core/components/StarsInput';
import Zodiac from 'core/components/ZodiacButton';
import HeroStats from 'gear-preview/components/HeroStats';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {},
	title: {
		display: 'inline',
		marginRight: theme.spacing(1),
	},
	head: {
		padding: theme.spacing(2),
		paddingBottom: 0,
	},
	row: {
		display: 'flex',
	},
}));

const HeroView = ({className, hero, onAwakeningChange, stars, maxStars, ...props}) => {
	const classes = useStyles();
	return (
		<Paper className={classNames(classes.root, className)} {...props}>
			<div className={classes.head}>
				<Typography className={classes.title} variant="h4" component="span">
					{hero.name}
				</Typography>
				<StarsInput value={hero.rarity} maximum={hero.rarity} />
				<div className={classes.row}>
					<ElementButton variant={hero.element} />
					<ClassButton variant={hero.classType} />
					<Zodiac variant={hero.zodiac} />
				</div>
			</div>
			<HeroStats stats={hero.stats} />
		</Paper>
	);
};

export default HeroView;
