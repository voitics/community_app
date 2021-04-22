import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    mainroot:{
        display:'flex',alignItems:'center',justifyContent:'center',marginTop:10,backgroundColor:'#fff' 
    },

    subroot:{
        backgroundColor:'#fff',width:900,height:280,borderRadius:5,border:'1px solid #aaa69d'
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        borderColor:'#464122',
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:60
      },
      smalltext:{
        fontFamily:'sans-serif',fontWeight:'600',fontSize:10,color:"#aaa69d"
      },
      blacksmalltext:{
        fontFamily:'sans-serif',fontWeight:'600',fontSize:10,color:"#000",margin:10
      },
      greensmalltext:{
        fontFamily:'sans-serif',fontWeight:'600',fontSize:10,color:"#649140"
      }
}));

export default function SetProfile(){
    const classes = useStyles();
    return(
        <div className={classes.mainroot}>
            <div className={classes.subroot}>

                <img src='https://www.beach-backgrounds.com/wallpapers/thumbnails/tropical-sunset-wallpaper-1008x380-318.jpg' width='100%' height='40%' style={{borderTopLeftRadius:5,borderTopRightRadius:5}}/>

{/* <Avatar alt="Remy Sharp" src="https://i.insider.com/5dc0999cd8d84606116a0462?width=1100&format=jpeg&auto=webp" className={classes.large} /> */}

{/* ------------------------------------------------------------------------------------------------------- */}
<div style={{display:'flex',flexDirection:'row',}}>
<div style={{marginTop:-50,marginLeft:20}}>
<div>
<img src="https://i.insider.com/5dc0999cd8d84606116a0462?width=1100&format=jpeg&auto=webp" className={classes.large}  />
</div>

<div style={{fontFamily:'serif',fontWeight:'600',fontSize:17,marginTop:5}}>
Matthew Flanagan
</div>

<div style={{marginTop:5}}>
    <div className={classes.smalltext}>
Senior Researcher, Adjunct Instructor,
</div>
<div className={classes.smalltext}>
Special Education and Disability Studies
</div>
</div>

<div style={{marginTop:5}}>
    <div className={classes.greensmalltext}>
The George Washington University,
</div>
<div className={classes.greensmalltext}>
Graduate School of Education and Human Development
</div>

</div>
</div>

{/* ------------------------------------------------------------------------------------------------------ */}

<div style={{width:450,height:110,border:'1px solid #aaa69d',borderRadius:5,marginTop:45,marginLeft:130,backgroundColor:'#f5f6fa'}}>
    <div style={{display:"flex",alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
    <div style={{display:"flex",fontFamily:'sans-serif',fontWeight:'600',fontSize:13,color:'#649140',marginLeft:-320,marginTop:5}}>
    About Matthew
    </div>
    <div className={classes.blacksmalltext}>
    Matthew Flanagan is a Senior Researcher and Adjunct Instructor of research methods in secondary transition at GWU.
Matthew leads the design and implementation of research efforts within the Transition Discoveries Initiative, including
data collection tools, study designs and technical assistance materials to teach stakeholders about community-driven
action planning.
    </div>
    </div>
</div>


</div>
            </div>

        </div>
    )
}