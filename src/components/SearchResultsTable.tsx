import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core"
import React from "react"
import { zip } from "../../sls-search-compare/utils"
import SearchResultCell from "./SearchResultCell"

interface SearchResultsTableProps {
    resultsLeft: SearchResult[]
    resultsRight: SearchResult[]
}

const SearchResultTable: React.FunctionComponent<SearchResultsTableProps> = ({resultsLeft, resultsRight}) => {
    if (resultsLeft.length === 0 && resultsRight.length === 0) { return null }

    const results = zip(resultsLeft, resultsRight)
    if (results.length === 0) { return null }
    return(
        <TableContainer component={Paper}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            Rank
                        </TableCell>
                        <TableCell align="center">
                            Google
                        </TableCell>
                        <TableCell align="center">
                            DuckDuckGo
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {results.map(([left, right], idx) =>
                      right !== undefined && left !== undefined &&
                            <TableRow key={`${left.title}${right.title}`}>
                                <TableCell component="th" scope="row" style={{width: "2%"}}>
                                    {idx + 1}
                                </TableCell>
                                <TableCell style={{width: "45%"}}>
                                    {left &&
                                    <SearchResultCell
                                      title={left.title}
                                      link={left.link}
                                      desc={left.desc}
                                      tags={left.tags}
                                    />}
                                </TableCell>
                                <TableCell style={{width: "45%"}}>
                                    {right &&
                                    <SearchResultCell
                                      title={right.title}
                                      link={right.link}
                                      desc={right.desc}
                                      tags={right.tags}
                                    />}
                                </TableCell>
                            </TableRow>,
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SearchResultTable
