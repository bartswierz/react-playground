import "./card.styles.scss";
import CardBtn from "../buttons/card-btn/card-btn.component";
import CardIcon from "../card-icon/card-icon.component";
import { useState, useContext } from "react";
// import { BookmarkContext } from "../../contexts/bookmark.context";

export const Card = ({ user }) => {
  // const [isHired, setIsHired] = useState([]);
  // console.log("in card: ", user.id);
  // const { bookmarkList, bookmarkCount } = useContext(BookmarkContext);
  // console.log("Card: BookmarkList: ", bookmarkList);
  // console.log("Card: bookmarkCount: ", bookmarkCount);

  const { id, avatar, first_name, last_name, employment, email, phone_number, address } = user;

  // const [isHired, setIsHired] = useState([]);
  // Add Bot into our list of hired bots
  // const addToHiredList = () => {
  //   console.log("Bot Hired!");
  // };

  //Will add bookmark to list AND update icon similar to hiredList
  // const bookmarkHandler = () => {};

  return (
    <div className="card-container" key={id}>
      <div className="banner">
        <img className="avatar" src={avatar} alt="Robot"></img>
      </div>
      <div className="text-container">
        <CardIcon user={user} />
        <p className="card-name">{`${first_name} ${last_name}`}</p>
        <p className="card-title">{employment.title}</p>
        <p className="card-description">
          <ion-icon name="briefcase"></ion-icon>
          <span className="space">{employment.key_skill}</span>
        </p>
        <p className="card-description">
          <ion-icon name="mail"></ion-icon>
          <span className="space">{email}</span>
        </p>
        <p className="card-description">
          <ion-icon name="call"></ion-icon>
          <span className="space">{phone_number}</span>
        </p>
        <p className="card-description">
          <ion-icon name="location-sharp"></ion-icon>
          <span className="space">
            {address.city}, {address.state}
          </span>
        </p>
        {/* On click, we want to grab the details of this employee */}
        <CardBtn user={user} />
        {/* <CardBtn /> */}
      </div>
    </div>
  );
};

export default Card;
