import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import React, {Component} from 'react';
import HeroSelect from '../HeroSelect';
import HeroView from '../HeroView';

const style = theme => ({
	root: {},
	selection: {
		width: 600,
		marginLeft: 'auto',
		marginRight: 'auto',
		padding: theme.spacing.unit,
	},
	main: {
		marginTop: theme.spacing.unit * 2,
		display: 'flex',
	},
	heroview: {},
});

class GearPreview extends Component {
	state = {
		value: '',
	};

	handleChange = event => {
		return this.setState({value: event.target.value});
	};

	render() {
		const {classes, className, ...props} = this.props;
		return (
			<div className={classNames(classes.root, className)} {...props}>
				<Paper className={classes.selection}>
					<HeroSelect value={this.state.value} onChange={this.handleChange} />
				</Paper>
				<div className={classes.main}>
					{this.state.value && <HeroView className={classes.heroview} id={this.state.value} />}
				</div>
			</div>
		);
	}
}

export default withStyles(style)(GearPreview);
