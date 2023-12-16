import React, { useState } from 'react'
import {Link} from 'react-router-dom'
function FORUM_HOME_PAGE() {
  // Sample channel data for different mental health conditions
  const [filterName , setFilterName] = useState("");
  const channels = [
    { id: 1, name: 'Anxiety', description: 'Discussions about anxiety and coping mechanisms.' , category : "ANX" },
    { id: 2, name: 'Depression', description: 'Support and advice for dealing with depression.' , category : "DEP"},
    { id: 3, name: 'PTSD', description: 'Share experiences and seek support for PTSD.' , category : "PTSD"},
    { id: 4, name: 'Bipolar Disorder', description: 'Understanding and managing bipolar disorder.' , category : "BIP"},
    { id: 5, name: 'Eating Disorders', description: 'Support and recovery for eating disorders.', category : "EDIS" },
    { id: 6, name: 'OCD', description: 'Resources and strategies for managing OCD.', category : "OCD" },
    { id: 7, name: 'Substance Abuse', description: 'Recovery and discussions on substance abuse.', category : "SUBAB" },
    { id: 8, name: 'Schizophrenia', description: 'Support and understanding for schizophrenia.', category : "SCH" },
    { id: 9, name: 'ADHD', description: 'Managing ADHD and improving focus.', category : "ADHD" },
    { id: 10, name: 'Self-Harm Recovery', description: 'Support for individuals recovering from self-harm.' , category : "SHR"},
    { id: 11, name: 'Grief and Loss', description: 'Coping strategies for dealing with grief and loss.' , category : "GAL"},
    { id: 12, name: 'Autism Spectrum', description: 'Community support and resources for autism.' , category : "AUT"},
  ];
  
  let FilteredChannel = channels.filter(channel => {return channel.name.includes(filterName)});

  return (
    <>
    
    <div className="bg-gray-100 min-h-screen p-5 py-8">
      <div className="container mx-auto">
        <div className='flex justify-around'>
        <h1 className="text-3xl font-bold mb-6">Welcome to the Mental Health Forum</h1>
        <input onChange={(e)=>{setFilterName(e.target.value)}} placeholder='Search here' className='px-5 py-2 shadow-2xl border border-1'></input>
        </div>
        <p className="text-lg text-gray-600 mb-8">
          This forum aims to provide a safe space for discussing various mental health conditions.
          Explore and join channels below to connect with others facing similar challenges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          { FilteredChannel.length >0  ? FilteredChannel.map((channel) => (
            <div
            key={channel.id}
            className="bg-white rounded-lg p-6 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2">{channel.name}</h2>
              <p className="text-gray-600 mb-4">{channel.description}</p>
              <Link className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none" to={`/Forum/channel`} onClick={()=>localStorage.setItem("category" , channel.category)}>
                Open forum
              </Link>
            </div>
          )) : channels.map((channel) => (
            <div
            key={channel.id}
            className="bg-white rounded-lg p-6 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2">{channel.name}</h2>
              <p className="text-gray-600 mb-4">{channel.description}</p>
              <Link className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none" to={`/Forum/channel`} onClick={()=>localStorage.setItem("category" , channel.category)}>
                Open forum
              </Link>
            </div>
          ))  
          }
        </div>
      </div>
    </div>
          </>
  );
};



export default FORUM_HOME_PAGE