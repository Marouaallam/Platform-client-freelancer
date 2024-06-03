import { useEffect, useState } from "react";
import axios from "axios";
import { CiExport } from "react-icons/ci";
import { format } from "timeago.js";

export const ChatBox = ({ chat, currentUserID, setSendMessage, recieveMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");

  useEffect(() => {
    if (recieveMessage !== null && recieveMessage.chatId === chat._id) {
      setMessages((prevMessages) => [...prevMessages, recieveMessage]);
    }
  }, [recieveMessage, chat]);

  useEffect(() => {
    const userID = chat?.members?.find((id) => id !== currentUserID);
    const getUserData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/auth/login/${userID}`);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUserID]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/message/${chat._id}`);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);

  const handleChange = (e) => {
    setNewMessages(e.target.value);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUserID,
      text: newMessages,
      chatId: chat._id,
    };
    try {
      const { data } = await axios.post("http://localhost:3001/message", message);
      setMessages((prevMessages) => [...prevMessages, data]);
      setNewMessages("");
    } catch (error) {
      console.log(error);
    }
    //send message to socket server 
    const recieverId = chat.members.find((id) => id !== currentUserID);
    setSendMessage({ ...message, recieverId });
  };

  return (
    <div>
      {chat ? (
        <div className=" w-full h-screen p-4  bg-[#eaebec] ">
          <div className=" flex  items-center  w-[430px] h-16 border-b border-gray-300 ">
            <img src='/profilG.png' alt="" className="h-10 w-auto" />
            <div className="ml-4 w-[280px]">
              <p className="text-base font-semibold">{userData && userData.lastname} {userData && userData.firstname}</p>
              <p className="text-sm ">{userData && userData.username}</p>
            </div>
          </div>
          <div className="m-4 my-4">
            {messages.map((message, i) => (
              <div key={i} className={message.senderId === currentUserID ? " w-96 h-20 mr-4 p-3 text-sm  rounded-b-xl rounded-tl-xl  bg-slate-50 mt-4" : "w-96 h-20 ml-4 p-3 text-sm  rounded-b-xl rounded-tr-xl  bg-slate-50 mt-4"}>
                <span>{message.text}</span>
                <div className="flex justify-end text-[10px] text-slate-500 ">
                  {format(message.createdAt)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center mt-24 border-t border-gray-300">
            <input
              className="bg-[#eaebec] focus:outline-none flex-grow p-2"
              value={newMessages}
              placeholder="Write your message here"
              onChange={handleChange}
            />
            <div className="mr-2 hover:cursor-pointer" onClick={handleSend}>Send</div>
            <CiExport />
          </div>
        </div>
      ) : (
        <span className="m-24">Tap on a chat to start conversation</span>
      )}
    </div>
  );
};
