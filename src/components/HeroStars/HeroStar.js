import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import React from 'react';

const HeroStar = ({awakened, ...props}) =>
	awakened ? <Star {...props} /> : <StarBorder {...props} />;

export default HeroStar;
