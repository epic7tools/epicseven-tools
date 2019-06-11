import {Tooltip} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';

const ToolbarButton = ({children, tooltip, TooltipProps, ...props}) => (
	<Tooltip enterDelay={300} title={tooltip} {...TooltipProps}>
		<IconButton {...props}>{children}</IconButton>
	</Tooltip>
);

ToolbarButton.propTypes = {
	children: PropTypes.node.isRequired,
	tooltip: PropTypes.node.isRequired,
	TooltipProps: PropTypes.object,
};

export default ToolbarButton;
