import { Typography } from "@material-ui/core"
import React from "react"

const Header: React.FunctionComponent = () => {
	return(
		<React.Fragment>
			<Typography variant="h2">Search Engine Compare</Typography>
			<Typography variant="h5">Google vs DuckDuckGo</Typography>
		</React.Fragment>
	)
}

export default Header
