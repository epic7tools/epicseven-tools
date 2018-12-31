import getHeroes from './requests/getHeroes';

export default () => dispatch => {
	dispatch(getHeroes());
};
