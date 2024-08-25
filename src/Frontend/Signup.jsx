import React from 'react';


const Signup = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className="card box" style={{ height: '500px', width: '500px' }}>
        <h3 className="card-title text-center mt-4">Sign Up</h3>
        <div className='card-body'>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputName">Full Name</label>
              <input type="text" className="form-control" id="exampleInputName" placeholder="Enter full name" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputConfirmPassword">Confirm Password</label>
              <input type="password" className="form-control" id="exampleInputConfirmPassword" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn rounded-shadow btn-primary">Sign Up</button>
          </form>
          <div className="text-center mt-3">
            <p>Already have an account? <a href="#">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
