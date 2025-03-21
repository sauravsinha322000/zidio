import React from 'react';
import './styles/main.css';
import TaskAssignment from './components/TaskAssignment';
import RoleBasedPermissions from './components/RoleBasedPermissions';
import DeadlineTracking from './components/DeadlineTracking';
import RealTimeCollaboration from './components/RealTimeCollaboration';
import ProgressReporting from './components/ProgressReporting';
import SecureAuthentication from './components/SecureAuthentication';

function App() {
  return (
    <div className="app">
      <SecureAuthentication />
      <TaskAssignment />
      <RoleBasedPermissions />
      <DeadlineTracking />
      <RealTimeCollaboration />
      <ProgressReporting />
    </div>
  );
}

export default App;
