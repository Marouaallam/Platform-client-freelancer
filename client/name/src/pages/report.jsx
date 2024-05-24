import React from 'react'
import { useState } from 'react'
import { SideBar } from '../components/sideBar'
import axios from "axios";

export const Reports = () => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userID = localStorage.getItem("userID");

      if (!userID) {
        alert("User ID not found. Please log in.");
        return;
      }

      const res = await axios.get(`http://localhost:3001/auth/login/${userID}`, {
        headers: {
          Authorization: `Bearer ${userID}`,
        },
      });

      const result = await axios.post("http://localhost:3001/report", {
        userName: res.data.username,
        description
      });

      alert("Report submitted successfully!!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the report. Please try again.");
    }
  };

  return (
    <div className='grid'>
      <div className="grid">
        <SideBar />
      </div>

      <div className='flex justify-center mt-12'>
        <form onSubmit={handleSubmit}>
          <div className='flex justify-center mt-10 text-3xl font-bold mb-12'>
            Maroua write your Report here
          </div>

          <div>
            <label></label>
            <input
              type="text"
              id="description"
              value={description}
              placeholder='Report Description'
              onChange={(event) => setDescription(event.target.value)}
              className='mb-4 p-3 pr-96 pb-48 bg-[#E3E7FC] border border-[#5C73EB] rounded-xl focus:border-[#5C73EB] focus:border-2 focus:outline-none focus:ring-0'
            />
          </div>
          <div className='flex justify-end'>
            <button type='submit' className='mt-8 mb-32 py-2 px-6 bg-[#A2B1FF] border border-[#5C73EB] rounded-xl'>
              Confirm Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};