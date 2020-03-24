import { AppBar, Divider, IconButton, InputAdornment, makeStyles, TextField, Toolbar, Typography } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import SearchIcon from '@material-ui/icons/Search'
import Router from 'next/router'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const useStyles = makeStyles(theme => ({
	title: {
		margin: "5px",
		'& > *': {
			color: "white"
		},
	},
	seperator: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
  }
));

const AppToolbar: React.FunctionComponent = () => {
	const classes = useStyles();
	const context = useContext(AppContext)

	return(
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>Search Compare</Typography>
				<TextField
					autoFocus
					placeholder="Search"
					className={classes.title}
					onChange={e => context.setSearch(e.target.value)}
					variant="outlined"
					value={context.search}
					onKeyPress={(e) => e.key === "Enter" && context.runSearch(context.search)}
					InputProps={{startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>}}
				/>
				<div className={classes.seperator}></div>
				<IconButton
					onClick={() => Router.push("/")}
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
				>
					<HomeIcon/>
				</IconButton>
				<IconButton
					onClick={() => Router.push("/about")}
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
				>
					<InfoIcon/>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default AppToolbar
