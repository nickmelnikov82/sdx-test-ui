export const HoverableIcon = ({icon, hoverIcon, className = '', hovered}) => {

  return (
    <img
      src={hovered ? hoverIcon : icon}
      alt=""
      className={className}
    />
  )
}