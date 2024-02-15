import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images, onClick }) => (
    <ul className={css.ImageGallery}>
        {images.map((image, i) => {
            return (
                <ImageGalleryItem key={i+image.id} src={image.webformatURL} alt={image.tags} large={image.largeImageURL} onClick={onClick} />
            );
        })}
    </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}
