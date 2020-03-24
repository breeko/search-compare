import { APIGatewayProxyHandler } from "aws-lambda"
import rp from "request-promise"
import { parseDdg, parseGoogleHtml } from "./utils"

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
      input: event,
    }, null, 2),
  }
}

export const ddg: APIGatewayProxyHandler = async (event: { pathParameters: string }, _context: any) => {
  const search = event.pathParameters.search
  const url = `https://duckduckgo.com/html/?q=${search}`
  const headers = {
    "Host": "duckduckgo.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
  }

  const results = await rp(url, {headers, rejectUnauthorized: false}).promise().then(parseDdg)
  const body = JSON.stringify(results)
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body,
  }
}

// export const google: APIGatewayProxyHandler = async (event, _context) => {

//   const search = event.pathParameters['search']
//   const numPages = 2
//   const pages = [...Array(numPages).keys()]
//   const results = await Promise.all(pages.map(async page => {
//       const start = page * 10
//       const url = `https://www.google.com/search?hl=en&start=${start}&q=${search}`
//       return rp(url).then(parseGoogleHtml)
//   }))

//   const body = JSON.stringify(results.reduce((acc, val) => [...acc, ...val]))

//   return {
//     statusCode: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Credentials': true,
//     },
//     body
//   }
// }
