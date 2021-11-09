import React from 'react';
import { Tag } from 'utils/tools';

const Matches = () => {
  return (
    <div className='home_matches_wrapper'>
      <div className='container'>
        <Tag
          background='#0e1731'
          color='#ffffff'
          size='50px'
          linkTo='/the_matches'
        >
          Matches
        </Tag>
        BLOCKS
        <Tag color='#0e1731' size='22px' link={true} linkTo='/the_team'>
          Matches
        </Tag>
      </div>
    </div>
  );
};

export default Matches;
