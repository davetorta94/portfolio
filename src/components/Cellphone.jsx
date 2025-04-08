import React from 'react';
import styled from 'styled-components';

export const Cellphone = ({project, spanish}) => {
  return (
    <StyledWrapper>

     {
      spanish ?
      <>
        <div className="container">
            <span className="top-border" />
     
            <video className='video' width="320" height="592" autoPlay muted loop >
                <source src={project.video} type="video/mp4"/>
            </video>
     
            <span className="right-border top" />
        </div>
        <div className='container-fluid project-description mt-4'>
          <div className='text-light font-weight-bold d-flex text-center p-2'><h4>{project.description}</h4></div>
        </div>
        <div className="container-fluid d-flex justify-content-center mb-4">
          <div className='button-style' >
            <a href={project.url} target="_blank" rel="noopener noreferrer">Visita la Web</a>
          </div>
        </div>
      </>
        :
        <>
        <div className="container">
            <span className="top-border" />
     
            <video className='video' width="320" height="592" autoPlay muted loop >
                <source src={project.video} type="video/mp4"/>
            </video>
     
            <span className="right-border top" />
        </div>
        <div className='container-fluid project-description mt-4'>
          <div className='text-light font-weight-bold d-flex text-center p-2'><h4>{project.engdescription}</h4></div>
        </div>
        <div className="container-fluid d-flex justify-content-center mb-4">
          <div className='button-style'>
            <a href={project.url} target="_blank" rel="noopener noreferrer">Go to Website</a>
          </div>
        </div>
        </>
}
    
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Container styles */
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px; /* Fixed height */
    width: 285px; /* Fixed width */
    border: 4px solid black; /* Border */
    border-radius: 1rem; /* Rounded corners */
    background-color: #0000; /* Light gray background */
    box-shadow: 5px 5px 2.5px 6px rgb(0, 0, 0); /* Shadow effect */
    z-index: 1;
  }

  .video {
    position: absolute;
    z-index: -1;
    display: flex;
    border-radius: 2.5rem;
  }

  .project-description{
    background-color: #301f4b;
    border: 1px solid #CCFF00;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  .button-style{
    background-color: #CCFF00;
    border: 1px solid #301f4b;
    border-radius: 10px;
    padding: 5px;
  }

  .button-style:hover{
    background-color: #301f4b;
    border: 1px solid #CCFF00;
    border-radius: 10px;
  }

  .button-style a{
    color: black;
    font-weight: bold;
  }

  .button-style a:hover{
    color: white;
    font-weight: bold;
  }

  /* Top border styles */
  .top-border {
    border: 1px solid black; /* Border */
    background-color: black; /* Black background */
    width: 80px; /* Width of the top border */
    height: 8px; /* Height of the top border */
    border-bottom-left-radius: 1rem; /* Rounded bottom corners */
    border-bottom-right-radius: 1rem; /* Rounded bottom corners */
  }

  /* Right border styles */
  .right-border {
    position: absolute;
    border: 4px solid black; /* Border */
    right: -8px; /* Positioning */
    border-radius: 0.375rem; /* Rounded corners */
  }

  /* Top right border */
  .right-border.top {
    top: 56px; /* Positioning */
    height: 28px; /* Height of the top right border */
  }`;

