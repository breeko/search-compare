# search-compare

## What is this?

This is a site where you can compare search results of google vs that of duck duck go

## What's Duck Duck Go (DDG)?

Duck Duck Go is a privacy focused search engine. Check them out at https://duckduckgo.com/

## Why are the Google/DDG search results are different from what I see when I search?

For Duck Duck Go, search-compare searches the html version (e.g. duckduckgo.com/html/?q=search). The results are different than the canonical duckduckgo search, but its easier to scrape. For Google, search-compare uses the main google site (e.g. google.com/search?hl=en&q=search), but it doesn't pass any personally identifiable information.

## Why are DDG search results sometimes in Russian?

I don't know, as mentioned above, I get the results from the html version of DDG (e.g. duckduckgo.com/html/q=search). I tried to look for a way to specify the language or scrape the main site, but it proved challenging. Feel free to contact me at branko.blagojevic@[google mail provider] or submit a pull request.
