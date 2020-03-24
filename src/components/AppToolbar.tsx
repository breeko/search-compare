import { AppBar, IconButton, InputAdornment, Link, makeStyles, TextField, Toolbar, Typography } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"
import SearchIcon from "@material-ui/icons/Search"
import Router from "next/router"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const useStyles = makeStyles(theme => ({
  title: {
    "marginLeft": "5px",
    "marginRight": "5px",
    "textDecoration": "none",
    "& > *": {
      color: "white",
    },
  },
  link: {
    cursor: "pointer",
  },
  seperator: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  }
))

const AppToolbar: React.FunctionComponent = () => {
  const classes = useStyles();
  const context = useContext(AppContext)

  return(
    <AppBar position="static">
      <Toolbar>
        <Link color="inherit" className={classes.link}>
          <Typography variant="h5" className={classes.title}>Search Compare</Typography>
          <Typography variant="caption" className={classes.title}>Google vs Duck Duck Go</Typography>
        </Link>
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
