import {makeStyles} from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import ArtifactInput from '../ArtifactInput';
import GearInput from '../GearInput';
import HeroView from '../HeroView';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		alignItems: 'flex-start',
		padding: theme.spacing(2),
	},
	heroview: {
		margin: theme.spacing(1),
	},
	equipment: {
		display: 'flex',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const handleGearChange = onGearChange => change => {
	if (onGearChange) {
		onGearChange(change);
	}
};

const Content = ({className, hero, equipment, onGearChange, ...props}) => {
	const classes = useStyles();
	const equipmentInputs = equipment.map(piece => (
		<GearInput
			key={piece.id}
			name={piece.id}
			label={piece.label}
			stats={piece.stats}
			onChange={handleGearChange(onGearChange)}
		/>
	));

	return (
		<div className={classNames(classes.root, className)} {...props}>
			{hero && <HeroView className={classes.heroview} id={hero} />}
			<div className={classes.equipment}>
				{equipmentInputs}
				<ArtifactInput name="artifact" onChange={handleGearChange(onGearChange)} />
			</div>
		</div>
	);
};

export default Content;
