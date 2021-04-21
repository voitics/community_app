import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const useStyles = makeStyles((theme) => ({

  mainroot: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10, backgroundColor: '#fff'
  },

  subroot: {
    backgroundColor: '#fff', width: 'auto', height: "auto", borderRadius: "1vh", border: '1px solid #aaa69d'
  },
  img: {
    borderRadius: "1vh",
    filter: 'blur(1px)',
    width:'16.5vh',
    height:'16.5vh'
  },
  profile: {
    margin: 100
  },
  name: {
    color: '#fff', position: 'absolute', top: '50%', fontSize: 12, fontWeight: '600', fontFamiliy: 'san-serif',
  },
  namediv: {
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  }

}));

const ProfileSlick = () => {

  const classes = useStyles();

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    accessibility: true,
    arrows: true,
    fade: false,
    focusOnSelect: true,
    pauseOnFocus: true,
    adaptiveHeight:false

  };
  return (
    <div style={{ backgroundColor: '#fff', width: "98%" }}>

      <Slider {...settings}>
        <div style={{}}>
          <img src='https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg' className={classes.img} />
          <div className={classes.namediv}>
            <div className={classes.name} >Hello</div>
          </div>
        </div>
        <div  >
          <img src='https://cdn.luxe.digital/media/2020/05/18164526/best-short-haircuts-men-hairstyles-luxe-digital.jpg' width='100' height='100' className={classes.img} />
          <div className={classes.namediv}>
            <div className={classes.name} >Hello</div>
          </div>
        </div>
        <div >
          <img src='https://theupcoming-flmedialtd.netdna-ssl.com/wp-content/uploads/2019/07/model-man-fashion-pexels-generic-men-elegant-fashionable-fine-looking-2332062.jpg' width='100' height='100' className={classes.img} />
          <div className={classes.namediv}>
            <div className={classes.name} >Hello</div>
          </div>
        </div>
        <div >
          <img src='https://d33ljpvc0tflz5.cloudfront.net/dims3/MMH/7a11ff0/2147483647/strip/true/crop/2168x1215+0+85/resize/728x408!/quality/75/?url=https%3A%2F%2Fd26ua9paks4zq.cloudfront.net%2F8d%2Fbf%2F873c36de4af1b67e6eeb868c6559%2Fimage-getty-476804799.jpg' width='100' height='100' className={classes.img} />
          <div className={classes.namediv}>
            <div className={classes.name} >Hello</div>
          </div>
        </div>
        <div >
          <img src='https://www.superdrug.com/blog/wp-content/uploads/2018/06/smiling-thumbnail.jpg' width='100' height='100' className={classes.img} />
          <div className={classes.namediv}>
            <div className={classes.name} >Hello</div>
          </div>
        </div>
        <div >
          <img src='https://i.pinimg.com/originals/5b/ad/df/5baddff9570f0052d667267f2cfcc7eb.jpg' width='100' height='100' className={classes.img} />
          <div className={classes.namediv}>
            <div className={classes.name} >Hello</div>
          </div>
        </div>

        <div>
          <img src='https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg' width='100' height='100' className={classes.img} />
          <div className={classes.namediv}>
            <div className={classes.name} >Hello</div>
          </div>
        </div>
        <div  >
          <img src='https://cdn.luxe.digital/media/2020/05/18164526/best-short-haircuts-men-hairstyles-luxe-digital.jpg' width='100' height='100' className={classes.img} />
          <div className={classes.namediv}>
            <div className={classes.name} >Hello</div>
          </div>
        </div>
        <div >
          <img src='https://theupcoming-flmedialtd.netdna-ssl.com/wp-content/uploads/2019/07/model-man-fashion-pexels-generic-men-elegant-fashionable-fine-looking-2332062.jpg' width='100' height='100' className={classes.img} />
          <div className={classes.namediv}>
            <div className={classes.name} >Hello</div>
          </div>
        </div>
        <div >
          <img src='https://d33ljpvc0tflz5.cloudfront.net/dims3/MMH/7a11ff0/2147483647/strip/true/crop/2168x1215+0+85/resize/728x408!/quality/75/?url=https%3A%2F%2Fd26ua9paks4zq.cloudfront.net%2F8d%2Fbf%2F873c36de4af1b67e6eeb868c6559%2Fimage-getty-476804799.jpg' width='100' height='100' className={classes.img} />
          <div className={classes.namediv}>
            <div className={classes.name} >Hello</div>
          </div>
        </div>
        <div >
          <img src='https://www.superdrug.com/blog/wp-content/uploads/2018/06/smiling-thumbnail.jpg' width='100' height='100' className={classes.img} />
          <div className={classes.namediv}>
            <div className={classes.name} >Hello</div>
          </div>
        </div>
        <div >
          <img src='https://i.pinimg.com/originals/5b/ad/df/5baddff9570f0052d667267f2cfcc7eb.jpg' width='100' height='100' className={classes.img} />
          <div className={classes.namediv}>
            <div className={classes.name} >Hello</div>
          </div>
        </div>

      </Slider>
    </div>
  )
}

export default ProfileSlick;