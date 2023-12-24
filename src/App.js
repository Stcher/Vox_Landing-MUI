
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingPage from './Components/LandingPage';
import screen from "./img/screen.png"

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h1'
          },
          style: {
            fontSize: 50,
            fontFamily: 'Lexend',
            fontWeight: 800,
            textAlign: 'left',
            width: "90%",
            paddingBottom: 30
          }
        },
        {
          props: {
            variant: 'subtitle2'
          },
          style: {
            fontSize: 20,
            fontFamily: 'Lexend',
            textAlign: 'left',
            width: "95%",
            paddingBottom: 30
          },
        },
      ]
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "51rem"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "178px",
          height: "60px"
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .css-2y464i-MuiInputBase-root-MuiFilledInput-root": {
            background: "white !important",
            boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.10)",
            borderRadius: "15px",
            backgroundColor: "white"
          },
          "& .css-2bxn45, .MuiInputBase-root.MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.css-1jg2gny, .MuiInputBase-input.MuiFilledInput-input.css-2bxn45": {
            background: "white !important",
            boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.10)",
            borderRadius: "15px",
            backgroundColor: "white"
          },
          "& .css-2y464i-MuiInputBase-root-MuiFilledInput-root::before, .css-2y464i-MuiInputBase-root-MuiFilledInput-root::after": {
            border: "none !important"
          },
          "& .css-1ady8eb-MuiContainer-root": {
            height: '20px !important',
            fontWeight: 800,
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
          },
          "& .css-1jg2gny::before, .css-1jg2gny::after, .css-1jg2gny:hover:not(.Mui-disabled, .Mui-error)::before": {
            border: "none !important"
          },
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
            background: "white !important",
            boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.10)",
            borderRadius: "15px !important",
            backgroundColor: "white",
            border: "none",

          "& .css-2y464i--MuiFilledInput-root::before, .css-2y464i-MuiInputBase-root-MuiFilledInput-root::after": {
            border: "none !important"
          },
          "& .css-1ady8eb-MuiContainer-root": {
            height: '20px !important',
            fontWeight: 800,
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
          },
          "& .css-1jg2gny::before, .css-1jg2gny::after, .css-1jg2gny:hover:not(.Mui-disabled, .Mui-error)::before": {
            border: "none !important"
          },
        }
      }
    },
  }
})

const styles = {
  paperContainer: {
    backgroundImage: `url(${screen})`,
    backgroundRepeat: 'round'
  }
};

function App() {

  return (
    <div className="App" style={styles.paperContainer}>
      <ThemeProvider theme={theme}>
        <LandingPage className="App" theme={theme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
