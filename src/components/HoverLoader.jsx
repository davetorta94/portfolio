import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const HoverLoader = ({icon}) => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="box">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 94 94" className="svg">
              <FontAwesomeIcon icon={ icon }/>
            </svg>
          </div>
        </div>
        
        
        
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    --size: 125px;
    --duration: 2s;
    --logo-color: grey;
    --background: linear-gradient(
      0deg,
      rgba(50, 50, 50, 0.2) 0%,
      rgba(100, 100, 100, 0.2) 100%
    );
    height: var(--size);
    aspect-ratio: 1;
    position: relative;
  }

  .loader .box {
    position: absolute;
    background: rgba(100, 100, 100, 0.15);
    background: var(--background);
    border-radius: 50%;
    border-top: 1px solid rgba(100, 100, 100, 1);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    backdrop-filter: blur(5px);
    animation: ripple var(--duration) infinite ease-in-out;
  }

  .loader .box:nth-child(1) {
    inset: 40%;
    z-index: 1;
  }

  .loader .box:nth-child(2) {
    inset: 30%;
    z-index: 2;
    border-color: rgba(100, 100, 100, 0.8);
    animation-delay: 0.2s;
  }

  
  .loader .logo {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    padding: 5%;
  }

  .loader .logo svg {
    fill: var(--logo-color);
    width: 100%;
    animation: color-change var(--duration) infinite ease-in-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    }
    50% {
      transform: scale(1.3);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 20px -0px;
    }
    100% {
      transform: scale(1);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    }
  }

  @keyframes color-change {
    0% {
      fill: var(--logo-color);
    }
    50% {
      fill: white;
    }
    100% {
      fill: var(--logo-color);
    }
  }`;

