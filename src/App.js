import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Recipe from './components/Recipe/Recipe';
import Restaurant from './components/Restaurant/Restaurant';


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#BD2124',
      },
      secondary: {
        main: '#00b67f',
      },
      error: {
        main: '#ffef4e',
      },
      warning: {
        main: '#4a148c',
      },
      success: {
        main: '#43a047',
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Restaurant/>}></Route>
            <Route path='/restaurant' element={<Restaurant/>}></Route>
            <Route path='/restaurant/:idMeal' element={<Recipe/>}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
