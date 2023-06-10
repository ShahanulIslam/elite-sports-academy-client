import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../../../Hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle } = UseAuth();

    
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='mb-8 mx-auto'>
            <button onClick={handleGoogleSignIn} className='btn w-[250px]'><FcGoogle></FcGoogle>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;