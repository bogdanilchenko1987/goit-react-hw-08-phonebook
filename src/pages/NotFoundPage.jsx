import { Link } from 'react-router-dom';
import { WrapperToCenter } from 'App.styled';

export default function NotFoundPage() {
  return (
    <WrapperToCenter>
      404 Not found. Return to <Link to="/">HomePage</Link>
    </WrapperToCenter>
  );
}
