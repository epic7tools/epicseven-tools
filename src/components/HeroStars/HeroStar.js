import React from 'react';
import {StarBorder, Star} from '@material-ui/icons';

const HeroStar = ({awakened, ...props}) =>
	awakened ? <Star {...props} /> : <StarBorder {...props} />;

export default HeroStar;
