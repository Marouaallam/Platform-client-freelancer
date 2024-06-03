import { Button } from "@mui/material";
import { Header } from "./Header.jsx";
import { CiExport } from "react-icons/ci";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Conversation } from "./conversation.jsx";
import { ChatBox } from "./chatBox.jsx";
import { io } from "socket.io-client";

export const ZoneChat = () => {
  const [userData, setUserData] = useState(null);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recieveMessage, setRecieveMessage] = useState(null);
  const socket = useRef();
  const navigate = useNavigate();

  // Sending message through socket
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit('send-message', sendMessage);
    }
  }, [sendMessage]);

  // Receiving message from socket server
  useEffect(() => {
    socket.current = io('http://localhost:8800');
    if (userData && userData._id) {
      socket.current.emit("new-user-add", userData._id);
    }

    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });

    socket.current.on("recieve-message", (data) => {
      setRecieveMessage(data);
    });

    return () => {
      socket.current.disconnect();
    };
  }, [userData]);

  useEffect(() => {
    const verifyUserAndFetch = async () => {
      const userID = localStorage.getItem("userID");
      if (!userID) {
        navigate("/auth");
      } else {
        try {
          const res = await axios.get(`http://localhost:3001/auth/login/${userID}`, {
            headers: {
              Authorization: `Bearer ${userID}`,
            },
          });
          setUserData(res.data);
        } catch (error) {
          navigate("/auth");
        }
      }
    };
    verifyUserAndFetch();
  }, [navigate]);

  useEffect(() => {
    const getChats = async () => {
      const userID = localStorage.getItem("userID");
      if (!userID) return;
      try {
        const { data } = await axios.get(`http://localhost:3001/chat/${userID}`);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [userData]);

  console.log(chats);

  return (
    <div className="w-5/6 bg-gray-100 h-full p-4">
      <Header />
      <div className="flex ">
        <div>
          <div className="border-b border-gray-300">
            <input
              type="search"
              className=" cursor-pointer m-4 p-3  rounded-xl border-0  pr-60 bg-[#eaebec] outline-none"
              placeholder="search..."
            />
          </div>
          <div>
            {userData && chats.map((d, i) => (
              <div key={i} onClick={() => setCurrentChat(d)} className="flex items-center p-2 w-[430px] h-16 hover:bg-slate-300 focus:bg-slate-300 cursor-pointer m-3 border rounded">
                <Conversation data={d} currentUserID={userData._id} />
              </div>
            ))}
          </div>
        </div>

        <ChatBox
          chat={currentChat}
          currentUserID={userData && userData._id}
          setSendMessage={setSendMessage}
          recieveMessage={recieveMessage}
        />
      </div>
    </div>
  );
};
