import React from "react";
import { currentUser } from "../data.json";

export const CurrentUser = () => {
  return (
    <div className="current-user">
      <img
        src={`../static/avatars/${currentUser.image.png}`}
        alt={currentUser.username}
      />
      <p>Username: {currentUser.username}</p>
    </div>
  );
};
