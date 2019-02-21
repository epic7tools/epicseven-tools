import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import root from './root';

const version = 2;

const config = {
	version,
	storage,
	key: 'root',
	whitelist: ['gearPreview'],

	// clear localStorage when version updated
	migrate: state => {
		return Promise.resolve(state && state._persist.version < version ? {} : state);
	},
};

export default persistReducer(config, root);
