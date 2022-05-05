import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Social = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

  const [signInWithGithub, loadingGithub, userGithub, errorGithub] = useSignInWithGithub(auth);

  const navigate = useNavigate();


  let errorHandel;
  if (errorGoogle || errorGithub) {
    errorHandel =
      <div>
        <p className='text-danger'>Error: {errorGoogle?.message}
          {errorGithub?.message}</p>
      </div>
      ;
  }
  if (userGoogle || userGithub) {
    navigate('/home')
  }

  return (
    <div>
      <div className='d-flex align-items-center'>
        <div style={{ height: "1px" }} className="w-50 bg-success "></div>
        <h3 className='m-2 mt-1'>or</h3>
        <div style={{ height: "1px" }} className="w-50 bg-success"></div>
      </div>
      <h1>{errorHandel}</h1>
      <div className="">
        <button
          onClick={() => signInWithGoogle()}

          className='btn-success w-50 mx-auto d-block p-2 fs-4 mb-4 '>Google Sign In</button>
        <button

          onClick={() => signInWithGithub()}
          className='btn-primary w-50 mx-auto d-block mb-4 p-2 fs-4'>Github Sign In</button>
      </div>
    </div>
  );
};

export default Social;