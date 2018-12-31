import React, {Component} from 'react';
import Layout from '../Layout';

class App extends Component {
	componentDidMount() {
		this.props.onMount();
	}

	render() {
		return <Layout />;
	}
}

export default App;
