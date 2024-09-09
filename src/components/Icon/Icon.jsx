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
  >
    <use href={`${import.meta.env.BASE_URL}/icons.svg#icon-${iconId}`} />
  </svg>
);
