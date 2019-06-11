import StarsInput from 'core/components/StarsInput';
import useActionCreators from 'core/hooks/useActionCreators';
import onChangeAwakening from 'gear-preview/actions/onChangeAwakening';
import getAwakenedStars from 'gear-preview/selectors/getAwakenedStars';
import getStars from 'gear-preview/selectors/getStars';
import React from 'react';
import {useSelector} from 'react-redux';

const AwakeningSelect = () => (
	<StarsInput
		label="Awakening"
		maximum={useSelector(getStars)}
		onChange={useActionCreators(onChangeAwakening)}
		value={useSelector(getAwakenedStars)}
	/>
);

export default AwakeningSelect;
