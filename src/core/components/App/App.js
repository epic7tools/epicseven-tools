import Layout from 'core/components/Layout';
import React, {Component} from 'react';

class App extends Component {
	componentDidMount() {
		this.props.onMount();
	}

	render() {
		return <Layout />;
	}
}

export default App;
