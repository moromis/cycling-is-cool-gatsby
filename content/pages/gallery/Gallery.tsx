/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image';
import { jsx } from 'theme-ui';
import useGallery from '../../../src/hooks/useGallery';

function Gallery() {
  const images = useGallery();
  console.log(images);

  return (
    <div>
      {images.map((image) => (
        <GatsbyImage sx={{ maxHeight: '100vh', margin: '20px 0' }} objectFit="contain" key={image.id} image={image.gatsbyImageData} alt={image.id} />
      ))}
    </div>
  );
}

export default Gallery;
