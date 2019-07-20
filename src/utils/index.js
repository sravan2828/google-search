
const prepareImages = imageData => {
  const { position, thumbnail, sourceUrl, source} = imageData;
  return {
    id: position,
    thumbnail,
    image:sourceUrl,
    source
  };
};

export default prepareImages;