import PropTypes from "prop-types";
import css from "./Modal.module.css";

export const Modal = ({ src, alt, onClick }) => (
    <div className={css.Overlay} onClick={onClick}>
        <div className={css.Modal}>
            <img src={src} alt={alt} />
        </div>
    </div>
);

Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
}
