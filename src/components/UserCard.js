import React from "react";

const UserCard = (props) => {
  console.log(props.user);

  return (
    <div className="user-card">
      <img alt="imag" className="user-img" src={props.data.picture.medium} />
      <h3>{props.data.name.first}</h3>
      <p>{props.data.phone}</p>
      <p>{props.data.email}</p>
      <p>{props.data.location.city}</p>
    </div>
  );
};
export default UserCard;
