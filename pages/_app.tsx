import { Container } from "@material-ui/core"
import App from "next/app"
import Head from "next/head"
import Router from "next/router"
import React, { useState } from "react"
import AppToolbar from "../src/components/AppToolbar"
import { AppContext } from "../src/context/AppContext"
import { getDdgResults, getGoogleResults } from "../src/utils/api"

// const Layout: React.FunctionComponent = (props) => {
export default class MyApp extends App {
  public state = {
    search: "",
    setSearch: (search: string) => this.setState({search}),
    isLoading: false,
    setIsLoading: (isLoading: boolean) => this.setState({isLoading}),
    googleResults: Array<SearchResult | undefined>(),
    setGoogleResults: (googleResults: SearchResult[] | undefined) => this.setState({googleResults}),
    ddgResults: Array<SearchResult | undefined>(),
    setDdgResults: (ddgResults: SearchResult[] | undefined) => this.setState({ddgResults}),
  }

  public runSearch = (term: string) => {
    if (term) {
      if (Router.pathname !== "/") {
        // TODO: Change to page and keep state!!
        Router.push("/").then(() => {this.state.setSearch(term); this.runSearch(term)})
      } else {
        this.state.setIsLoading(true)
        this.state.setDdgResults(undefined)
        this.state.setGoogleResults(undefined)
        const g = getGoogleResults(term, 2).then(this.state.setGoogleResults)
        const d = getDdgResults(term).then(this.state.setDdgResults)
        Promise.all([g, d]).then(() => this.state.setIsLoading(false))
      }
    }
  }

  public render() {
    const { Component, pageProps } = this.props
    return(
      <AppContext.Provider value={{...this.state, runSearch: this.runSearch}}>
        <Head>
          <link rel="icon" type="image/x-icon" href="/public/static/favicon.ico" />
          <title>Search Compare</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <AppToolbar/>
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </AppContext.Provider>
    )
  }
}

// export default Layout
