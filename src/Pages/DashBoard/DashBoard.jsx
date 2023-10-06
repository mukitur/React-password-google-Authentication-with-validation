import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2 className="text-2xl mt-10">Welcome to Dashboard ({user.email}) </h2>
    </div>
  );
};

export default DashBoard;
