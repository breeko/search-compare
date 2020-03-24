import React from "react"

interface IAppContext {
	googleResults: SearchResult[]
	ddgResults: SearchResult[]
	setGoogleResults: (res: SearchResult[]) => void
	setDdgResults: (res: SearchResult[]) => void
	search: string
	setSearch: (search: string) => void
	isLoading: boolean
	setIsLoading: (loading: boolean) => void
	runSearch: (search: string) => void
}

export const AppContext = React.createContext<IAppContext>(undefined)
