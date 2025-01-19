import React from "react";
import "./App.css";
import { SnackbarProvider } from "notistack";
import Home from "./Pages/Home/Home";

export default function App() {
  return (
    <SnackbarProvider>
      <div className="App">
        <Home />
      </div>
    </SnackbarProvider>
  );
}
