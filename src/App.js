import { ThemeProvider } from '@emotion/react';
import './assets/global.css';
import Home from './Pages/Home';
import { CVthemes } from './util/CVthemes';
import CVForm from './Pages/CVForm';

function App() {
  return (
    <div className="App">
      <Home />
      <ThemeProvider theme={CVthemes.defaultTheme}>
        <CVForm />
      </ThemeProvider>
    </div>
  );
}

export default App;
