import PropTypes from "prop-types";
import css from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ src, alt, onClick, large }) => (
    <li className={css.ImageGalleryItem}>
        <img src={src} alt={alt} onClick={onClick} data-large={large} />
    </li>
);

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
}
