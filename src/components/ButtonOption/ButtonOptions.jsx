import React from 'react';

const ButtonOptions = ({ onClick }) => {
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-secondary active" onClick={() => onClick('bar')}>
        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Bar Chart
      </label>
      <label className="btn btn-secondary" onClick={() => onClick('pie')}>
        <input type="radio" name="options" id="option2" autoComplete="off" /> Pie Graph
      </label>
    </div>
  );
};

export default ButtonOptions;
