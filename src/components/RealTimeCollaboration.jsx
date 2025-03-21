import React, { useState } from 'react';

function RealTimeCollaboration() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Add logic to send message to team in real-time
    alert(`Message Sent: ${message}`);
  };

  return (
    <div className="component-container">
      <h2>Real-Time Collaboration</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
}

export default RealTimeCollaboration;
