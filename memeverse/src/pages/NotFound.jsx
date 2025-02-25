import { useNavigate } from 'react-router-dom';
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundMessage
} from '../styles/NotFoundStyles';
import Button from '../components/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundMessage>
        Sorry, the page you're looking for doesn't exist.
      </NotFoundMessage>
      <Button onClick={() => navigate('/')}>Go Back Home</Button>
    </NotFoundContainer>
  );
};

export default NotFound;
