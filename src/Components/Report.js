import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import axios from 'axios';

function Report() {
  const [report, setReport] = useState();
  const [email, setEmail] = useState('');
  const [uid, setUid] = useState('');
  const [reportLoaded, setReportLoaded] = useState(false);
  const [error, setError] = useState('');
  const [toast , setToast] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUidChange = (e) => {
    setUid(e.target.value);
  };

  const handleReportCheck = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/getReport', { uniqueId: uid, email: email });

      if (response.data.data === 'Report not found') {
        setReportLoaded(false);
        setToast(false)
        setError('Report cannot be found. Please check the credentials or try again later.');
      } else {
        setReport(response.data.data);
        setReportLoaded(true);
        setToast(true);
        setTimeout(() => {
            setToast(false);
          }, 5000);
          
        setError('');
        
      }
    } catch (error) {
      setReportLoaded(false);
      setToast(false)
      setError('*Report cannot be found. Please check the credentials or try again later.');
    }
  };

  return (
    <div className='p-10  m-auto'>
        

{toast && <div id="toast-default" class=" absolute right-10 top-10 z-50 flex items-center w-fit max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"/>
        </svg>
        <span class="sr-only">Fire icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Download Report now!</div>
    
</div>}




      <form onSubmit={handleReportCheck} className='w-fit mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='uniqueCode' className='block text-gray-700 text-sm font-bold mb-2'>
            Unique code
          </label>
          <input
            type='text'
            id='uniqueCode'
            placeholder='Unique Code'
            value={uid}
            onChange={handleUidChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        
          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Check
            </button>
          </div>
        
      </form>

      {error && <p className='text-red-500 text-center'>{error}</p>} {/* Display error message */}
      {reportLoaded && <PDFDownloadLink
              document={<MyDocument data={report} />}
              fileName={`${report.uniqueId}.pdf`}
              className='bg-black p-2 text-white rounded-xl flex w-fit text-center m-auto'
            >
              {({ loading }) => (loading ? <button>Loading...</button> : <DownloadButton />)}
            </PDFDownloadLink>}
    </div>
  );
}

const DownloadButton = () => (
  <button className='flex gap-2'>
    Download PDF
    <img src={require('./Assets/download.png')} className='w-7 h-7' alt='Download Icon' />
  </button>
);

export default Report;
