import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import NavBar from './components/NavBar';
import './css/index.css';

class Main extends React.Component {
  // console.log(NavBar);
  render() {
    return(
      <div>
        <App/>
      </div>
    )
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
