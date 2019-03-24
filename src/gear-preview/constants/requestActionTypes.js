import {GP_ACTION_PREFIX} from './index';

export const REQUEST_ACTION_PREFIX = `${GP_ACTION_PREFIX}/request`;
export const FETCH_HERO_STATS = `${REQUEST_ACTION_PREFIX}/fetchHeroStats`;
export const FETCH_HERO_STATS_SUCCESS = `${REQUEST_ACTION_PREFIX}/fetchHeroSuccessStats`;
export const FETCH_HERO_STATS_FAILURE = `${REQUEST_ACTION_PREFIX}/fetchHeroFailureStats`;
export const FETCH_HERO_EQUIPPED_STATS = `${REQUEST_ACTION_PREFIX}/fetchHeroEquippedStats`;
export const FETCH_HERO_EQUIPPED_STATS_SUCCESS = `${REQUEST_ACTION_PREFIX}/fetchHeroEquippedStatsSuccess`;
export const FETCH_HERO_EQUIPPED_STATS_FAILURE = `${REQUEST_ACTION_PREFIX}/fetchHeroEquippedStatsFailure`;
