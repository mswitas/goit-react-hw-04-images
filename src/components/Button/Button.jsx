import PropTypes from "prop-types";
import css from "./Button.module.css";

export const Button = ({ label, onClick }) => (
    <button type="button" className={css.Button} onClick={onClick}>{label}</button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

