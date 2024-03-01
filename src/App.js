// App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileList from './FileList';
import DownloadButton from './DownloadButton'; // Assurez-vous que ce chemin est correct




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Choisissez un document pour le télécharger :</p>
        <FileList /> {/* Utilisation du composant FileList qui inclura DownloadButton */}
      </header>
    </div>
  );
}

export default App;
