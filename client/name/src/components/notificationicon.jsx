import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import axios from "axios";

const Notification = () => {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const userID = window.localStorage.getItem("userID");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3001/notification");
        setCards(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCards();
  }, []);

  const toggleBar = () => {
    setIsBarOpen(!isBarOpen);
  };

  const handleAccept = (card) => {
    // Navigate to the profile/chat page with the senderId as a parameter
    navigate(`/profile/chat`);
  };

  const filteredCards = cards.filter((card) => card.receiverId === userID);

  return (
    <div className="relative">
      <div className="icon hover:cursor-pointer" onClick={toggleBar}>
        <IoIosNotifications size={25} />
      </div>
      {isBarOpen && userID && (
        <div className="bar absolute bg-white h-64 top-20 right-5 z-50 rounded-lg border-2 border-blue-500 overflow-y-auto">
          <ul className="options-list list-none bg-white rounded-lg z-50">
            {filteredCards.length > 0 ? (
              filteredCards.map((card, i) => (
                <li key={i} className="flex items-center justify-between rounded-lg cursor-pointer p-1 hover:bg-blue-200">
                  <div>
                    <p className='text-sm'>Notification from: {card.senderId}</p>
                    
                    <p className='text-sm'>Project ID: {card.projectId}</p>
                  </div>
                  <button
                    className="ml-2 px-2   text-gray rounded hover:underline"
                    onClick={() => handleAccept(card)}
                  >
                    Accept
                  </button>
                </li>
              ))
            ) : (
              <li className="rounded-lg cursor-pointer p-1 hover:bg-blue-200">
                <p>There are no notifications</p>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Notification;
