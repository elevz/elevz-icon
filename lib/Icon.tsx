import icons from "./icons";

export type IconName = keyof typeof icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({
  name,
  ...props
}) => {
  const Component = icons[name];

  return (
    <Component
      {...props}
    />
  );
}

export default Icon;