import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    mainroot:{
        display:'flex',alignItems:'center',justifyContent:'center',marginTop:10,backgroundColor:'#fff' 
    },

    subroot:{
        backgroundColor:'#fff',width:450,height:320,borderRadius:5,border:'1px solid #aaa69d'
    },
    heading:{
        display:'flex',alignItems:'center',justifyContent:'center',marginTop:'1.5%',fontFamily:'sans-serif',fontWeight:'600',fontSize:18
    },
    img:{
        width: theme.spacing(8),
        height: theme.spacing(8),
        borderRadius:200,
        border:'1px solid #464122',
        borderWidth:2
    },
    center:{
        display:'flex',alignItems:'center',justifyContent:'center'
    },
    centerButton:{
        display:'flex',alignItems:'center',justifyContent:'center',marginTop:'5%'
    },
    forspace:{
        display:'flex',justifyContent:'space-around',marginTop:"1%",width:'80%'
    }
}));

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

export default function MyNetWork(){
    const classes = useStyles();
    return(
        <div className={classes.mainroot}>
            <div className={classes.subroot}>
                <div className={classes.heading} >           
                My Network
                </div> 
<div style={{marginTop:'2%'}}>
                <div className={classes.center}>
                <div className={classes.forspace}>

                <div>
                    
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                <div>
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                <div>
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                <div>
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                <div>
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                </div>
                </div>
{/* ---------------------------- */}

<div className={classes.center}>
                <div className={classes.forspace}>

                <div>
                    
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                <div>
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                <div>
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                <div>
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                <div>
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                </div>
                </div>
{/* --------------------------------- */}

<div className={classes.center}>
                <div className={classes.forspace}>

                <div>
                    
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                <div>
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                <div>
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                <div>
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                <div>
                <img alt="Cindy Baker" src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg" className={classes.img} />
                </div>

                </div>
                </div>
                </div>
{/* ------------------ */}

<div className={classes.centerButton}>
    <ThemeProvider theme={theme1}>
    <Button color="secondary" variant="contained" style={{borderRadius:10,height:25,width:200}}>
       <div style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:11}}> View All Friends  </div>
    </Button>
    </ThemeProvider>
</div>

           </div>

        </div>
    )
}
