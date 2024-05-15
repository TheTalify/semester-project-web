import React from "react";
import { useParams } from "react-router-dom";

const MainContent = () => {
  const { userID } = useParams();

  return (
    <>
      <h1>Welcome, User {userID}!</h1>
      {/* Add your main content for the user's unique page here */}
    </>
  );
};

export default MainContent