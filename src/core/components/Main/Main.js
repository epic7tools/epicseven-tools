import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import React, {Component} from 'react';
import GearPreview from '../../../gear-preview/components/GearPreview';
import LoadingScreen from '../LoadingScreen';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	content: {},
	appBarSpacer: theme.mixins.toolbar,
});

class Main extends Component {
	render() {
		const {classes, isLoading, ...props} = this.props;
		return (
			<main className={classes.root} {...props}>
				<div className={classes.appBarSpacer} />
				<div className={classes.content}>{isLoading ? <LoadingScreen /> : <GearPreview />}</div>
			</main>
		);
	}
}

Main.propTypes = {classes: PropTypes.any, isLoading: PropTypes.bool.isRequired};

export default withStyles(styles)(Main);
