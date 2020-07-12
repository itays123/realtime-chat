import React, { useState } from 'react';

const NameForm = ({ updateName }) => {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    updateName(name.toLowerCase());
  };

  return (
    <form className="name input single-field" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={e => setName(e.target.value)}
        placeholder="enter your name"
      />
      <button disabled={!name || name.trim() === ''}>
        <i className="material-icons">arrow_forward</i>
      </button>
    </form>
  );
};

export default NameForm;
