import React from "react";
import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./Components/Footer/Footer";
import DownloadApp from "./Components/Sections/DownloadApp/DownloadApp";

export default function App() {
  return (
    <SnackbarProvider>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </SnackbarProvider>
  );
}
