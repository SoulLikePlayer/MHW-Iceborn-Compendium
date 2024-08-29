import React from "react";

/*Import des composent*/
import Header from "./components/Page/Header";
import RouteAnimer from "./components/Others/RouteAnimer";

/*import des bibliothèque*/
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <RouteAnimer />
      </main>
    </Router>
  );
}

export default App;
