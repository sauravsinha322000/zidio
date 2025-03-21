import React, { useState } from 'react';

function RoleBasedPermissions() {
  const [role, setRole] = useState('');

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="component-container">
      <h2>Role-Based Permissions</h2>
      <select value={role} onChange={handleChangeRole}>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Viewer">Viewer</option>
      </select>
      <p>Assigned role: {role}</p>
    </div>
  );
}

export default RoleBasedPermissions;
