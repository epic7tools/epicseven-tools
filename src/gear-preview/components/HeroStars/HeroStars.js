import Typography from '@material-ui/core/Typography';
import React from 'react';
import HeroStar from './HeroStar';

const handleStarChange = (func, minimum, i) => () => {
	if (func && i >= minimum) {
		func({awakened: i});
	}
};

const HeroStars = ({minimum, awakened, total, onClick, onMouseEnter, ...props}) => {
	const stars = [];
	for (let i = 0; i < total; i++) {
		stars.push(
			<HeroStar
				key={i}
				awakened={i < awakened}
				onClick={handleStarChange(onClick, minimum, i)}
				onMouseEnter={handleStarChange(onMouseEnter, minimum, i)}
			/>
		);
	}
	return <Typography {...props}>{stars}</Typography>;
};

export default HeroStars;
