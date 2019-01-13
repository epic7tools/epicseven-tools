import {combineReducers} from 'redux';
import entities from './entities';
import gearPreview from '../../gear-preview/reducer';

export default combineReducers({entities, gearPreview});
