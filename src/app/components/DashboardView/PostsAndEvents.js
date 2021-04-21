import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

  mainroot: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'
  },
  subroot: {
    // height: 120
    backgroundColor: '#fff', width: "100%", height:'45%', borderRadius: "1vh", border: '1px solid #aaa69d'
  },
  large: {
    width: 50,
    height: 50,
    borderColor: '#464122',
    borderWidth: "5%",
    borderStyle: 'solid'
  },
  input: {
    border: '1px solid #aaa69d', height: "120%", width: "100%", borderRadius: 7,
  },
  post: {
    display: 'flex', flexDirection: 'row', marginTop: "1%"
  },
  fourButtons: {
    width: "89%", height:"1%", border: '1px solid #aaa69d', borderRadius: 3, marginLeft: "9%", marginTop: "2.5%", backgroundColor: '#dfe4ea',marginBottom:"2%"
  },
  button: {
    height:"100%"
  },
  buttonText: {
    fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 11
  },
  imageicons: {
    display: 'flex', alignItems: 'baseline', marginTop:'4%'
  },
  eventdiv: {
    display: 'flex', flexDirection: 'row', justifyContent: 'space-around'
  },
  divdir: {
    display: 'flex', flexDirection: 'row'
  }

}));

const PostsAndEvents = () => {

  const classes = useStyles();

  return (
    <div className={classes.mainroot}>
      <div className={classes.subroot}>
        <div className={classes.post}>
          <div style={{ marginLeft: "1%", width: "6%" }}>
            <Avatar alt="Remy Sharp" src="https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg" style={{
               width: "100%",
               height: "100%",
               borderColor: '#464122',
               borderWidth: "1%",
               borderStyle: 'solid'
            }} />
          </div>
          <div style={{ marginLeft: "2%", width: "89%" }}>
            <Input
              disableUnderline={true}
              multiline={true}
              rows={true}
              rowsMax={true}
              margin={'dense'}
              className={classes.input}
              defaultValue={'What are you thinking,Matt?'}
            />
          </div>
        </div>
        <div className={classes.fourButtons}>
          <div className={classes.eventdiv}>

            <div className={classes.divdir}>
              <div className={classes.imageicons}>
                <img width='15vh' height='15vh' src='images/Photos-new-icon.png' />
              </div>
              <div>
                <Button className={classes.button}>
                  <div className={classes.buttonText}>Photo</div>
                </Button>
              </div>
            </div>



            <div className={classes.divdir}>
              <div className={classes.imageicons}>
                <img width='15vh' height='15vh' src='images/free-youtube-icon-141-thumb.png' />
              </div>
              <div>
                <Button className={classes.button}>
                  <div className={classes.buttonText}>Video</div>
                </Button>
              </div>
            </div>


            <div className={classes.divdir}>
              <div className={classes.imageicons}>
                <img width='15vh' height='15vh' src='images/eventicon.png' />
              </div>
              <div>
                <Button className={classes.button}>
                  <div className={classes.buttonText}>Events</div>
                </Button>
              </div>
            </div>


            <div className={classes.divdir}>
              <div className={classes.imageicons}>
                <img width='15vh' height='15vh' src='images/posts.png' />
              </div>
              <div>
                <Button className={classes.button}>
                  <div className={classes.buttonText}>Posts</div>
                </Button>
              </div>
            </div>



          </div>
        </div>

      </div>
    </div>
  )
}

export default PostsAndEvents;