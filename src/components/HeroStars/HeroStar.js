import React from 'react';
import {StarBorder, Star} from '@material-ui/icons';

const HeroStar = ({awakened, ...props}) =>
	awakened ? <Star color="inherit" {...props} /> : <StarBorder color="text" {...props} />;

export default HeroStar;
