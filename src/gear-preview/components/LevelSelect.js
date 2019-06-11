import StarsInput from 'core/components/StarsInput';
import useActionCreators from 'core/hooks/useActionCreators';
import onChangeLevel from 'gear-preview/actions/onChangeLevel';
import getSelectedStars from 'gear-preview/selectors/getStars';
import React from 'react';
import {useSelector} from 'react-redux';

const LevelSelect = () => (
	<StarsInput
		label="Level"
		minimum={5}
		maximum={6}
		onChange={useActionCreators(onChangeLevel)}
		value={useSelector(getSelectedStars)}
	/>
);
export default LevelSelect;
