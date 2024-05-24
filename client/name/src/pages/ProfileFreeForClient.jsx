import { SideBar } from "../components/sideBar.jsx";
import userpic from "../assets/Userpic.png";
import * as React from "react";
import ProfileCategories from "../components/profilecategorie.jsx";
import { Comments } from "../components/comments.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ProfilePopup } from "@/components/ProfilePopup.jsx";
import StarIcon from '@mui/icons-material/Star';

export const ProfileFree = ({}) => {
    const { id } = useParams();
    const [profiles, setProfiles] = useState(null);
    const [comment, setComment] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [userData, setUserData] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get("http://localhost:3001/comment");
                setComment(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchComments();
    }, []);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/profile/${id}`);
                setProfiles(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProfile();
    }, [id]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get("http://localhost:3001/auth/signup");
                setUserData(res.data);
            } catch (error) {
                console.log(error);
                navigate("/auth");
            }
        };
        fetchUserData();
    }, [navigate]);

    useEffect(() => {
        if (comment.length > 0 && profiles) {
            const relevantComments = comment.filter(comm => comm.profileID === profiles._id);
            const totalRating = relevantComments.reduce((acc, comm) => acc + comm.rating, 0);
            const avgRating = (totalRating / relevantComments.length) || 0;
            const formattedAvgRating = avgRating.toFixed(1);
            setAverageRating(formattedAvgRating);
}}
)

    return (
        <div>
            <div className="grid">
            </div>
            <div className="flex ml-52 mt-16">
                <div className="ml-8 p-4 h-72 w-64 border rounded-md bg-[#f6f8ff85]">
                    <img src={userpic} className='w-24 h-24 mx-auto' />
                    {userData && userData.map((user, i) => (
                        user && user._id === profiles?.userID ? (
                            <div key={i} >
                                <div className=" flex justify-center items-center gap-3 mt-3 text-xl">
                                  <p>{user.firstname}</p>
                                  <p>{user.lastname}</p>
                                </div>
                                <div className="flex justify-center mt-2">
                                  <p>{user.username}</p>
                                </div>
                                <p className="text-center text-[8px] text-slate-400 mt-3">{profiles.description}</p>
                            </div>
                        ) : null
                    ))}
                </div>
                <div className="ml-8 p-10 h-72 w-[500px] border rounded-md bg-[#f6f8ff85]">
                    <div className="pt-4 pb-2 font-bold">Career</div>
                    <div className="flex gap-6">
                        {profiles && (
                            <>
                                <p>{profiles.jobs} jobs</p>
                                <p>{profiles.price} DA</p>
                            </>
                        )}
                        <div className="flex" >
                            <StarIcon style={{ fontSize: 25, color: "#FFD500" }} />
                            <p>{averageRating}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex ml-64 mt-8 text-2xl font-bold">
                Gigs
            </div>
            <div className="ml-24 mt-6">
                <ProfileCategories />
            </div>
            <div className="flex ml-64 mt-16">
                <Comments 
                id={id}/>
            </div>
        </div>
    );
};
