import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      404 Not found. Return to <Link to="/">HomePage</Link>
    </div>
  );
}
