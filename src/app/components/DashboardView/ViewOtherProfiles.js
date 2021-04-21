import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    mainroot: {
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:"1.5%", backgroundColor: '#fff'
    },

    subroot: {
        backgroundColor: '#fff', width: "100%", height: "auto", borderRadius:"1%", border: '1px solid #aaa69d'
    },
    centeral: {
        display: 'flex', alignItems: 'center', justifyContent: 'center'
    },
    large: {
        width:'2vh',
        height:'2vh',
        borderColor: '#464122',
        borderWidth:'0.5vh',
        borderStyle: 'solid'
    },
    small: {
        width: '1.5vh',
        height:'1.5vh',
        borderColor: '#464122',
        borderWidth: '0.5vh',
        borderStyle: 'solid',
        margin: 10,
        marginLeft: 25
    },
    font: {
        fontFamily: 'sans-serif', fontWeight: '600', fontSize: 14
    },
    input: {
        border: '1px solid #aaa69d', height:"90%", width:"380%", borderRadius: 2
    },
}));
// #649140 =>dark green    #a0cc39 =>light green  #464122  =>dark soil color    #aaa69d   =>border
const ViewOtherProfiles = () => {
    const classes = useStyles();
    const [count, setCount] = useState(0)
    const handleCountLiked = () => {
        setCount(count + 1)
    }

    return (
        <div className={classes.mainroot}>
            <div className={classes.subroot}>
                <div className={classes.centeral}>
                    <div style={{ margin:"2%", marginLeft:'-25%' }}>
                        <Avatar alt="Remy Sharp" src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" style={{ width:'7vh',
        height:'7vh',
        borderColor: '#464122',
        borderWidth:'0.5vh',
        borderStyle: 'solid'}} />
                    </div>
                    {/*..................................................................  */}


                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ color: '#649140', fontFamily: 'sans-serif', fontSize: 15, fontWeight: '600' }}>
                            Erin Weierbach
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>

                            <div style={{ color: '#000', fontFamily: 'sans-serif', fontSize: 8, fontWeight: '600' }}>
                                Active Member
                            </div>&nbsp;
<div style={{ color: '#000', fontFamily: 'sans-serif', fontSize: 8, fontWeight: '600' }}>||</div>&nbsp;

<div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ color: '#649140', fontFamily: 'sans-serif', fontSize: 8, fontWeight: '600' }}>50+ Goals</div>&nbsp;
    <div style={{ color: '#000', fontFamily: 'sans-serif', fontSize: 8, fontWeight: '600' }}>Created</div>
                            </div>

                        </div>


                        <div style={{ color: '#000', fontFamily: 'sans-serif', fontSize: 8, fontWeight: '600' }}>
                            Looking for a new career? Or to reinforce your resume? Chances are, your next job will require Salesforce skills. Learn them for free with Trailhead.
</div>
                    </div>

                    {/*.....................................................................  */}


                </div>


                <div >
                    <img src='images/imgdoc.jpg' style={{ width: '100%', height:"100%" }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop:"2%" }}>
                    <div>
                        <Button onClick={() => handleCountLiked()} >
                            <ThumbUpAltOutlinedIcon />
                        </Button>
                        <font className={classes.font}>Like</font>
                    </div>

                    <div>
                        <Button>
                            <ScreenShareOutlinedIcon />
                        </Button>
                        <font className={classes.font}>Share</font>
                    </div>


                    <div>
                        <Button>
                            <ChatBubbleOutlineIcon />
                        </Button>
                        <font className={classes.font}>Comments</font>
                    </div>



                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight:"2%", marginTop: '-2%' }}>
                    <div style={{ fontWeight: '600', fontFamily: 'sans-serif', fontSize: 12, color: '#649140' }}>
                        {count} People Liked
    </div>
                </div>
                {/* ===== */}
                <div style={{ display: 'flex', flexDirection: 'row', marginTop:"2%" }}>
                    <div>
                        <Avatar alt="Remy Sharp" src="https://nextluxury.com/wp-content/uploads/Top-75-Best-Manly-Hobbies-For-Men-1.jpg" style={{ width: '6vh',
        height:'6vh',
        borderColor: '#464122',
        borderWidth: '0.5vh',
        borderStyle: 'solid',
        margin: "1.5vh",
        marginLeft: "5vh"}} />
                    </div>


                    <Paper elevation={0} style={{ width: 'auto', backgroundColor: '#ecf0f1' }} >
                        <div style={{ fontWeight: '600', fontFamily: 'sans-serif', fontSize: 12, color: '#649140', marginLeft: "5%", paddingTop: "5%" }}>
                            Erin Weierbach
    </div>
                        <div style={{ fontWeight: '600', fontFamily: 'sans-serif', fontSize: 12, color: '#000', marginLeft:"1vh", paddingTop:"5%"}}>
                            Thank you everyone.!
    </div>
                    </Paper>



                </div>
                {/*=======  */}
                <div style={{ display: 'flex', flexDirection: 'row', marginTop:"3%" }}>
                    <div>
                        <Avatar alt="Remy Sharp" src="https://nextluxury.com/wp-content/uploads/Top-75-Best-Manly-Hobbies-For-Men-1.jpg" style={{ width: '6vh',
        height:'6vh',
        borderColor: '#464122',
        borderWidth: '0.5vh',
        borderStyle: 'solid',
        margin: "1.5vh",
        marginLeft: "5vh"}} />
                    </div>


                    <Paper elevation={0} style={{ width: "auto", backgroundColor: '#ecf0f1' }} >
                        <div style={{ fontWeight: '600', fontFamily: 'sans-serif', fontSize: 12, color: '#649140', marginLeft:"5%", paddingTop: "5%" }}>
                            Missy
    </div>
                        <div style={{ fontWeight: '600', fontFamily: 'sans-serif', fontSize: 12, color: '#000', marginLeft:"1vh", paddingTop:"1vh"}}>
                            Nice, started a great career. All the best.!
    </div>
                    </Paper>



                </div>
                {/* ---------- */}

                <div style={{ display: 'flex', flexDirection: 'row', marginTop:"2.5%" }}>
                    <div>
                        <Avatar alt="Remy Sharp" src="https://nextluxury.com/wp-content/uploads/Top-75-Best-Manly-Hobbies-For-Men-1.jpg"style={{ width: '6vh',
        height:'6vh',
        borderColor: '#464122',
        borderWidth: '0.5vh',
        borderStyle: 'solid',
        margin: "1.5vh",
        marginLeft: "5vh"}} />
                    </div>


                    <div style={{ marginTop:"1.7%" }}>
                        <Input

                            disableUnderline={true}

                            rows={true}
                            rowsMax={true}
                            margin={'dense'}
                            className={classes.input}
                            defaultValue={'Add a comment..'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOtherProfiles;