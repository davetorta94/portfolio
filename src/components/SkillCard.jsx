import React from 'react';
import { skills } from '../data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const SkillCard = () => {
  return (
    <>
    <div className='d-flex row justify-content-center justify-content-sm-around mt-sm-0 mt-5'>
    {
      skills.map((skill) => (
      <div className="cardtest" key={skill.id}>

        
      
      <h2>{skill.name}</h2>
        <div className="align pb-2">
      <FontAwesomeIcon icon={skill.icon}/>
        </div>
      
      <h4 className='text-center'>
      {skill.description}
      </h4>
      
      <h4 className='text-center font-weight-bold'>{skill.experience}</h4>
        </div>
      ))
    }
    </div>
    </>
  );
}

