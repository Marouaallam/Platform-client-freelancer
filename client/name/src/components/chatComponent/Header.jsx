import { useNavigate } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";
import { MdPayment } from "react-icons/md";

export const Header = () => {
  
  return (
    <nav>
      
      <div className=" flex items-center py-4 font-bold text-2xl border-b border-gray-300" >
        <div className="flex-grow">Chat</div>
        <div>
          <MdPayment />
        </div>
        
      </div>
    </nav>
  );
};
