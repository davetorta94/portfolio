import styled from 'styled-components';
import { skills } from '../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loader } from './Loader';
import { HoverLoader } from './HoverLoader';


export const PresentationCard = () => {
  
  return (
    <StyledWrapper>

      <div className='d-flex justify-content-around row'>
        

      {
        skills.map((skill) => (
          
          
          <div className="card" key={skill.id}>
        <div className="content">
          <div className="back">
            <div className="back-content">
              <strong className='text-color font-weight-bolder'>{skill.name}</strong>
              <HoverLoader icon={skill.icon} />
            </div>
          </div>
          <div className="front">
            <div className="img">
              
            </div>
            <div className="front-content">
              
              <div className="description">
                
                <div className="title">
                  <p className="title text-center">
                    <strong>{skill.description}</strong>
                  </p>
                  
                </div>
                <p className="title text-center">
                  {skill.experience}
                </p>
                <Loader />
              </div>
            </div>
          </div>
        </div>
      </div>
      ))
    }
    </div>
   
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    width: 190px;
    height: 254px;
    margin: 5px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .front, .back {
    background-color: #301f4b;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #CCFF00, #301f4b, #301f4b, #CCFF00, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .text-color{
    color: #CCFF00;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #301f4b;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    font-size: 2rem;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #301f4b;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #301f4b;
    width: 100%;
    padding: 10px;
    background-color: #301f4b;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 1.2rem;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .title p {
    width: 100%;
  }

  .card-footer {
    color:rgb(255, 255, 255);
    margin-top: 5px;
    font-size: 1rem;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #301f4b;
    position: relative;
    filter: blur(5px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #301f4b;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #301f4b;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }`;


