import { Chip, Typography } from '@material-ui/core';
import React from "react";
import { getTagColor } from '../utils/tagger';


interface SearchResultCellProps {
	title: string
	link: string
	desc: string
	tags?: string[]
}

const SearchResultCell: React.FunctionComponent<SearchResultCellProps> = ({title, link, desc, tags}) => {
	const MAX_URL_LENGTH = 48
	const croppedLink = link && link.length > MAX_URL_LENGTH ? link.slice(0, MAX_URL_LENGTH - 3) + "..." : link

	return(
		<React.Fragment key={title + link + desc}>
			<a href={link}><span style={{fontWeight: "bold"}}>{title}</span></a>
			<br/>
			{link !== null &&
				<Typography variant="caption">
					{croppedLink}
				</Typography>
			}
			<div>
			{tags.map(tag => {
				const {backgroundColor, textColor} = getTagColor(tag)
				return <Chip key={tag} style={{backgroundColor, color: textColor, margin: "2px"}} label={tag} />
			})}
			</div>
			<Typography paragraph variant="body1">
				{desc}
			</Typography>
		</React.Fragment>
	)
}

export default SearchResultCell
