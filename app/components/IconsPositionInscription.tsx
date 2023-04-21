import Svg02User from "./icons/02User";

type IconsPositionInscriptionProps = {
  fill: string;
};

const IconsPositionInscription = ({ fill }: IconsPositionInscriptionProps) => {
  return (
    <div className="fill-cyan-500 bg-fuchsia-400">
      <Svg02User fill="#e6e8c7" />
      <Svg02User fill="#969696" />
    </div>
  );
};

export default IconsPositionInscription;
