// App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import theme from "./theme"; // Import your custom theme

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/shop" Component={Shop} />
            <Route path="/about" Component={About} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
