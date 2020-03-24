import { Box, Chip, CircularProgress, createStyles, Divider, makeStyles, Theme, Typography } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import React, { useContext, useRef } from "react"
import SearchResultsTable from "../src/components/SearchResultsTable"
import { AppContext } from "../src/context/AppContext"

const Index = () => {
    const context = useContext(AppContext)

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
              "flexWrap": "wrap",
              "& > *": {
                  margin: theme.spacing(0.5),
              },
            },
            suggestions: {
              "display": "inline-block",
              "flexWrap": "wrap",
              "margin": theme.spacing(0.5),
                "& > *": {
                    fontSize: 14,
                    margin: theme.spacing(0.5),
                },
              },
            },
          ),
    )
    const classes = useStyles()

    const suggestions = {
        general: ["ddg", "google", "fb", "st patricks in 2022", "date of ny marathon"],
        news: ["2008 crisis", "corona virus"],
        politics: ["trump", "sanders", "biden", "republicans", "democrats", "trump russia", "sanders cuba"],
        shopping: ["buy tv", "best cell phone", "flights", "mortgage rates"],
        conspiracy: ["are vacccines dangerous", "flat earth", "bush 9/11", "jfk assassination", "clinton body count", "moon landing"],
        entertainment: ["eminem fast song", "news guy spider man actor"],
        programming: ["css center text", "implicits scala 3.0", "regex match .com", "tsfiddle", "nextjs source map"],
    }
    const scrollToRef = (ref: React.MutableRefObject<any>) =>
      window.scrollTo({left: 0, top: ref.current.offsetTop, behavior: "smooth"})

    const resultsRef = useRef(null)
    const scrollToResults = () => scrollToRef(resultsRef)

    if (context.googleResults?.length > 0 && context.ddgResults?.length > 0) {
      scrollToResults()
    }

    return(
        <React.Fragment>
            <Box my={4} style={{display: "inline-block"}}>
                { Object.entries(suggestions).map(([category, terms]) =>
                    <Paper key={category} className={classes.suggestions}>
                        <Typography color="textSecondary" gutterBottom>
                            {category}
                        </Typography>
                        {terms.map(term =>
                            <Chip
                                key={`${category}${term}`}
                                style={{margin: 10}}
                                label={term}
                                onClick={() => {context.setSearch(term); context.runSearch(term)}}
                            />)
                        }
                    </Paper>,
                )}
            </Box>
            <Divider />
            <div ref={resultsRef}>
              <Box my={4}>
                  {context.isLoading && <CircularProgress />}
                  {context.googleResults !== undefined && context.ddgResults !== undefined &&
                      <SearchResultsTable
                        resultsLeft={context.googleResults}
                        resultsRight={context.ddgResults}
                      />
                  }
              </Box>
            </div>
        </React.Fragment>
    )
}

const Inner = () => <React.Fragment><Index/></React.Fragment>
export default Inner
