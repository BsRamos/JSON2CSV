import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/index';
import InputField from '../components/InputField/index';
import ButtonField from '../components/ButtonsField/index';
import Alerts from '../components/Alets';
import TableCSV from '../components/TableCSV';
import Footer from '../components/Footer';
import api from '../services/api';
import Header from '../components/Header';
import './App.css';

function App() {
  const [clean, setClean] = useState(true);
  const [json, setJson] = useState('');
  const [csv, setCsv] = useState('');
  const [execute, setExecute] = useState(false);
  const [message, setMessage] = useState(['', 0]);
  const [makeTable, setmakeTable] = useState(false);

  function resetErrorMessage() {
    setTimeout(() => {
      setMessage(['', 0]);
    }, 4000);
  }
  function tryConvert() {
    if (!json) {
      setMessage(['Empty JSON field!', 1]);
      resetErrorMessage();
    } else {
      api
        .post('/', {
          json,
        })
        .then(response => {
          setCsv(response.data);
        })
        .catch(() => {
          setMessage(['Wrong JSON format!', 2]);
          resetErrorMessage();
        });
    }
    setExecute(false);
  }
  function cleanFields() {
    setCsv('');
    setJson('');
    setClean(true);
  }
  function handleBtnClean() {
    if (csv === '' && json === '') {
      setMessage(['No trash here!', 4]);
      resetErrorMessage();
    } else {
      setClean(false);
    }
  }
  function handleBtnMakeTable() {
    if (csv !== '') {
      setmakeTable(true);
    } else {
      setMessage(['Please, first convert JSON to CSV!', 3]);
      setmakeTable(false);
      resetErrorMessage();
    }
  }

  useEffect(() => {
    if (execute) {
      tryConvert();
    }
    if (!clean) {
      cleanFields();
    }
  }, [execute, clean, makeTable]);

  return (
    <div className="App">
      <NavBar />
      {makeTable && (
        <>
          <div className="alertPosition">
            <Header
              message="CSV Table"
              callbackParent={() => {
                setmakeTable(false);
                setCsv('');
                setJson('');
              }}
            />
          </div>
          <TableCSV csvText={csv} />
        </>
      )}
      {!makeTable && (
        <>
          <div className="alertPosition">
            {message[1] !== 0 && (
              <Alerts
                message={message[0]}
                callbackParent={() => setMessage(['', 0])}
              />
            )}
          </div>
          <div className="body">
            {clean && (
              <>
                <InputField
                  fieldName="JSON"
                  textIndication="Digite o texto JSON no campo acima"
                  callbackParent={value => setJson(value)}
                />
                <ButtonField
                  callbackParent={() => {
                    handleBtnClean();
                  }}
                  callbackExecute={() => setExecute(true)}
                />
                <InputField
                  fieldName="CSV"
                  textIndication="Texto convertido para CSV"
                  textcsv={csv}
                  callbackParent={() => {
                    handleBtnMakeTable();
                  }}
                />
              </>
            )}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
