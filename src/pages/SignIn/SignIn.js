import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from '../../components/SignIn/SignUp';
import './SignIn.scss';

const SignIn = () => {
  const navigate = useNavigate();

  const goToMain = e => {
    e.preventDefault();
    // isValidSignIn
    //   ? navigate('/')
    //   : isValidEmail
    //   ? alert('Please Check Your Password!')
    //   : alert('Please Check Your Email!');

    fetch('http://10.58.5.116:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          alert('Please check your email and password');
        }
      })
      .then(result => {
        localStorage.setItem('token', result.access_token);
        alert('SUCCESS');
        navigate('/');
      });
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [modal, setModal] = useState(false);

  const isValidEmail = id.includes('@') && id.includes('.');
  const isValidPassword = pw.length >= 8;
  const isValidSignIn = isValidEmail && isValidPassword;

  const handleIdInput = e => {
    setId(e.target.value);
  };
  const handlePwInput = e => {
    setPw(e.target.value);
  };
  const handleModal = () => {
    setModal(!modal);
  };

  const [modalBtnStyle, setModalBtnStyle] = useState({ display: 'block' });
  const [signInStyle, setSignInStyle] = useState({ display: 'block' });

  return (
    <div className="signIn">
      <div className="title">The good stuff awaits.</div>
      <hr />
      <div className="containers">
        <div className="leftContainer">
          <h1>One account, twice the fun!</h1>
          <div className="borderBottom" />
          <p>Use the same email address for online and in-store!</p>
          <h1>Here are some of the perks</h1>
          <div className="borderBottom" />
          <ul>
            {PERKS_LIST.map(list => {
              const { id, imgSrc, alt, text } = list;
              return (
                <li key={id}>
                  <img src={imgSrc} alt={alt} />
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rightContainer">
          <div className="signInContainer" style={signInStyle}>
            <h1>Sign in to your account</h1>
            <div className="borderBottom" />
            <div className="signInWrapper">
              <form>
                <label>
                  Email address
                  <input
                    type="text"
                    onChange={handleIdInput}
                    value={id}
                    required
                  />
                </label>
                <label>
                  Password
                  <input
                    type="password"
                    onChange={handlePwInput}
                    value={pw}
                    required
                  />
                </label>
                <a href="#!">Forgot your password?</a>
                <button
                  className={
                    isValidSignIn
                      ? 'signInBtnActivated'
                      : 'signInBtnDeActivated'
                  }
                  onClick={goToMain}
                >
                  SIGN IN
                </button>
              </form>
              <hr />
            </div>
          </div>
          {modal === true ? <SignUp /> : null}
          <div
            className="clickToRegister"
            style={modalBtnStyle}
            onClick={() => {
              handleModal();
              setModalBtnStyle({ display: 'none' });
              setSignInStyle({ display: 'none' });
            }}
          >
            <h1>Create a luluisher account</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const PERKS_LIST = [
  {
    id: 1,
    imgSrc: '/signInImages/refund.png',
    alt: 'refund',
    text: 'Fast Track Refunds',
  },
  {
    id: 2,
    imgSrc: '/signInImages/stopwatch.png',
    alt: 'timer',
    text: 'Check out faster',
  },
  {
    id: 3,
    imgSrc: '/signInImages/location.png',
    alt: 'map',
    text: 'Track Orders',
  },
  {
    id: 4,
    imgSrc: '/signInImages/heart.png',
    alt: 'heart',
    text: 'Wish List',
  },
  {
    id: 5,
    imgSrc: '/signInImages/shopping-bag.png',
    alt: 'shoppingbag',
    text: 'Tailored Suggestions',
  },
];

export default SignIn;
