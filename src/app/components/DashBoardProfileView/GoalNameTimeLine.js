import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { createMuiTheme ,MuiThemeProvider} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme1 = createMuiTheme({
    palette: {
      primary: {
       
        main: "#f1c40f",  //yellow
        dark:"red"
      
      },
      secondary: {

        main: "#649140",  //green
      },
     
    },
    
  });


  

  const useStyles = makeStyles((theme) => ({
      
    mainroot:{
        display:'flex',alignItems:'center',justifyContent:'center',marginTop:100,backgroundColor:'#fff' 
    },
    subroot:{
        backgroundColor:'#fff',width:450,height:400,borderRadius:12,border:'1px solid #aaa69d',display:'flex',flexDirection:'column'
    },
    step:{
        fontSize:15,fontWeight:'600',color:'#000'
    },
    stepDetail:{
        fontSize:11,fontWeight:600,fontFamily:'sans-serif',color:'#649140',marginTop:'0.5%',marginLeft:'0.5%'
    },
    stepDetailyellow:{
        fontSize:11,fontWeight:600,fontFamily:'sans-serif',color:'#f1c40f',marginTop:'0.5%',marginLeft:'0.5%'
    },
    stepDetailred:{
        fontSize:11,fontWeight:600,fontFamily:'sans-serif',color:'#e74c3c',marginTop:'0.5%',marginLeft:'0.5%'
    },
    row:{
        display:'flex',flexDirection:'row'  
    },
    buttonRadius:{
        borderRadius:15,height:20,width:160    
    },
    buttonText:{
        fontFamily:'sans-serif',fontWeight:'600',fontSize:10,color:'#fff'
    },
    red:{
        backgroundColor:'#e74c3c'
    },
    dotborder:{

    },
    black:{
        backgroundColor:'#000'
    },
    green:{
        backgroundColor:'#649140'
    }

}));

export default function GoalNameTimeLine(){
    const classes = useStyles();
    return(
        <div className={classes.mainroot}>
            <div className={classes.subroot}>  
           
     <div style={{display:'flex',flexDirection:'row',marginTop:'2%',marginLeft:'4%'}}>              
<div>
    <ThemeProvider theme={theme1}>
    <PinDropOutlinedIcon color="secondary" style={{height:50,width:50}}/>
    </ThemeProvider>
</div>

<div style={{display:'flex',flexDirection:'column'}}>
    <div style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:16}}>
    Goal Name - In Progress
    </div>
    <div style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:10}}>
    Information about the Goal - Learn to use a data-driven approach to discovering,
dreaming, and delivering a plan to move forward as a community to expand
effective transition practices!
    </div>
</div>
</div> 
               
            <div style={{marginLeft:"-82%"}}>
            <Timeline align="left">
      <TimelineItem>
        <TimelineSeparator>
            <ThemeProvider  theme={theme1}>
              
          <TimelineDot color="secondary"  />
          
          </ThemeProvider>
          <TimelineConnector style={{backgroundColor:'#649140'}} />
        </TimelineSeparator>
        <TimelineContent><div className={classes.row}><div className={classes.step}>Step 1-</div><div className={classes.stepDetail}>Self Analysis-Completed</div></div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="secondary" >
        <ThemeProvider  theme={theme1}>
          <TimelineDot color="secondary" />
          </ThemeProvider>
          <TimelineConnector style={{backgroundColor:'#649140'}}/>
        </TimelineSeparator>
        <TimelineContent><div className={classes.row}><div className={classes.step}>Step 2-</div><div className={classes.stepDetail} >Self Assesment-Completed</div></div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <ThemeProvider  theme={theme1}>
          <TimelineDot color="primary" />
          </ThemeProvider>
          <TimelineConnector style={{backgroundColor:'#000'}} />
        </TimelineSeparator>
        <TimelineContent><div className={classes.row}><div className={classes.step}>Step 3-</div><div className={classes.stepDetail}>Learning-</div><div className={classes.stepDetailyellow}>In Progress</div></div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <ThemeProvider  theme={theme1}>
          <TimelineDot className={classes.red} />
          </ThemeProvider>
        </TimelineSeparator>
        <TimelineContent><div className={classes.row}><div className={classes.step}>Step 4-</div><div className={classes.stepDetail}>Test & Evalution-</div><div className={classes.stepDetailred}>Not Started</div></div></TimelineContent>
      </TimelineItem>
    </Timeline>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'-10%'}}>
                <ThemeProvider theme={theme1}>
<Button color="secondary" variant="contained" style={{ borderRadius:6,height:19,width:160  }}><div className={classes.buttonText}>View Other Goals</div></Button>
                </ThemeProvider>
            </div>      
            </div>

           

        </div>
    )
}