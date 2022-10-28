import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import Countdown from "./components/timers/Countdown";
import XY from "./components/timers/XY";
import Tabata from "./components/timers/Tabata";
import Stopwatch from "./components/timers/Stopwatch";

const Container = styled.div`
  background: #060126;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`;

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Countdown</Link>
        </li>
        <li>
          <Link to="/stopwatch">Stopwatch</Link>
        </li>
        <li>
          <Link to="/xy">XY</Link>
        </li>
        <li>
          <Link to="/tabata">Tabata</Link>
        </li>

      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Container>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Countdown />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/xy" element={<XY />} />
          <Route path="/tabata" element={<Tabata />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
