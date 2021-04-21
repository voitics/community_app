import * as React from 'react';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizaitonProvider from '@material-ui/lab/LocalizationProvider';
import DayPicker from '@material-ui/lab/DayPicker';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";


const theme1 = createMuiTheme({
  palette: {
    primary: {

      main: "#649140",
      //    main: "#464122",
    },
    secondary: {

      main: "#464122",
    },
  },
});

const Calender = () => {
  const [date, setDate] = React.useState(new Date());
  return (
 
     <div style={{marginLeft:'-20%',width:'auto',height:'auto'}}>
          <LocalizaitonProvider dateAdapter={AdapterDateFns} >
            <ThemeProvider theme={theme1}>
             
              <DayPicker
                allowKeyboardControl={false}
                date={date}
                
                onChange={(newValue) => setDate(newValue)}
              />
              
            </ThemeProvider>
          </LocalizaitonProvider>

          </div>

  );
}

export default Calender;