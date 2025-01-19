import React from "react";
import "./App.css";
import { SnackbarProvider } from "notistack";

export default function App() {
  return (
    <SnackbarProvider>
      <div className="App">
        <h1>My React App</h1>
      </div>
    </SnackbarProvider>
  );
}
