import Icons from "../../assets/icons/icons.svg"; // Path to your icons.svg
import PropTypes from "prop-types";

interface Icon {
  name: string;
  color: string;
  size: string;
}

const Icon = ({ name, color, size }: Icon) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
