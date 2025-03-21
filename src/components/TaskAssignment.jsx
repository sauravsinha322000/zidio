import React, { useState } from 'react';

function TaskAssignment() {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement task assignment logic here
    alert(`Task "${task}" assigned with priority ${priority} and deadline ${deadline}`);
  };

  return (
    <div className="component-container">
      <h2>Task Assignment and Prioritization</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit">Assign Task</button>
      </form>
    </div>
  );
}

export default TaskAssignment;
