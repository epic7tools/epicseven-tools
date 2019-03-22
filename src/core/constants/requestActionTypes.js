import {ROOT_ACTION_PREFIX} from './index';

export const REQUEST_ACTION_PREFIX = `${ROOT_ACTION_PREFIX}/request`;
export const LOADING = `${REQUEST_ACTION_PREFIX}/loading`;
export const LOADING_SUCCESS = `${REQUEST_ACTION_PREFIX}/loadingSuccess`;
export const LOADING_FAILURE = `${REQUEST_ACTION_PREFIX}/loadingFailure`;
export const FETCH_HEROES = `${REQUEST_ACTION_PREFIX}/fetchHeroes`;
export const FETCH_HEROES_SUCCESS = `${REQUEST_ACTION_PREFIX}/fetchHeroesSuccess`;
export const FETCH_HEROES_FAILURE = `${REQUEST_ACTION_PREFIX}/fetchHeroesFailure`;
export const FETCH_HERO = `${REQUEST_ACTION_PREFIX}/fetchHero`;
export const FETCH_HERO_SUCCESS = `${REQUEST_ACTION_PREFIX}/fetchHeroSuccess`;
export const FETCH_HERO_FAILURE = `${REQUEST_ACTION_PREFIX}/fetchHeroFailure`;
