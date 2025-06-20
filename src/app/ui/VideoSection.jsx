import React, { useState } from 'react';
import styled from 'styled-components';

const VideoSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const youtubeUrl = "https://www.youtube.com/embed/EzdY-bMmZu0?autoplay=1&mute=0&enablejsapi=1&rel=0";

  return (
    <Body>
      <VideoSectionContainer>
        <VideoContainer 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Thumbnail image - shows when not hovered */}
          <VideoThumbnail 
            src="/images/about_img_3.jpeg" 
            alt="Video thumbnail" 
            $isVisible={!isHovered}
          />
          
          {/* YouTube iframe - shows when hovered */}
          {isHovered && (
            <YouTubeIframe
              src={youtubeUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </VideoContainer>
      </VideoSectionContainer>
    </Body>
  );
};

// Styled Components
const Body = styled.div`
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const VideoSectionContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(27, 255, 243, 0.1),
              0 0 30px rgba(174, 255, 174, 0.2),
              0 0 60px rgba(27, 255, 243, 0.15);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 150%;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(27, 255, 243, 0.2) 0%,
      rgba(174, 255, 174, 0) 70%,
      transparent 100%
    );
    border-radius: 50%;
    z-index: -1;
    opacity: 0.8;
    transition: all 0.5s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 0 1px rgba(27, 255, 243, 0.2),
                0 0 40px rgba(174, 255, 174, 0.3),
                0 0 80px rgba(27, 255, 243, 0.25);

    &::before {
      opacity: 1;
      width: 180%;
      height: 180%;
    }
  }

  @media (max-width: 768px) {
    height: 400px;

    &:hover {
      transform: none;
    }

    &::before {
      width: 200%;
      height: 200%;
    }
  }
`;

const VideoThumbnail = styled.img.attrs(props => ({
  $isVisible: props.$isVisible || false,
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  border-radius: 8px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

const YouTubeIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: 2;
`;

export default VideoSection;