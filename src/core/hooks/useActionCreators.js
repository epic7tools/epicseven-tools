import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

export default actionCreator => {
	const dispatch = useDispatch();
	return useCallback(bindActionCreators(actionCreator, dispatch), [dispatch]);
};
