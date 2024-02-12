import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        setUser(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : user ? (
        <ProfileCard user={user} />
      ) : (
        <div>No user data available</div>
      )}
    </div>
  );
};

export default App;
