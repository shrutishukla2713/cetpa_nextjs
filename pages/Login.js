import React, { useState } from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';


export const getStaticProps = () => {
  let url = process.env.BASE_URL;
  return {
      props: {
          baseurl: url
      }
  }
}

const Login = (props) => {
    const [formdata, setFormdata] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);
    const router = useRouter();
    const {baseurl} = props;
    console.log('baseurl', baseurl);

    const loginFn = async () => {
        console.log('formdata', formdata, process.env.BASE_URL);
        const url =  baseurl + 'api/users/login';
        try{
            const response = await axios.post(url, formdata);
            console.log(response.data);
            if(response.data.userid) {
                localStorage.setItem('loginStatus', true);
                localStorage.setItem('username', response.data.email);
                localStorage.setItem('name', response.data.name)
                router.push('/Products');
            }
        }
        catch{
            setSubmitStatus(true);
        }
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        let tempObj = {};
        tempObj[e.target.name] = e.target.value;
        setFormdata({...formdata, ...tempObj});
    }

  return (
    <div>
    {submitStatus && (
      <div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
    )}

<div className="container">
        <div className="row justify-content-center">
          <div className="col-6 m-3 ">
            <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login Page</h1>
            <div className="form-outline mb-4">
                <label className="form-label">Email address</label>
                 <input type="email" name="email"  className="form-control" onChange={handleChange}/>   </div>
        <br />
        
        <div className="form-outline mb-4">
        <label className="form-label">Password</label>
         <input type="password" name="password"  className="form-control" onChange={handleChange}/></div>
        <br />
        <div className="col  mb-3">
                <a href="#!">Forgot password?</a>
              </div>
        <button className="btn btn-lg btn-secondary m-1" onClick={loginFn}>Submit</button>
        </div>
        <div className="text-center">
                <p>
                  Not a member? <a href="/registration">Register</a>
                </p>
              </div>
    </div>
    </div>
    </div>
)
}

export default Login