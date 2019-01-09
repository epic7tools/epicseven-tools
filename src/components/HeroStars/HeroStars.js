import React from 'react';
import HeroStar from './HeroStar';

const HeroStars = ({awakened, total, ...props}) => {
	const stars = [];
	for (let i = 0; i < total; i++) {
		stars.push(<HeroStar awakened={i < awakened} />);
	}
	return <span {...props}>{stars}</span>;
};

export default HeroStars;
