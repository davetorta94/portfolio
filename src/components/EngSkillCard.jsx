import React from 'react';
import { engskills } from '../data/data'

export const EngSkillCard = () => {
  return (
    <>
    <div className='d-flex row justify-content-around'>
    {
      engskills.map((engskill) => (
      <div className="cardtest" key={engskill.id}>
        
        <div className="align">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
      
      <h2>{engskill.name}</h2>
      <h4 className='text-center'>
      {engskill.description}
      </h4>
      
      <h4 className='text-center font-weight-bold'>{engskill.experience}</h4>
        </div>
      ))
    }
    </div>
    </>
  );
}