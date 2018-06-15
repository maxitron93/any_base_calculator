import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Any-Base Calculator</h1>
      <p className="header__subtitle">Ever wanted to do calculations in base42? Well now you can! With this calculator, you can perform calculations in any base from binary to base64!</p>
    </div>
  )
}

export { Header }