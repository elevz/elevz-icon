import icons from "./icons";

export type IconName = keyof typeof icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 30,
  ...props
}) => {
  const Component = icons[name];

  return (
    <Component
      {...props}
      height={props.height || size}
      width={props.width || size}
    />
  );
}

export default Icon;