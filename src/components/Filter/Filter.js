import React from 'react';

export function Filter({ name, onChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" value={name} onChange={onChange}></input>
    </label>
  );
}
