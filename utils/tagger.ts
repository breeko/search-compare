const tags = {
	news: [
		"news.yahoo.com",
		"news.google.com",
		"huffpost.com",
		"cnn.com",
		"nytimes.com",
		"foxnews.com",
		"nbcnews.com",
		"dailymail.co.uk",
		"independent.co.uk",
		"washingtonpost.com",
		"theguardian.com",
		"abcnews.go.com",
		"bbc.com",
		"usatoday.com",
		"latimes.com",
		"nbcnews.com",
		"npr.org",
		"marketwatch.com",
		"cnbc.com",
		"forbes.com",
		"businessinsider.com",
		"msnbc.com"
	],
	wikipedia: [/([a-zA-Z]+\.)?wikipedia\.org/],
	youtube: ["youtube.com"],
	StackExchange: [
		/(.+)?stackexchange\.com/,
		"stackoverflow.com",
		"superuser.com",
		"askubuntu.com",
		"serverfault.com"
	],
	social: [
		"facebook.com",
		"fb.com",
		"instagram.com",
		"twitter.com",
		"linkedin.com",
		"reddit.com"
	],
	imdb: ["imdb.com"],
	gov: ["^(https?:\/\/)?(www\.)?[a-z0-9-\.]+\.(\.gov)(\.[a-z]{2,3})?"],
	org: ["^(https?:\/\/)?(www\.)?[a-z0-9-]+\.(\.org)(\.[a-z]{2,3})?"],
}

export const getTags = (str: string): string[] => {
	const matched: string[] = []
	Object.entries(tags).forEach(([tag, regexes]) => {
		if(regexes.find(regex => str && str.match(regex))) {
			matched.push(tag)
		}
	})
	return matched
}

export const getTagColor = (tag: string) => {
	let backgroundColor: string
	let textColor: string
	switch (tag) {
		case "news":
			backgroundColor = "#d62021"
			textColor = "#ffffff"
			break
		case "wikipedia":
			backgroundColor = "#8489c1"
			textColor = "#ffffff"
			break
		case "youtube":
			backgroundColor = "#c4302b"
			textColor = "#ffffff"
			break
		case "StackExchange":
			backgroundColor = "#f58024"
			textColor = "#000000"
			break
		case "social":
			backgroundColor = "#3b5998"
			textColor = "#ffffff"
			break
		case "imdb":
			backgroundColor = "#fbc533"
			textColor = "#000000"
			break
		case "answers":
			backgroundColor = "#bdc3c7"
			textColor = "#000000"
			break
		case "gov":
			backgroundColor = "#34495e"
			textColor = "#ffffff"
			break
		case "org":
			backgroundColor = "#2ecc71"
			textColor = "#000000"
			break
		default:
			backgroundColor = "none"
			textColor = "#000000"
			break
	}
	return {backgroundColor, textColor}
}