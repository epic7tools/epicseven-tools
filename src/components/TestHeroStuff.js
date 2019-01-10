import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import React, {Component} from 'react';
import classNames from 'classnames';
import HeroView from './HeroView';
import HeroSelect from './HeroSelect';

const style = theme => ({
	root: {
		margin: theme.spacing.unit * 4,
	},
});

class TestHeroStuff extends Component {
	state = {
		value: '',
	};

	handleChange = event => {
		return this.setState({value: event.target.value});
	};

	render() {
		const {classes, className, ...props} = this.props;
		return (
			<Paper className={classNames(classes.root, className)} {...props}>
				<HeroSelect value={this.state.value} onChange={this.handleChange} />
				{this.state.value && <HeroView id={this.state.value} />}
			</Paper>
		);
	}
}

TestHeroStuff.propTypes = {
	classes: PropTypes.any,
	className: PropTypes.any,
};

export default withStyles(style)(TestHeroStuff);
