import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ProgressReporting() {
  const [taskCompletion, setTaskCompletion] = useState(60); // Initial task completion percentage
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  // Sample data for the chart, this will be dynamically updated
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Months
    datasets: [
      {
        label: 'Task Completion (%)',
        data: [45, 55, taskCompletion, 65, 70, 80], // Dynamically updating task completion
        fill: false,
        borderColor: '#4CAF50',
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Task Completion Over Time',
      },
    },
  };

  // Handle date range change
  const handleDateRangeChange = (e) => {
    setDateRange({
      ...dateRange,
      [e.target.name]: e.target.value,
    });
  };

  // Handle task completion change
  const handleTaskCompletionChange = (e) => {
    const newTaskCompletion = Math.min(Math.max(e.target.value, 0), 100); // Ensure the value stays between 0 and 100
    setTaskCompletion(newTaskCompletion);
  };

  return (
    <div className="component-container">
      <h2>Progress Reporting</h2>
      <p>Generate reports on task completion and performance here.</p>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${taskCompletion}%` }}></div>
      </div>
      <p>Task Completion: {taskCompletion}%</p>

      {/* Task Completion Input */}
      <div className="task-completion-input">
        <label>Set Task Completion: </label>
        <input
          type="number"
          value={taskCompletion}
          onChange={handleTaskCompletionChange}
          min="0"
          max="100"
        />
      </div>

      {/* Date Range Picker */}
      <div className="date-range-picker">
        <input
          type="date"
          name="start"
          value={dateRange.start}
          onChange={handleDateRangeChange}
        />
        <span> to </span>
        <input
          type="date"
          name="end"
          value={dateRange.end}
          onChange={handleDateRangeChange}
        />
      </div>

      {/* Chart/Graph */}
      <div className="chart-container">
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Generate Report Button */}
      <button className="generate-report-btn">Generate Report</button>
    </div>
  );
}

export default ProgressReporting;
