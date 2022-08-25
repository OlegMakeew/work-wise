import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '@/assets/styles/index.css'
import { BrowserRouter } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#e75348',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
