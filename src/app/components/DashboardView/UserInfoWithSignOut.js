import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Button from '@material-ui/core/Button';


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
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small1: {
      width: theme.spacing(2),
      height: theme.spacing(2),
      backgroundColor:'#464122'
    },


    small2: {
        width: theme.spacing(2),
        height: theme.spacing(2),
        backgroundColor:'#649140'
      },

    large: {
      width: theme.spacing(13),
      height: theme.spacing(13),
      borderColor:'#464122',
      borderWidth:2,
      borderStyle:'solid'
    },
    mainroot:{
        display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#fff' 
    },
    subroot:{
        backgroundColor:'#fff',width:200,height:'auto',borderRadius:12,border:'1px solid #aaa69d'
    },
flexdiv:{
    display:'flex',alignItems:'center',justifyContent:'center',
    marginBottom:'-30%'
},
hrdiv:{
    width:'100%',height:'1vh',backgroundColor:'#464122',borderTopLeftRadius:'2vh',borderTopRightRadius:'1vh'  
},
textdivmargin:{
    marginTop:'30%',

},
textStyle:{
    fontFamily:'serif',fontWeight:'bold',fontSize:15,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
},

subtextStyle:{
    fontFamily:'Sans-serif',fontWeight:'bold',fontSize:10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    color:'#aaa69d'
},
divBoxTop:{
    backgroundColor:'#aaa69d',height:1,marginTop:5
},

divBoxTop1:{
    backgroundColor:'#aaa69d',height:1,marginTop:0
},

divBoxBottom:{
    backgroundColor:'#aaa69d',height:1
}

  }));



// #649140 =>dark green    #a0cc39 =>light green  #464122  =>dark soil color    #aaa69d   =>border

export default function DashboardView(){

    const classes = useStyles();

    return(
        <div className={classes.mainroot}>
            <div >
            <div className={classes.flexdiv}>
        <Avatar alt="Remy Sharp" src="https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg" style={{  width:'17vh',
      height: '17vh',
      borderColor:'#464122',
      borderWidth:2,
      borderStyle:'solid'}} />
            </div>
            <div className={classes.subroot}>
                <div className={classes.hrdiv} />
                <div className={classes.textdivmargin}>
                    <div className={classes.textStyle}>
Matthew  Flanagan
                    </div>

                    <div className={classes.subtextStyle}>
                    Senior Researcher, Adjunct Instructor,
Special Education and Disability Studies
                    </div>

     <div>               
<div className={classes.divBoxTop}/>
<div style={{display:'flex',flexDirection:'column',marginBottom:"7%"}}>
    {/* ------------------------- */}
    <div style={{display:'flex',justifyContent:'space-around',marginTop:"7%"}}>
       <div style={{display:'flex',}}>
        <div style={{fontFamily:'sans-serif',fontSize:10,fontWeight:'bold'}}>
       Your Profile Views
       </div>
       </div>
       <div >
      

       <Avatar alt="Remy Sharp" style={{width:'2vh',
      height:"2vh",
      backgroundColor:'#464122'}} ><div style={{fontSize:10}}>{10}</div></Avatar>
      
       </div>
   </div>
{/* ----------------------- */}

<div style={{display:'flex',justifyContent:'space-around',marginTop:"7%"}}>
       <div style={{display:'flex'}}>
        <div style={{fontFamily:'sans-serif',fontSize:10,fontWeight:'bold',color:'#649140'}}>
       Your Post Views&nbsp;&nbsp;&nbsp;
       </div>
       </div>
       <div style={{display:'flex'}}>
       {/* <ThemeProvider theme={theme1} > */}
       {/* <Badge color="primary"  badgeContent={0} showZero  /> */}

       <Avatar alt="Remy Sharp" style={{ width:'2vh',
        height:'2vh',
        backgroundColor:'#649140'}} ><div style={{fontSize:10}}>{10}</div></Avatar>
       {/* </ThemeProvider> */}
       </div>
   </div>
</div>
<div  className={classes.divBoxBottom}/>
</div>

<div>
<div className={classes.divBoxTop}/>
<div style={{display:'flex',flexDirection:'row'}}>
    <div style={{height:"3.5vh",width:"1.5%",backgroundColor:'#649140'}} />
<div style={{fontFamily:'sans-serif',fontSize:15,fontWeight:'bold',marginLeft:"11%"}}>My Projects</div>
</div>
{/* <div  className={classes.divBoxBottom}/> */}
</div>

<div>
<div className={classes.divBoxTop1}/>
<div style={{display:'flex',flexDirection:'row'}}>
    <div style={{height:"3.5vh",width:"1.5%",backgroundColor:'#464122'}} />
<div style={{fontFamily:'sans-serif',fontSize:15,fontWeight:'bold',marginLeft:"11%"}}>My Profile</div>
</div>
{/* <div  className={classes.divBoxBottom}/> */}
</div>

<div>
<div className={classes.divBoxTop1}/>
<div style={{display:'flex',flexDirection:'row'}}>
    <div style={{height:"3.5vh",width:"1.5%",backgroundColor:'#464122'}} />
<div style={{fontFamily:'sans-serif',fontSize:15,fontWeight:'bold',marginLeft:"11%"}}>Messages</div>
</div>
{/* <div  className={classes.divBoxBottom}/> */}
</div>



<div>
<div className={classes.divBoxTop1}/>
<div style={{display:'flex',flexDirection:'row'}}>
    <div style={{height:"3.5vh",width:"1.5%",backgroundColor:'#464122'}} />
<div style={{fontFamily:'sans-serif',fontSize:15,fontWeight:'bold',marginLeft:"11%"}}>Followers</div>
</div>
{/* <div  className={classes.divBoxBottom}/> */}
</div>

<div>
<div className={classes.divBoxTop1}/>
<div style={{display:'flex',flexDirection:'row'}}>
    <div style={{height:"3.5vh",width:"1.5%",backgroundColor:'#464122'}} />
<div style={{fontFamily:'sans-serif',fontSize:15,fontWeight:'bold',marginLeft:"11%"}}>My Network</div>
</div>
{/* <div  className={classes.divBoxBottom}/> */}
</div>

<div>
<div className={classes.divBoxTop1}/>
<div style={{display:'flex',flexDirection:'row'}}>
    <div style={{height:"3.5vh",width:"1.5%",backgroundColor:'#464122'}} />
<div style={{fontFamily:'sans-serif',fontSize:15,fontWeight:'bold',marginLeft:"11%"}}>My Goals</div>
</div>
<div  className={classes.divBoxBottom}/>
</div>

                </div>
<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <ThemeProvider theme={theme1}>
            <Button
              variant="contained"
              color="secondary"
            style={{height:"3vh",marginBottom:"5%",marginTop:"8%",width:"85%",borderRadius:"2vh"}}
            >
              <div style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:10}}>Logout</div>
            </Button>
          </ThemeProvider>
          </div>
            </div>
            
            </div>
        </div>
    )
}