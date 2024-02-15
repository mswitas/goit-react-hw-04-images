import PropTypes from "prop-types";

export const Error = ({ errorMessage }) => (
    <div>
        <p>{errorMessage}</p>
    </div>
);

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
}

