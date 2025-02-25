import { MemeCard, MemeImage } from '../styles/CardStyles';

const MemeCardComponent = ({ image, title }) => {
  return (
    <MemeCard>
      <MemeImage src={image} alt={title} />
      <h2>{title}</h2>
    </MemeCard>
  );
};

export default MemeCardComponent;
