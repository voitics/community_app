import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';

const theme1 = createMuiTheme({
  palette: {
    primary: {

      main: "#464122",

    },
    secondary: {

      main: "#649140",
    },
  },
});

// #649140 =>dark green    #a0cc39 =>light green  #464122  =>dark soil color    #aaa69d   =>border

const useStyles = makeStyles((theme) => ({
  mainroot: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'
  },
  subroot: {
    backgroundColor: '#fff', width: "100%", height: 'auto', borderRadius:'1vh', border: '1px solid #aaa69d'
  },
  hrdiv: {
    width: '100%', height:"4.5vh", backgroundColor: '#464122', borderTopLeftRadius:"1vh", borderTopRightRadius:"1vh", display: 'flex'
  },
  textdesign: {
    fontFamily: 'sans-serif', fontSize: 12, color: '#fff', fontWeight: 'bold', margin: 'auto', marginLeft:"5%"
  },
  divBoxTop: {
    backgroundColor: '#aaa69d', height:1, marginTop: 5
  },

  divBoxTop1: {
    backgroundColor: '#aaa69d', height:'0.1vh', marginTop: 0
  },

  divBoxBottom: {
    backgroundColor: '#aaa69d', height:"0.1vh"
  }

}));

const UpdateAndProjects = () => {

  const classes = useStyles();

  return (
    <div className={classes.mainroot}>
      <div className={classes.subroot}>
        <div className={classes.hrdiv} ><div className={classes.textdesign}>Today's Update</div></div>

        {/* ------------------------------------------------------------ */}
        <div>
          <div className={classes.divBoxTop1} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>

            <div style={{ fontFamily: 'sans-serif', fontSize: 10, fontWeight: 'bold', marginLeft:"7%" }}>Transition Discoveries - Highlights from
the 2021 Pennsylvania.....</div>

          </div>

          <a href="https://www.google.com/" style={{ color: '#649140', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 10, marginLeft: "60%" }}>READ MORE</a>
          {/* <div  className={classes.divBoxBottom}/> */}
        </div>

        <div>
          <div className={classes.divBoxTop1} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>

            <div style={{ fontFamily: 'sans-serif', fontSize: 10, fontWeight: 'bold', marginLeft:"7%" }}>Transition Discoveries - Highlights from
the 2021 Pennsylvania.....</div>

          </div>

          <a href="https://www.google.com/" style={{ color: '#649140', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 10, marginLeft:"60%" }}>READ MORE</a>
          {/* <div  className={classes.divBoxBottom}/> */}
        </div>


        <div>
          <div className={classes.divBoxTop1} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>

            <div style={{ fontFamily: 'sans-serif', fontSize: 10, fontWeight: 'bold', marginLeft:"7%" }}>Transition Discoveries - Highlights from
the 2021 Pennsylvania.....</div>

          </div>

          <a href="https://www.google.com/" style={{ color: '#649140', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 10, marginLeft:"60%" }}>READ MORE</a>
          {/* <div  className={classes.divBoxBottom}/> */}
        </div>


        <div>
          <div className={classes.divBoxTop1} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>

            <div style={{ fontFamily: 'sans-serif', fontSize: 10, fontWeight: 'bold', marginLeft:"7%" }}>Transition Discoveries - Highlights from
the 2021 Pennsylvania.....</div>

          </div>

          <a href="https://www.google.com/" style={{ color: '#649140', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 10, marginLeft:"60%" }}>READ MORE</a>
          {/* <div  className={classes.divBoxBottom}/> */}
        </div>


        <div>
          <div className={classes.divBoxTop1} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>

            <div style={{ fontFamily: 'sans-serif', fontSize: 10, fontWeight: 'bold', marginLeft:"7%" }}>Transition Discoveries - Highlights from
the 2021 Pennsylvania.....</div>

          </div>

          <a href="https://www.google.com/" style={{ color: '#649140', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 10, marginLeft:"60%" }}>READ MORE</a>
          <div className={classes.divBoxBottom} />
        </div>

        {/* --------------------------------------------------------------- */}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ThemeProvider theme={theme1}>
            <Button
              variant="contained"
              color="secondary"
              style={{ height:"1.3vh", marginBottom:"2vh", marginTop:"1vh", width:"40%", borderRadius:"2vh", }}
            >
              <div style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 8 }}>Read All</div>

            </Button>
          </ThemeProvider>
        </div>
      </div>

    </div>
  )
}

export default UpdateAndProjects;