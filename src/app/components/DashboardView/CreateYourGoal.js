import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    mainroot: {
        display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'
    },

    subroot: {
        backgroundColor: '#fff', width: 'auto', height: "auto", borderRadius: "0.9vh", border: '1px solid #aaa69d'
    },
    img: {
        borderTopRightRadius: "0.9vh", borderTopLeftRadius: "0.9vh", width:"100%", height: "70%"
    },
    avatarbtm: {
        display: 'flex', alignItems: 'center', justifyContent: 'center'
    },
    font: {
        fontSize: 10, fontWeight: '600', fontFamily: 'sans-serif'
    }

}));

const CreateYourGoal = () => {

    const classes = useStyles();

    return (
        <div className={classes.mainroot}>
            <div className={classes.subroot}>
                <div style={{ width:"16vh", height:"16vh"  }}>
                    <img src='https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg' className={classes.img} />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:"-7%" }}>
                        <Avatar style={{ width:"2vh", height: "2vh", backgroundColor: '#649140', borderWidth: '0.1vh', borderStyle: 'solid', borderColor: '#fff' }}><div style={{ fontSize: 12 }}>+</div></Avatar>
                    </div>
                    <div className={classes.avatarbtm}>
                        <div className={classes.font}>
                            Create Your Goal
</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default CreateYourGoal;