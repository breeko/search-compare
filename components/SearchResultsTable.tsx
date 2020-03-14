import React from "react"
import { Grid, List, ListItem, Typography } from '@material-ui/core'

interface SearchResultsTableProps {
    results: SearchResult[]
}

const SearchResultTable: React.FunctionComponent<SearchResultsTableProps> = ({results}) => {
    return(
        <Grid item xs={6}>
            <List>
                {results.map((o: SearchResult) =>
                        <ListItem key={o.title}>
                            <Typography>
                                <Typography variant="h6">
                                        <a href={o.link}>{o.title}</a>
                                </Typography>
                                <Typography variant="body2">
                                    {o.desc}
                                </Typography>
                                
                            </Typography>
                        </ListItem>
                    )}
            </List>
        </Grid>
    )
}

export default SearchResultTable
