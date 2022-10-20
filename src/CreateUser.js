import React from 'react';

function CreateUser({ username, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
    
      
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;