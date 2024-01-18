import { signIn } from 'next-auth/react';
import React from 'react';

const LoginModal = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login Required</h2>
        <p>Please log in to access this content.</p>
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default LoginModal;
