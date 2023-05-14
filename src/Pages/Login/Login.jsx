import loginimg from './../../assets/images/login/login.svg'
const Login = () => {

    const handelLogin = event =>{
        event.preventDefault()
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-12">
                    <img src={loginimg} alt="" />
                </div>
                <div className="card rounded-lg border-gray-400 flex-shrink-0 w-full max-w-sm shadow bg-base-100 p-3">
                    <h1 className="text-2xl text-center p-4 font-bold">Login</h1>
                    <div className="card-body">
                        <form onSubmit={handelLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-orange-500' type="submit" value="LogIn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;