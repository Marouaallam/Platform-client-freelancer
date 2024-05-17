import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

export const InputBox = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    // Add your send message logic here
    console.log("Message sent:", message);
  };

  return (
    <form className="send-msg-container" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button
        onClick={() => {
          setMessage("");
          sendMessage();
        }}
      >
        Send
        <BsFillSendFill />
      </button>
    </form>
  );
};
