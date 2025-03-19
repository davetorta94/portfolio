import React from 'react';
import { skills } from '../data/data'

export const SkillCard = () => {
  return (
    <>
    <div className='d-flex row justify-content-around'>
    {
      skills.map((skill) => (
      <div className="cardtest" key={skill.id}>

        <div className="align">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
      
      <h2>{skill.name}</h2>
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

