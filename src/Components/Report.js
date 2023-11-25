// Report.js
import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import MyReport from './MyReport';
import axios from 'axios'
function Report() {

  const [report , setReport] = useState([]);
  const [email , setEmail] = useState("");
  const [uid , setUid] = useState("");
  const handleReportCheck = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/getReport", {email : email , uid : uid}).then(res=>{
      setReport(res.data);
    })
  }
  return (
    <div className='p-10 w-fit m-auto'>
    <form onSubmit={(e)=>handleReportCheck(e)} class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
      Email
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      type="email"
      placeholder="Email"
    />
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="uniqueCode">
      Unique code
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="uniqueCode"
      type="text"
      placeholder="Unique Code"
    />
  </div>
  <div class="flex items-center justify-center">
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Check
    </button>
  </div>
</form>

    <PDFDownloadLink document={<MyDocument />} fileName="report.pdf" className='bg-black p-2 text-white rounded-xl flex w-fit'>
      {({ loading }) =>
        loading ? <button>Loading...</button> : <button className='flex gap-2'>Download PDF<img src={require("./Assets/download.png")} className='w-7 h-7'></img></button>
    }
    </PDFDownloadLink>
    </div>
  );
}

export default Report;
