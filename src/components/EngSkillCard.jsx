import React from 'react';
import { engskills } from '../data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const EngSkillCard = () => {
  return (
    <>
    <div className='d-flex row justify-content-around'>
    {
      engskills.map((engskill) => (
      <div className="cardtest" key={engskill.id}>
        
        
      
      <h2>{engskill.name}</h2>
          <div className="align pb-2">
            <FontAwesomeIcon icon={ engskill.icon }/>
          </div>

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