import React, {Component} from "react"
import ImageGallery from "react-image-gallery";





class MyGallery extends Component {
  state = {
    showIndex: false,
    showBullets: true,
    infinite: true,
    showThumbnails: true,
    showFullscreenButton: false,
    showGalleryFullscreenButton: false,
    showPlayButton: true,
    showGalleryPlayButton: true,
    showNav: true,
    isRTL: false,
    slideDuration: 800,
    slideInterval: 10000,
    slideOnThumbnailOver: false,
    thumbnailPosition: 'bottom',
    showVideo: {},
  };
   images = [
    {
      
      thumbnail: process.env.PUBLIC_URL + 'chhotaBheem.jpg',
      embedUrl: process.env.PUBLIC_URL + 'chhotaBhim.mp4',
      renderItem: this._renderVideo.bind(this)
    },
    {
      
      thumbnail: process.env.PUBLIC_URL + 'spiderman.jpg',
      embedUrl: process.env.PUBLIC_URL + 'Spiderman.mp4',
      renderItem: this._renderVideo.bind(this)
    },
    {
      
      thumbnail: process.env.PUBLIC_URL + 'supermanandbatman.jpg',
      embedUrl: process.env.PUBLIC_URL + 'thor.mp4',
      renderItem: this._renderVideo.bind(this)
    },
  ];

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({showGalleryPlayButton: false});
      }

      if (this.state.showFullscreenButton) {
        this.setState({showGalleryFullscreenButton: false});
      }
    }
  }

  _renderVideo(item) {
    return (
      <div className='image-gallery-image'>
        {
          // this.state.showVideo[item.embedUrl] ?
            <div className='video-wrapper'>
                {/* <a
                  className='close-video'
                  onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                >
                </a> */}
                {/* <iframe
                  width='100%'
                  height='100%'
                  src={item.embedUrl}
                  frameBorder='0'
                  allowFullScreen
                >
                </iframe> */}

                <video controls>
				         <source  src={item.embedUrl} type="video/mp4"/>
				       </video>
              </div>
          //:
            // <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
            //   <div className='play-button'></div>
            //   <img src={item.original}/>
            //   {
            //     item.description &&
            //       <span
            //         className='image-gallery-description'
            //         style={{right: '0', left: 'initial'}}
            //       >
            //         {item.description}
            //       </span>
            //   }
            // </a>
        }
      </div>
    );
  }

  componentDidMount(){
    this.playCurrentVideo();
  }

  _onSlide=  (data) => {
    // console.log("on slide -- ", data);
    this.playCurrentVideo();
  }

  playCurrentVideo(){
    let videosList = document.querySelectorAll(".image-gallery-image video")
    videosList.forEach(videoElement => {
      videoElement.pause()
    })
    videosList = document.querySelectorAll(".center video");
    videosList.forEach(videoEl => {
      videoEl.play()
    })
  }

  

  render() {
    return <ImageGallery items={this.images} 
      {...this.state} 
      onSlide={this._onSlide}
    />;
  }
};

export default MyGallery;