// DownloadButton.js
import React from 'react';
import styles from './download.module.css'; // Assurez-vous que ce chemin est correct

const DownloadButton = ({ fileName }) => {
   
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + `/data/${fileName}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
    <button className={styles.downloadButton} onClick={handleDownload}>
      Télécharger {fileName}
    </button>
  );

};

export default DownloadButton;

