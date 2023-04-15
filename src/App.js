import { Grid, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import Theme from './Theme/Theme';




function App() {
  return (
    <Grid>
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </Grid>
  );
}

export default App;
