import { Container, makeStyles } from "@material-ui/core"
import Head from "next/head"
import React, { useState } from "react"
import { AppContext } from '../context/AppContext'
import AppToolbar from './AppToolbar';
import { getGoogleResults, getDdgResults } from '../utils/api';
import Router from 'next/router';

const Layout: React.FunctionComponent = (props) => {
	const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [googleResults, setGoogleResults] = useState<SearchResult[] | undefined>(undefined)
    const [ddgResults, setDdgResults] = useState<SearchResult[] | undefined>(undefined)
	const runSearch = (search: string) => {
        if (search) {
			if (Router.pathname !== "/") {
				// TODO: Change to page and keep state!!
				Router.push("/").then(() => {setSearch(search); runSearch(search)})
			}

            setIsLoading(true)
            setDdgResults(undefined)
            setGoogleResults(undefined)
            const g = getGoogleResults(search, 2).then(setGoogleResults)
            const d = getDdgResults(search).then(setDdgResults)
            Promise.all([g, d]).then(() => setIsLoading(false))
        }
    }

	return(
		<AppContext.Provider value={
			{googleResults, ddgResults, setGoogleResults, setDdgResults, search, setSearch, isLoading, setIsLoading, runSearch}}>
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<title>Search Compare (Google vs Duck Duck Go)</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</Head>
			<AppToolbar/>
			<Container maxWidth="lg">
				{props.children}
			</Container>
		</AppContext.Provider>
	)
}

export default Layout