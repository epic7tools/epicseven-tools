import {withStyles} from '@material-ui/core/styles';
import * as PropTypes from 'prop-types';
import React, {Component} from 'react';
import TestHeroStuff from '../TestHeroStuff';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	content: {
		width: '100%',
		maxWidth: 800,
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	appBarSpacer: theme.mixins.toolbar,
});

class Main extends Component {
	render() {
		let {classes} = this.props;
		return (
			<main className={classes.root}>
				<div className={classes.appBarSpacer} />
				<div className={classes.content}>
					<TestHeroStuff />
				</div>
			</main>
		);
	}
}

Main.propTypes = {classes: PropTypes.any};

export default withStyles(styles)(Main);
