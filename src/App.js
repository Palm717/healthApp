// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
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
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
