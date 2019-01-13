import {combineReducers} from 'redux';
import entities from './entities';
import gearPreview from '../../gear-preview/reducer';
import loading from './loading';

export default combineReducers({entities, loading, gearPreview});
