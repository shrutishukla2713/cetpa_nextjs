import React from "react";


const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 m-3 ">
                    <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login Page</h1>
                    <form>
                        <div className="form-outline mb-4">
                            <label className="form-label" >Email address</label>
                            <input type="email" id="form2Example1" className="form-control" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Password</label>
                            <input type="password" id="form2Example2" className="form-control" />
                        </div>
                        <div className="col  mb-3">
                            <a href="#!">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn btn-lg btn-secondary m-1">Sign in</button>
                        <button type="button" class="cancelbtn">Cancel</button>
                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>

                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Login;