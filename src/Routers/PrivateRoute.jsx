
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation()

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children
    }

    return <Navigate  state={{ from: location }} to="/login" replace></Navigate>

};

export default PrivateRoute;