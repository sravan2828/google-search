import React from 'react';
import { StyledContainer } from './ImageListStyles';

const ImageList = ({ images, renderImage }) => (
	<StyledContainer>{images.map(image => renderImage(image))}</StyledContainer>
);

export default ImageList;
