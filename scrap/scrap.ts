import cheerio from "cheerio"
import fs from "fs"
import rp from "request-promise"
import { parseDdg } from '../sls-search-compare/utils'

const search = "ddg"
// const headers = {
//     Host: "duckduckgo.com",
//     "User-Agent":" Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
    // Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    // "Accept-Language": "en-US,en;q=0.5",
    // Connection: "keep-alive",
    // Cookie: "5=1",
    // "Upgrade-Insecure-Requests": "1",
    // DNT: "1",
    // "Cache-Control": " max-age=0",
    // TE: "Trailers"
// }

// const url = `https://cors-anywhere.herokuapp.com/https://duckduckgo.com/html/?q=${encodeURI(search)}`
// console.log(url)
// const url = `https://duckduckgo.com/html/?q=${encodeURI(search)}`
// rp(url, {headers}).promise().then(o => fs.writeFileSync("out-ddg.html", o))
// rp(url, {headers, rejectUnauthorized: false}).promise().then(console.log)

// const url = "./out-ddg.html"
// const html = fs.readFileSync(url, "utf8")
// const $ = cheerio.load(html)
// const zip = <T>(arr: T[], ...arrs: T[][]) => arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]))


const out: SearchResult[] = []

// const titles = $(".result__title").toArray().map(e => $(e).text().trim())
// const links = $(".result__url").toArray().map(e => $(e).text().trim())
// const descs = $(".result__snippet").toArray().map(e => $(e).text().trim())

// const results = zip(titles, links, descs).map( ([title, link, desc]) => ({title, link, desc}))
// console.log(results)

// $("h3").each((_a, e) => {
//     const title = $(e).text()
//     const desc = $(e).parent().parent().next().find("span").text()
//     const link = $(e).parent().attr("href")
//     if (title !== undefined && desc !== undefined && link !== undefined) {
//         out.push({title, desc, link})
//     }
// })

console.log(out)

const url = `https://duckduckgo.com/?q=${encodeURI(search)}`
const headers = {
    Host: "duckduckgo.com",
    "User-Agent":" Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "none",
    Connection: "keep-alive",
    "Upgrade-Insecure-Requests": 1,
    TE: "Trailers",
}

rp(url, {headers, rejectUnauthorized: false}).promise().then(out => fs.writeFileSync("scrap/out-ddg-orig.html", out)).then(() => console.log("done :-)"))//.then(parseDdg).then(console.log)
