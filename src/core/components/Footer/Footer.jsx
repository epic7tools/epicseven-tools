import Link from '@material-ui/core/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';

const style = theme => ({
	root: {
		padding: theme.spacing(2),
		background: theme.palette.background.paper,
		textAlign: 'center',
	},
});

const Footer = ({className, classes, ...props}) => (
	<footer className={classNames(classes.root, className)} {...props}>
		<Typography variant="body2" color="textSecondary">
			{'Released under the '}
			<Link
				href="https://github.com/stocky37/epicseven-tools/blob/master/LICENSE"
				color="textPrimary"
			>
				MIT License
			</Link>
			.
		</Typography>
		<Typography variant="body2" color="textSecondary">
			{'Assets and database provided by '}
			<Link
				href="https://github.com/stocky37/epicseven-tools/blob/master/LICENSE"
				color="textPrimary"
			>
				EpicSevenDB.com
			</Link>
		</Typography>
		<Typography variant="body2" color="textSecondary">
			All game content and assets are trademarks and copyrights of SUPERCREATIVE Corp and/or
			Smilegate Megaport.
		</Typography>
		<Typography variant="body2" color="textSecondary">
			This site is fan made, not affiliated with SUPERCREATIVE Corp and/or Smilegate Megaport.
		</Typography>
	</footer>
);

export default withStyles(style)(Footer);
