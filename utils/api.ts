import rp from "request-promise"
import cheerio  from 'cheerio'
import { getTags } from './tagger'

const clean = (search: string) =>  search.replace(/ /g, "+").replace(/\//, "%2f")

export const getGoogleResults = async (search: string, numPages: number): Promise<SearchResult[]> => {
    const pages = [...Array(numPages).keys()]
    const results = await Promise.all(pages.map(async page => {
        const start = page * 10
        const url = `https://cors-anywhere.herokuapp.com/https://www.google.com/search?hl=en&start=${start}&q=${clean(search)}`
        return rp(url, {headers: {Origin: null}}).then(parseGoogleHtml)
    }))
    
    return results.reduce((acc, val) => [...acc, ...val])
}

export const getDdgResults = async (search: string): Promise<SearchResult[]> => {
    const url = `https://m8sl2u61nb.execute-api.us-east-1.amazonaws.com/dev/ddg/${clean(search)}`
    const p: string = await rp(url, {headers: {Origin: null}}).promise()
    const out = JSON.parse(p) as SearchResult[]
    const tagged = out.map(o => ({...o, tags: o.tags ? o.tags.concat(getTags(o.link)) : getTags(o.link)}))
    return tagged
}

const parseGoogleHtml = (raw: string): SearchResult[] => {
    const $ = cheerio.load(raw)
    const out: SearchResult[] = []

    $('a').each((_a, e) =>{
        const elem = $(e)
        const href = elem.attr("href")
        const title =
            href &&
            href.startsWith("/search") &&
            elem.parent().parent().attr('aria-level') === "3" ? elem.text() : undefined
        const desc = null
        const link = null
        if (title !== undefined) {
            out.push({title, desc, link, tags: ["answers"]})
        }
    })

    // answers date
    $('h2:contains("Date Result")').each((_a, e) => {
        const title = $(e).next().text()
        const desc = null
        const link = null
        if (title !== undefined && desc !== undefined && link !== undefined && title !== prevTitle){
            out.push({title, desc, link, tags: ["answers"]})
        }
    })

    // answers date
    let prevTitle = undefined
    $('div[data-attrid="hw:/collection/events:start date"]').each((_a, e) => {
        if ($(e).attr("role") === "heading") {       
            const title = $(e).text()
            const desc = $(e).parent().parent().parent().next().text()
            const link = null
            if (title !== undefined && desc !== undefined && link !== undefined && title !== prevTitle){
                out.push({title, desc, link, tags: ["answers"]})
                prevTitle = title
            }
        }
    })

    // answers sites
    $('div[data-tts="answers"]').each((_a, e) => {
        const title = $(e).text()
        const desc = $(e).parent().parent().next().text()
        // const linkText = $(e).parent().parent().parent().find("a").attr("href")
        // const linkUrl = linkText && linkText.match(/url=.+?(?=&)/g)
        const link = null //linkUrl && decodeURIComponent(linkUrl[0])
        if (title !== undefined && desc !== undefined && link !== undefined){
            out.push({title, desc, link, tags: ["answers"]})
        }
    })
    
    $("h3").each((_a, e) => {
        const title = $(e).text()
        const desc = $(e).parent().parent().next().find("span").text()
        const link = $(e).parent().attr("href")
        if (title !== undefined && desc !== undefined && link !== undefined) {
            out.push({title, desc, link, tags: []})
        }
    })
    const tagged = out.map(o => ({...o, tags: o.tags.concat(getTags(o.link))}))
    return tagged
}
