import React from 'react';
import { StyledPicture } from './ImageBoxStyles';

function ImageBox ({ id, thumbnail, source}) {
	return (
	<StyledPicture key={id}>
		<img src={thumbnail} alt={source} />
	</StyledPicture>
	);
}
export default ImageBox;
