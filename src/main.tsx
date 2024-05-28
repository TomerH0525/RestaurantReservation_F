import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Routing } from "./components/Layout/Routing/Routing.tsx";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Layout/Footer/Footer.tsx";
import { Header } from "./components/Layout/Header/Header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="h-screen w-screen flex flex-col overflow-auto">

        <header className="sticky top-0">
          <Header />
        </header>

        <body className="flex-1 p-5">
          <Routing />
        </body>

        <footer className="sticky bottom-0 text-center">
          <Footer />
        </footer>

      </div>
    </BrowserRouter>
  </React.StrictMode>
);
