import { Box, Divider, List, ListItem, Typography } from "@material-ui/core"
import React from "react"
// import Layout from "./_app"

const About = () => {
    const faqs = [
        {
            question: <span>What is this?</span>,
            answer: <span>This is a site where you can compare search results of google vs that of duck duck go</span>,
            key: 1,
        },
        {
            question: <span>What's Duck Duck Go (DDG)?</span>,
            answer: <span>Duck Duck Go is a privacy focused search engine.
                Check them out at <a href="https://duckduckgo.com/">https://duckduckgo.com/</a></span>,
            key: 2,
        },
        {
            question: <span>Why are the Google/DDG search results are different from what I see when I search?</span>,
            answer:
                <span>
                    For Duck Duck Go, search-compare searches the html version (e.g. duckduckgo.com/html/?q=search).
                    The results are different than the canonical duckduckgo search, but its easier to scrape.
                    For Google, search-compare uses the main google site (e.g. google.com/search?hl=en&q=search),
                    but it doesn't pass any personally identifiable information.
                </span>,
            key: 3,
        },
        {
            question: <span>Why are DDG search results sometimes in Russian?</span>,
            answer: <span>
                        I don't know, as mentioned above, I get the results from the html version of DDG
                        (e.g. duckduckgo.com/html/q=search). I tried to look for a way to specify the
                        language or scrape the main site, but it  proved challenging. Feel free to contact
                        me at branko.blagojevic@[google mail provider] or submit
                        a <a href="https://github.com/breeko/search-compare">pull request</a>.
                    </span>,
            key: 4,
        },
        {
            question: <span>How do you classify your tags?</span>,
            answer: <span>
                    See <a href="https://github.com/breeko/search-compare/blob/master/utils/tagger.ts">tagger.tsx</a>.
                </span>,
            key: 5,
        },
    ]

    return(
        <React.Fragment>
            <List component="nav">
                {faqs.map(({question, answer, key}, idx) =>
                    <Box my={4} key={key}>
                        {idx !== 0 && <Divider/>}
                        <ListItem><Typography variant="h5">{question}</Typography></ListItem>
                        <ListItem><Typography variant="body1">{answer}</Typography></ListItem>
                    </Box>,
                )}
            </List>
        </React.Fragment>
    )
}

const Inner = About

export default Inner
