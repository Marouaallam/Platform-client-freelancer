import { BsFillPersonFill } from "react-icons/bs";

const data = [
  {
    description: 'User interface and user experience',
    name: 'UI/UX',
    img: '/UiUx.png',
    src: '/uiproject'
  },
  // Add more users as needed
];

export const OnlineUsers = () => {
  return (
    <div>
      <div className="online-users-h">
        Users <BsFillPersonFill />
      </div>
      <div className="o-u-container">
        {data.map((usr) => {
          return (
            <div className="online-user" key={usr.name}>
              <p>{usr.name}</p>
              <p style={{ color: "#00FF00" }}>Online</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
