import React, { useRef, useState } from 'react';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div style={styles.videoSection}>
      <div 
        style={styles.videoContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Thumbnail image - only shows when not hovered */}
        <img
          src="/images/about_img_4.jpeg"
          alt="Video thumbnail"
          style={{
            ...styles.videoThumbnail,
            opacity: isHovered ? 0 : 1
          }}
        />
        
        {/* Local video element - only shows when hovered */}
        <video
          ref={videoRef}
          style={{
            ...styles.embeddedVideo,
            opacity: isHovered ? 1 : 0
          }}
          muted
          playsInline
        >
          <source src="/video/video-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Down arrow with gradient background and dark icon */}
        <div style={{
          ...styles.downArrow,
          background: 'linear-gradient(90deg, #1bfff3, #aeffae)'
        }}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 5V19M12 19L19 12M12 19L5 12" 
              stroke="#181818"  
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

// All styles remain the same
const styles = {
  videoSection: {
    position: 'relative',
    width: '100%',
    maxWidth: '1200px',
    margin: '50px auto',
    padding: '20px'
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: '500px',
    backgroundColor: '#000',
    borderRadius: '8px',
    overflow: 'visible',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
  },
  videoThumbnail: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
    zIndex: 1,
    borderRadius: '8px'
  },
  embeddedVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    border: 'none',
    transition: 'opacity 0.3s ease',
    zIndex: 2,
    borderRadius: '8px'
  },
  downArrow: {
    position: 'absolute',
    bottom: '-30px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: 3,
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease'
  },
  '@media (max-width: 768px)': {
    videoContainer: {
      height: '400px'
    },
    downArrow: {
      width: '50px',
      height: '50px',
      bottom: '-25px'
    }
  }
};

export default VideoSection;