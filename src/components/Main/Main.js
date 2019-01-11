import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import React, {Component} from 'react';
import GearPreview from '../GearPreview';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	content: {
		padding: theme.spacing.unit * 4,
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
					<GearPreview />
				</div>
			</main>
		);
	}
}

Main.propTypes = {classes: PropTypes.any};

export default withStyles(styles)(Main);
