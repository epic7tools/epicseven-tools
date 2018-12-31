import getHeroes from './requests/getHeroes';

export default () => dispatch => {
	console.log('in init');
	dispatch(getHeroes());
};
