import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import root from './root';

const config = {
	key: 'root',
	storage,
	whitelist: ['gearPreview'],
};

export default persistReducer(config, root);
