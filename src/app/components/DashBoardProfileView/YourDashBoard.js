import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

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

const useStyles = makeStyles((theme) => ({
    mainroot:{
        display:'flex',alignItems:'center',justifyContent:'center',marginTop:10,backgroundColor:'#fff' 
    },

    subroot:{
        backgroundColor:'#fff',width:900,height:170,borderRadius:5,border:'1px solid #aaa69d'
    },
    
    heading:{
        display:'flex',alignItems:'center',justifyContent:'center',marginTop:'1%'
    },
    font:{
        fontSize:17,fontWeight:600,fontFamily:'sans-serif',color:'#649140'
    },
    blacktext:{
        fontFamily:'sans-serif',fontWeight:'600',fontSize:14,color:"#000",
      },
      greensmalltext:{
        fontFamily:'sans-serif',fontWeight:'600',fontSize:11,color:"#649140"
      },
      iconStyle:{
        display:'flex',alignItems:'center',justifyContent:"center",flexDirection:'column'
      }

}));



export default function YourDashBoard(){
    const classes = useStyles();
    return(
        <div className={classes.mainroot}>
            <div className={classes.subroot}>   
            <div className={classes.heading}>
                <div className={classes.font}>
                Your Dashboard
                </div>
            </div>
            <div style={{marginTop:"2%"}}>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                    <div className={classes.iconStyle}>
                        <div>
                        <ThemeProvider theme={theme1}>
<PinDropOutlinedIcon color="secondary" style={{height:50,width:50}}/>
                        </ThemeProvider>
                       </div>
                 <div className={classes.blacktext}>My Goals</div>
                 <div className={classes.greensmalltext}>10</div>
                    </div>


                    <div className={classes.iconStyle}>
                        <div>
                        <ThemeProvider theme={theme1}>
<PinDropOutlinedIcon color="secondary" style={{height:50,width:50}}/>
                        </ThemeProvider>
                       </div>
                 <div className={classes.blacktext}>Followers</div>
                 <div className={classes.greensmalltext}>70</div>
                    </div>


                    <div className={classes.iconStyle}>
                        <div>
                        <ThemeProvider theme={theme1}>
<PinDropOutlinedIcon color="secondary" style={{height:50,width:50}}/>
                        </ThemeProvider>
                       </div>
                 <div className={classes.blacktext}>My Projects</div>
                 <div className={classes.greensmalltext}>5</div>
                    </div>


                    <div className={classes.iconStyle}>
                        <div>
                        <ThemeProvider theme={theme1}>
<PinDropOutlinedIcon color="secondary" style={{height:50,width:50}}/>
                        </ThemeProvider>
                       </div>
                 <div className={classes.blacktext}>My Networks</div>
                 <div className={classes.greensmalltext}>700</div>
                    </div>


                    <div className={classes.iconStyle}>
                        <div>
                        <ThemeProvider theme={theme1}>
<PersonOutlineIcon color="secondary" style={{height:50,width:50}}/>
                        </ThemeProvider>
                       </div>
                 <div className={classes.blacktext}>My Profile</div>
                 <div className={classes.greensmalltext}>Edit</div>
                    </div>


                    <div className={classes.iconStyle}>
                        <div>
                        <ThemeProvider theme={theme1}>
<SettingsIcon color="secondary" style={{height:50,width:50}}/>
                        </ThemeProvider>
                       </div>
                 <div className={classes.blacktext} >Setting</div>
                 <div style={{color:'#fff'}}>1</div>
                    </div>


                </div>
                </div>
            </div>

        </div>
    )
}