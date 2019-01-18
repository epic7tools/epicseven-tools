import Typography from '@material-ui/core/Typography';
import React from 'react';
import HeroStar from './HeroStar';

const handleStarChange = (func, stars) => () => {
	if (func && stars) {
		func({stars});
	}
};

const HeroStars = ({awakened, total, onChange, ...props}) => {
	const stars = [];
	for (let i = 0; i < total; i++) {
		stars.push(
			<HeroStar
				key={i}
				awakened={i < awakened}
				onClick={handleStarChange(onChange, i + 1)}
				component={Boolean(onChange) ? null : 'span'}
			/>
		);
	}
	return <Typography {...props}>{stars}</Typography>;
};

export default HeroStars;
