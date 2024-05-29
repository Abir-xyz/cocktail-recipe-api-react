import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error'>
      <h1>Error! No Page Found</h1>
      <Link to='/' className='btn-error'>
        Back Home
      </Link>
    </div>
  );
};
export default Error;
