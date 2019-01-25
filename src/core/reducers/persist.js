import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import root from './root';

const config = {
	version: 0,
	storage,
	key: 'root',
	whitelist: ['gearPreview'],

	// clear localStorage when version updated
	migrate: () => ({}),
};

export default persistReducer(config, root);
