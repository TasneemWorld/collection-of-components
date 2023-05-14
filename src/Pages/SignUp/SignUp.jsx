import { Link } from 'react-router-dom';
import loginimg from './../../assets/images/login/login.svg'

const SignUp = () => {

    const handelSignIn = event => {
        event.preventDefault()
    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-12">
                    <img src={loginimg} alt="" />
                </div>
                <div className="card rounded-lg border-gray-400 flex-shrink-0 w-full max-w-sm shadow bg-base-100 p-3">
                    <h1 className="text-2xl text-center p-4 font-bold">SignUp</h1>
                    <div className="card-body">
                        <form onSubmit={handelSignIn}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" name='email' className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm password" name='confirmPassword' className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <input className='btn bg-orange-500' type="submit" value="SignUp" />
                            </div>
                        </form>
                        <div className='text-center'>
                            <p>Already have an Accont <Link>LogIn</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;