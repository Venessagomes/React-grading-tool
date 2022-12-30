import React from 'react';
import './GradeFilter.css';

const GradeFilter = () => {
  return (
    <div className='grade-filter'>
      <div className='grade-filter__control'>
        <label>Filter by year</label>
        <select>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2019'>2018</option>
        </select>
      </div>
    </div>
  );
};

export default GradeFilter;