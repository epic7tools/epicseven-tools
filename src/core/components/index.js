import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import store from 'core/store';
import persistor from 'core/util/persistor';
import theme from 'core/util/theme';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';

export default () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</PersistGate>
	</Provider>
);
