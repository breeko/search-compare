import cheerio from 'cheerio'

export const zip = <T>(arr: T[], ...arrs: T[][]) => arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]))

export const parseDdg = (raw: string) => {
	const $ = cheerio.load(raw)

	const titles = $(".result__title").toArray().map(e => $(e).text().trim())
	const links = $(".result__url").toArray().map(e => $(e).attr("href").trim())
	const descs = $(".result__snippet").toArray().map(e => $(e).text().trim())

	const results = zip(titles, links, descs).map( ([title, link, desc]) => ({title, link, desc}))
	return results
}


export const parseGoogleHtml = (raw: string): SearchResult[] => {
    const $ = cheerio.load(raw)
    const out: SearchResult[] = []

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

    return out
}
