import { SideBar } from "../components/sideBar.jsx";
import userpic from "../assets/Userpic.png";
import * as React from "react";
import ProfileCategories from "../components/profilecategorie.jsx";
import { CommentsProfile } from "../components/commentsProfile.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProfilePopup } from "@/components/ProfilePopup.jsx";
import StarIcon from '@mui/icons-material/Star';
import { ClientProjects } from "@/components/clientProjects/clientProjects.jsx";

export const ProfileClient = ({}) => {
    const [comment, setComment] = useState([]);
    const [userData, setUserData] = useState(null);
    const [profiles, setProfiles] = useState([]);
    const [averageRating, setAverageRating] = useState(0);

    const navigate = useNavigate();

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
        const fetchProfiles = async () => {
            try {
                const response = await axios.get("http://localhost:3001/profile");
                setProfiles(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProfiles();
    }, []);

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
        if (comment.length > 0 && profiles.length > 0 && userData) {
            const relevantProfiles = profiles.filter(profile => profile.userID === userData._id);
            if (relevantProfiles.length > 0) {
                const profile = relevantProfiles[0]; // Assuming single profile per user
                const relevantComments = comment.filter(comm => comm.profileID === profile._id);
                const totalRating = relevantComments.reduce((acc, comm) => acc + comm.rating, 0);
                const avgRating = (totalRating / relevantComments.length) || 0;
                const formattedAvgRating = avgRating.toFixed(1);
                setAverageRating(formattedAvgRating);
            }
        }
    }, [comment, profiles, userData]);

    return (
        <div>
            <div className="grid">
                <SideBar />  
            </div>
            <div className="flex ml-52 mt-16">
                <div className="ml-8 p-4 h-72 w-64 border rounded-md bg-[#f6f8ff85]">
                    <img src={userpic} className='w-24 h-24 mx-auto' alt="User" />
                    <div className="text-center font-bold my-3">{userData && userData.username}</div>
                    <div className="text-center text-[#647DFF] mb-2">Client</div>
                    {profiles.filter(profile => profile.userID === userData._id).map((profile, i) => (
                        <div key={i} className="text-center text-[8px] text-slate-400">
                            <p>{profile.description}</p>
                        </div>
                    ))}
                    {profiles.filter(profile => profile.userID === userData._id).map((profile, i) => (
                        <ProfilePopup
                            key={i}
                            id={profile._id}
                            description={profile.description}
                            price={profile.price}
                            jobs={profile.jobs}
                        />
                    ))}
                </div>
                <div className="ml-8 p-10 h-72 w-[500px] border rounded-md bg-[#f6f8ff85]">
                    <div className="font-bold">Basic info</div>
                    <div className="py-2">Email: {userData && userData.email}</div>
                    <div className="py-2">Password: ..............</div>
                    <div className="">Phone Number: {userData && userData.phone}</div>
                   
                </div>
            </div>
            <div className="flex ml-64 mt-8 text-2xl font-bold">
                My projects
            </div>
            <ClientProjects/>
        </div>
    );    
};
