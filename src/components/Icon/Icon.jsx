export const Icon = ({
  iconId,
  width = 32,
  height = 32,
  fill,
  onClick,
  className,
}) => (
  <svg
    width={width}
    height={height}
    onClick={onClick}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <use href={`${import.meta.env.BASE_URL}/icons.svg#icon-${iconId}`} />
  </svg>
);
