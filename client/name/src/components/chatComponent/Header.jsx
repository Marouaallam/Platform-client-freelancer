import { useNavigate } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import  LinearProgress,{linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


export const Header = () => {
  const navigate = useNavigate();
  
  return (
    <nav>
      <div>
      <div className=" flex items-center py-4 font-bold text-2xl border-b border-gray-300" >
        <div className="flex-grow">Chat</div> 
        <div>
          <MdPayment className="cursor-pointer" onClick={()=>{
            navigate("/profile/chat/payement")
          }}/>
        </div>
      </div>
      
      </div>
      
    </nav>
  );
};
