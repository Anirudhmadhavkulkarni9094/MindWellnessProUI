import React from 'react'

function TestEntryForm({info}) {
  return (
    <form className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-lg shadow-2xl p-14 lg:w-1/2 sm:w-3/4">
          <div className="flex flex-col text-left my-4">
            <label>Name</label>
            <input
              placeholder="Name"
              className="p-3 rounded-lg"
              onChange={(e) => info.setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-left my-4">
            <label>
              Email{" "}
              <span className="text-sm text-red-400">
                (please note that this email will be used for sending your report)
              </span>
            </label>
            <input
              placeholder="Email"
              type="email"
              className="p-3 rounded-lg"
              onChange={(e) => info.setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-left my-4">
            <label>Age</label>
            <select
              className="px-3 py-2 rounded-lg" value="18-25"
              onChange={(e) => info.setAge(e.target.value)}
            >
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
              <option value="46-55">46-55</option>
              <option value="56+">56+</option>
            </select>
          </div>
          <select value={info.Category} onChange={(e) => info.SetCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="anxiety disorder">Anxiety Disorder</option>
                <option value="depression">Depression</option>
                <option value="bipolar">Bipolar Disorder</option>
              </select>
          <div className="flex flex-wrap justify-between">
            <button
              type="button"
              onClick={info.startTestHandle}
              className="bg-black px-3 py-2 rounded-lg text-white shadow-2xl"
            >
              Start the test
            </button>
            <button
              className="bg-red-400 text-white px-3 py-2 rounded-lg shadow-2xl"
              onClick={() => info.setShowInfo(false)}
            >
              Close
            </button>
          </div>
        </form>
  )
}

export default TestEntryForm