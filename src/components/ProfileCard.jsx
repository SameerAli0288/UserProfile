import React from "react";
import "./ProfileCard.css"; // Make sure to import your ProfileCard CSS file

const ProfileCard = ({ user }) => {
  return (
    <div className="card">
      <div className="lines"></div>
      <div className="imgBx">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
      </div>
      <div className="content">
        <div className="details">
          <h2>
            {user.name.title} {user.name.first} {user.name.last}
            <br />
          </h2>
          <div className="data">
            <h2>
              <span>FirstName: </span>
              {user.name.first}
              <br />
            </h2>
            <h2>
              <span>LastName: </span>
              {user.name.last}
              <br />
            </h2>
            <h2>
              <span>Gender: </span>
              {user.gender}
              <br />
            </h2>
            <h2>
              <span>Phone Number: </span>
              {user.phone}
              <br />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
