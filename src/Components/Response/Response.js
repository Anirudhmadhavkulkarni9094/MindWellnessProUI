import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { PDFDownloadLink } from '@react-pdf/renderer';
import DownloadResponse from './DownloadResponse';

function Response() {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        axios.get("http://localhost:3001/UserResponse")
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    
        if (confirmDelete) {
            axios.delete(`http://localhost:3001/UserResponse/${id}`)
                .then(() => {
                    setData(prevData => prevData.filter(item => item._id !== id));
                })
                .catch(error => {
                    console.error('Error deleting data:', error);
                });
        }
    };

    

    return (
        <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">User Responses</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Delete</th>
                        <th className='border border-gray-300 px-4 py-2'>View</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key={user._id} className="border border-gray-300">
                            <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button 
                                    onClick={() => handleDelete(user._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                                >
                                    Delete
                                </button>
                            </td>
                            <td className='border border-gray-300 px-4 py-2 text-center'>
                            <PDFDownloadLink document={<DownloadResponse selectedUser= {user} />} fileName={`${user.name}.pdf`} className='bg-black p-2 text-white rounded-xl flex w-fit'>
                                {({ loading }) =>
                                loading ? (
                                    <button>Loading...</button>
                                ) : (
                                    <button className='flex gap-2 text-sm items-center px-2'>
                                    Download PDF
                                    <img src={require('../Assets/download.png')} className='w-5 h-5' alt='Download Icon' />
                                    </button>
                                )
                                }
                            </PDFDownloadLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Response;
