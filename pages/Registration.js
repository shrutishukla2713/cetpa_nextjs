import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const getStaticProps = () => {
  let url = process.env.BASE_URL;
  return {
      props: {
          baseurl: url
      }
  }
}

const Registration = (props) => {

  // const initilObj = {
  //     name: '',
  //     email: '',
  //     mobile: '',
  //     password: ''
  // }
  const [formdata, setFormdata] = useState({});
  const [errorformdata, setErrorFormdata] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  const router = useRouter();
  const {baseurl} = props;
  console.log('baseurl', baseurl);

  const registerFn = async () => {
      const validationStatus = validate();
      if(validationStatus) {
          console.log('formdata', formdata, process.env.BASE_URL);
          const url =  baseurl + 'api/users/register'
          try{
              const response = await axios.post(url, formdata);
              console.log(response.data);
              if(response.status === 201) {
                  setSubmitStatus(true);
                  //setFormdata(initilObj);
                  router.push('/Login');
              }
          }
          catch{

          }
          
      }
  }

  const validate = () => {
      if(formdata.mobile) {
          if(formdata.mobile.length >5) {
              //remove error for mobile field
              return true;
          }
          else {
              let tempObj = {}
              tempObj['mobile'] = 'Mobile length not sufficient';
              setErrorFormdata({...errorformdata, ...tempObj});
              return false;
          }
      }
      else {
          let tempObj = {}
          tempObj['mobile'] = 'Mobile can not be empty';
          setErrorFormdata({...errorformdata, ...tempObj});
          return false;
      }
  }

  const handleChange = (e) => {
      console.log(e.target.name, e.target.value);
      let tempObj = {};
      tempObj[e.target.name] = e.target.value;
      setFormdata({...formdata, ...tempObj});
  }

  useEffect(() => {
      console.log('errors', errorformdata);
  })


  return (
    <div>
      {submitStatus && (
        <div class="alert alert-success" role="alert">
          Form submitted.
        </div>
      )}

      <div className="container">
        <div className="row">
          <div className="col-12">
            <section className="vh-100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-xl-11">
                    <div className=" text-black">
                      <div className="">
                        <div className="row justify-content-center">
                          <div className="col-6">
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                              Sign up
                            </p>

                            <form className="mx-1 mx-md-12">
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <label className="form-label">
                                    Your Name
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    id="form3Example1c"
                                    className="form-control"
                                    onChange={handleChange}
                                  />
                                  <span>{errorformdata.name}</span>
                                </div>
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <label className="form-label">
                                    Your Email
                                  </label>
                                  <input
                                    type="email"
                                    name="email"
                                    id="form3Example3c"
                                    className="form-control"
                                    onChange={handleChange}
                                  />
                                  <span>{errorformdata.email}</span>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <label className="form-label">mobile</label>
                                  <input
                                    type="text"
                                    name="mobile"
                                    id="form3Example4cd"
                                    className="form-control"
                                    onChange={handleChange}
                                  />
                                  <span>{errorformdata.mobile}</span>
                                </div>
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <label className="form-label">Password</label>
                                  <input
                                    type="password"
                                    name="password"
                                    id="form3Example4c"
                                    className="form-control"
                                    onChange={handleChange}
                                  />
                                  <span>{errorformdata.password}</span>
                                </div>
                              </div>

                              <div className="form-check d-flex justify-content-center mb-5">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  value=""
                                  id="form2Example3c"
                                />
                                <label className="form-check-label">
                                  I agree all statements in{" "}
                                  <a href="#!">Terms of service</a>
                                </label>
                              </div>

                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button
                                  type="button"
                                  className="btn btn-lg btn-secondary m-1"
                                  onClick={registerFn}
                                >
                                  Register
                                </button>
                              </div>
                              <div className="text-center">
                                <p>
                                  already account? <a href="/Login">Login</a>
                                </p>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
