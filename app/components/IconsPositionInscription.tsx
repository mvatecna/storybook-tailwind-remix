type IconsPositionInscriptionProps = {
  logo: string;
};

const IconsPositionInscription = ({logo}: IconsPositionInscriptionProps) => {
  return (
    <div>
      <img src={logo} alt='Man Logo' /> 
    </div>
  )
}


export default IconsPositionInscription;
