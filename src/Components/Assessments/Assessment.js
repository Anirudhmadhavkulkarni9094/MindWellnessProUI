import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Assessment() {
  const [Questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [responses, setResponses] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [Logged, setLogged] = useState(false);
  const [disclaimer, setDisclaimer] = useState(true);
  const [counter, setCounter] = useState(5);
  const [category, setCategory] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [disabled , setDisabled] = useState(false);
const [id , setId] = useState(0);

  // const disable = ()=>{
  //   setTimeout(()=>{
  //     setDisabled(false);
  //   },1000)
  // }

  useEffect(() => {
    const userData = localStorage.getItem("User");
    if (userData) {
      const { name, email, age, Category , id } = JSON.parse(userData);
      setName(name);
      setEmail(email);
      setAge(age);
      setCategory(Category);
      setId(id);
      const auth = localStorage.getItem("UserLogged");
      setLogged(auth);
      // console.log({name , email , age , category})
    }
    axios
      .get("https://mindwellnesspro.onrender.com/questions")
      .then((res) => {
        setQuestions(res.data || []);
        // console.log(res.data);
        setFilteredQuestions(
          Questions.filter((que) => {
            return que.Category === category;
          })
        );
      })
      .catch((err) => {
        console.error("Error fetching questions:", err);
        setQuestions([]);
      });

    const timeoutId = setTimeout(() => {
      setDisclaimer(false);
    }, 5000);

    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [Questions ,category]);

  const handleResponseChange = (index, response) => {
    const newResponses = [...responses];
    newResponses[index] = { ...newResponses[index], response };
    setResponses(newResponses);
  };

  const handleTextInput = (index, text) => {
    const newResponses = [...responses];
    newResponses[index] = { ...newResponses[index], text };
    setResponses(newResponses);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    // disable(); 
    const formData = {
      responses: responses,
      name: name,
      email: email,
      age: age,
      questions: Questions,
      category : category,
      id : id
    };

    axios
      .post("https://mindwellnesspro.onrender.com/UserResponse", formData)
      .then((res) => {
        console.log("Data added successfully");
        console.log(formData)
       
        alert("Data added successfully");
        window.location.href = '/Report';
      })
      .catch((err) => {
        alert("please submit your response again");
        setDisabled(false)
        console.log("Error adding data:", err);
      });
    console.log(formData);
  };

  let i = 1;


  return (
    <div>
      <h1 className="text-3xl font-mono px-10">
        Hello{" "}
        <span className="text-blue-600">
          {name}! lets begine your test on "{category}!"
        </span>
      </h1>
      {disclaimer && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white p-7 z-50 shadow-2xl">
          <div className="relative">
            <button
              onClick={() => setDisclaimer(!disclaimer)}
              className="text-white bg-red-400 p-2 absolute -top-10 -left-10 rounded-full h-10 w-10"
            >
              X
            </button>
            <span className="absolute flex right-0">({counter}s)</span>
            The sentiment analysis provided on this website is intended for
            informational purposes only. The analysis is based on algorithms and
            automated processes that interpret text and derive sentiments from
            it. While we strive for accuracy, please note that the results may
            not always accurately represent the full context or intended meaning
            of the text.
            {/* ... (rest of your disclaimer text) ... */}
          </div>
        </div>
      )}
      {Logged ? (
        <form onSubmit={(e) => formSubmit(e)} className="m-auto px-10">
          {filteredQuestions.map((question, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedQuestion(index)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <h1
                className={`text-xl my-5 font-semibold ${
                  selectedQuestion === index ? "text-blue-500" : ""
                }`}
              >
                Q-{i++} {question.Question} <span className="text-red-600">*</span>
              </h1>
              {selectedQuestion === index && (
                <div className="my-3">
                  <label
                    htmlFor={`feelings-${index}`}
                    className="block font-semibold mb-2"
                  >
                    Please Describe your feelings:
                  </label>
                  <input
                    type="text"
                    id={`feelings-${index}`}
                    className="border rounded px-3 py-2 w-2/3"
                    placeholder="Enter your feelings..."
                    value={responses[index]?.text || ""}
                    onChange={(e) => handleTextInput(index, e.target.value)}
                    required
                  />
                </div>
              )}
              <div className="flex flex-wrap items-center gap-5">
                {question.Option.map(option=>{
                  return <>
                  <div className="flex items-center gap-5">
                  <input
                    type="radio"
                    className=""
                    required
                    id={`${option}-${index}`}
                    name={`response-${index}`}
                    value={`${option}`}
                    onChange={() => handleResponseChange(index, `${option}`)}
                  />
                  <label htmlFor={`${option}-${index}`}>{option.split(" ")[0]}</label>
                </div>
                  </>
                })
                  
                }
              </div>
            </motion.div>
          ))}
          <button
            type="submit"
            className="bg-blue-400 text-white font-mono font-semibold px-5 py-3 rounded-xl my-5"
            onClick={() => {console.log("submitted");} }
            disabled = {disabled}
          >
            Save Responses
          </button>
        </form>
      ) : (
        <h1 className="text-center text-2xl">
          Please login through{" "}
          <a href="/assessment" className="text-red-500 font-bold font-mono">
            {" "}
            Assesment page
          </a>
        </h1>
      )}
    </div>
  );
}
export default Assessment;
