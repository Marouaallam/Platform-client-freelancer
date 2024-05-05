import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AdminDashboard } from "../pages/admin.jsx";
import { Profile } from "../pages/profile.jsx";

export const UserDetails = () => {
  const [userData, setUserData] = useState(null);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUserAndFetch = async () => {
      const user = localStorage.getItem("user");
      if (!user) {
        navigate("/login");
      } else {
        // fetchData
        try {
          const response = await axios.get("http://localhost:3001/auth/login", {
            headers: {
              Authorization: `Bearer ${user}`,
            },
          });
          const data = response.data;
          console.log(data, "userData");
          if (data.email === "Admin") {
            setAdmin(true);
          }
          setUserData(data);
        } catch (error) {
          // error while fetching probably token expired or invalid token
          console.error("Error fetching user data:", error);
          navigate("/login");
        }
      }
    };
    verifyUserAndFetch();
  }, [navigate]);

  return admin ? <AdminDashboard /> : <Profile userData={userData} />;
};
