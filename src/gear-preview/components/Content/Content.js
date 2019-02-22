import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import React from 'react';
import ArtifactInput from '../ArtifactInput';
import GearInput from '../GearInput';
import HeroView from '../HeroView';

const style = theme => ({
	root: {
		display: 'flex',
		alignItems: 'flex-start',
		padding: theme.spacing.unit * 2,
	},
	heroview: {
		margin: theme.spacing.unit,
	},
	equipment: {
		display: 'flex',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing.unit,
		},
	},
});

const handleGearChange = onGearChange => change => {
	if (onGearChange) {
		onGearChange(change);
	}
};

const Content = ({classes, className, hero, equipment, onGearChange, ...props}) => {
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

export default withStyles(style)(Content);
