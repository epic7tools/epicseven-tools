import Typography from '@material-ui/core/Typography';
import React from 'react';
import HeroStar from './HeroStar';

const HeroStars = ({awakened, total, ...props}) => {
	const stars = [];
	for (let i = 0; i < total; i++) {
		stars.push(<HeroStar key={i} awakened={i < awakened} />);
	}
	return (
		<Typography component="span" {...props}>
			{stars}
		</Typography>
	);
};

export default HeroStars;
