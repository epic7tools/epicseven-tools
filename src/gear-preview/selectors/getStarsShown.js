import {createSelector} from 'reselect';
import getAwakening from './getAwakening';
import getHoverAwakening from './getHoverAwakening';

export default createSelector(
	getAwakening,
	getHoverAwakening,
	(awakened, hovered) => (hovered != null ? hovered : awakened)
);
