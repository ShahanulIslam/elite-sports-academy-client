import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='mb-8 mx-auto'>
            {/* <div className="divider">OR</div> */}
            <button className='btn w-[250px]'><FcGoogle></FcGoogle>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;