import Link from 'next/link'
import { getDdgResults, getGoogleResults } from "../utils/api"
import SearchIcon from '@material-ui/icons/Search'
import SearchResultsTable from "../components/SearchResultsTable"

import { useState } from 'react'
import { Typography, Grid, InputAdornment, Divider, Container, Input } from '@material-ui/core'

const Index = () => {
    const [search, setSearch] = useState<string>()
    const [googleResults, setGoogleResults] = useState<SearchResult[]>([])
    const [ddgResults, setDdgResults] = useState<SearchResult[]>([])
    
    const runSearch = () => {
        console.log(`running search for ${search}`)
        if (search) {
            getGoogleResults(search).then(setGoogleResults)
            getDdgResults(search).then(setDdgResults)
        }
    }

    return(
        <Container>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <Link href="/about">
                <a>About Page</a>
            </Link>
            <Typography variant="h4">Compare Duck Duck Go search with that of Google</Typography>
            <Divider />
            <Input
                autoFocus 
                onChange={e => setSearch(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && runSearch()}
                startAdornment={
                <InputAdornment position="start"><SearchIcon/></InputAdornment>
            }/>
            <Grid container spacing={3}>
                <SearchResultsTable results={googleResults} />
                <SearchResultsTable results={ddgResults} />
            </Grid>
        </Container>
    )
}

export default Index
