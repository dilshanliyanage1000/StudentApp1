import React from "react";
import { createRoot } from "react-dom";
import AddStudent from "./views/AddStudent";
import Navbar from "./components/Navbar";

import 'bootstrap/dist/css/bootstrap.css';
import './assets/App.css';

const App = () => (
  <>
    <Navbar />
    <AddStudent />
  </>
);

const root = createRoot(document.getElementById("app"));

root.render(<App />);
