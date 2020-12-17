import React from 'react';
import './index.css';

function ButtonField({ callbackParent, callbackExecute }) {
  return (
    <div className="buttonsField">
      <button type="button" onClick={callbackExecute} className="buttonStyle">
        CONVERTER
      </button>
      <button type="button" onClick={callbackParent} className="buttonStyle">
        LIMPAR
      </button>
    </div>
  );
}

export default ButtonField;
