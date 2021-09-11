import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Header from "./sections/header";
import About from "./sections/about";
import Info from "./sections/info";
import News from "./sections/news";

document.body.style.backgroundColor = "black";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Header />
    <About />
    <Info />
    <News />
  </div>,
  rootElement
);
