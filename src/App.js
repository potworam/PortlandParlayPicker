// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {useState} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import Teams from './components/body/teams';
import './App.css';
//testcomment//
function App() {
  return (
    <div>
       <main>
       
       <Header></Header>
       <Body></Body>
       <Teams></Teams>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
