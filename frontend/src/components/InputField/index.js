import React from 'react';
import './index.css';

function InputField({ fieldName, textIndication, callbackParent, textcsv }) {
  return (
    <div className="inputFieldStyle">
      <div className="textStyle">{fieldName}</div>
      {fieldName === 'JSON' && (
        <textarea
          className="inputStyle"
          type="text"
          id={fieldName}
          onChange={e => {
            return callbackParent(e.target.value);
          }}
        />
      )}
      {fieldName === 'CSV' && (
        <textarea
          className="inputStyle"
          type="text"
          value={textcsv}
          id={fieldName}
          disabled
        />
      )}
      <div className="textInfoStyle">{textIndication}</div>
      {fieldName === 'CSV' && (
        <button type="button" className="btnTable" onClick={callbackParent}>
          EXIBIR EM TABELA
        </button>
      )}
    </div>
  );
}

export default InputField;
