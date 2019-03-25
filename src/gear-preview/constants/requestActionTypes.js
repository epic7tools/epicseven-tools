import {GP_ACTION_PREFIX} from './index';

export const REQUEST_ACTION_PREFIX = `${GP_ACTION_PREFIX}/request`;
export const FETCH_HERO_BASE_STATS = `${REQUEST_ACTION_PREFIX}/fetchHeroBaseStats`;
export const FETCH_HERO_BASE_STATS_SUCCESS = `${REQUEST_ACTION_PREFIX}/fetchHeroBaseSuccessStats`;
export const FETCH_HERO_BASE_STATS_FAILURE = `${REQUEST_ACTION_PREFIX}/fetchHeroBaseFailureStats`;
export const FETCH_HERO_EQUIPPED_STATS = `${REQUEST_ACTION_PREFIX}/fetchHeroEquippedStats`;
export const FETCH_HERO_EQUIPPED_STATS_SUCCESS = `${REQUEST_ACTION_PREFIX}/fetchHeroEquippedStatsSuccess`;
export const FETCH_HERO_EQUIPPED_STATS_FAILURE = `${REQUEST_ACTION_PREFIX}/fetchHeroEquippedStatsFailure`;
