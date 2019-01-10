import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider';
import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import theme from '../util/theme';
import App from './App';

export default () => (
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</Provider>
);
