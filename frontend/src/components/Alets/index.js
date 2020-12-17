import React from 'react';
import './index.css';
import { Toast } from 'react-bootstrap';

function Alerts({ message, callbackParent }) {
  return (
    <Toast className="toastStyle" animation="true" onClose={callbackParent}>
      <Toast.Header className="toastStyle">
        <strong className="mr-auto">Error</strong>
        <small>JSON</small>
      </Toast.Header>

      <div className="messageText">{message}</div>
    </Toast>
  );
}

export default Alerts;
