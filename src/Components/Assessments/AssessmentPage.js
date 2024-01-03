import React, { useState } from "react";
import TestEntryForm from "./TestInitializer/TestEntryForm";

function AssessmentPage() {
  const [showInfo, setShowInfo] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [Category , SetCategory] = useState("anxiety disorder");

  const startTestHandle = () => {
    if (name && email && age) {
      localStorage.setItem(
        "User",
        JSON.stringify({ name: name, email: email, age: age , Category : Category, id : Category == "General" ? 1 : 0})
      );
      localStorage.setItem("UserLogged", true);
      console.log(localStorage.getItem("User"))
      window.location.href = '/Assessment/Assesment-Chatroom';
    } else {
      alert('Please fill in all the fields');
    }
  };

  return (
    <div className="text-center p-10 m-10">
      
      <h1 className="text-3xl font-bold">Sentiment Analysis Evaluation</h1>
      <p className="text-lg my-4">
        Welcome to the Sentiment Analysis Evaluation. In this assessment, we
        will analyze your ability to determine the sentiments expressed in
        various text samples.
      </p>
      <div>
        <button
          className="bg-black hover:bg-slate-700 px-3 py-2 text-white rounded-xl"
          onClick={() => setShowInfo(true)}
        >
          Start the Evaluation &rarr;
        </button>
      </div>
      {showInfo && (
        <TestEntryForm info = {{setName , setAge , setEmail , setShowInfo , startTestHandle , SetCategory , Category , age} } />
      )}
      <p className="text-sm text-gray-600">
        Carefully review each text sample and identify whether it conveys
        positive, negative, or neutral sentiments. Your skills in sentiment
        analysis will be put to the test!
      </p>
    </div>
  );
}

export default AssessmentPage;
