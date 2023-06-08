import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../../../Hooks/UseAuth';

const SocialLogin = () => {
    const { signInWithGoogle } = UseAuth();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
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