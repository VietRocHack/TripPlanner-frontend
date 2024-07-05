import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from './utils/themes.ts';


// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       light: "#fe5379",
//       main: "#FE2858",
//       dark: "#b11c3d",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#54f3ee",
//       main: "#2AF0EA",
//       dark: "#1da8a3",
//       contrastText: "#000",
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
