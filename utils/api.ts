import rp from "request-promise"
import cheerio  from 'cheerio'

export const getGoogleResults = async (search: string): Promise<SearchResult[]> => {
    const url = `https://cors-anywhere.herokuapp.com/https://www.google.com/search?hl=en&q=${encodeURI(search)}`
    const p: string = await rp(url, {headers: {Origin: null}}).promise()
    return parseGoogleHtml(p)
}

export const getDdgResults = async (search: string): Promise<SearchResult[]> => {
    const url = `https://duckduckgo.com/html/?q=${encodeURI(search)}`
    // const url = `https://cors-anywhere.herokuapp.com/https://duckduckgo.com/?q=${encodeURI(search)}`
    const p: string = await rp(url, {headers: {Origin: null}}).promise()
    return parseDdg(p)
}

const parseDdg = (raw: string) => {
    const $ = cheerio.load(raw)
    const out: SearchResult[] = []

    const titles = $(".result__title").toArray().map(e => $(e).text().trim())
    const links = $(".result__url").toArray().map(e => $(e).text().trim())
    const descs = $(".result__snippet").toArray().map(e => $(e).text().trim())

    const results = zip(titles, links, descs).map( ([title, link, desc]) => ({title, link, desc}))
    return results
}

const parseGoogleHtml = (raw: string): SearchResult[] => {
    const $ = cheerio.load(raw)
    const out: SearchResult[] = []
    $("h3").each((_a, e) => {
        const title = $(e).text()
        const desc = $(e).parent().parent().next().find("span").text()
        const link = $(e).parent().attr("href")
        if (title !== undefined && desc !== undefined && link !== undefined) {
            out.push({title, desc, link})
        }
    })

    return out
}

const zip = <T>(arr: T[], ...arrs: T[][]) => arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]))