import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '../css/styles.scss';
import { Header } from './components/Header'
import { Calculator } from './components/Calculator'
import { Footer } from './components/Footer'


const App = (props) => {
  return (
    <div>
      <Header />
      <Calculator />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))