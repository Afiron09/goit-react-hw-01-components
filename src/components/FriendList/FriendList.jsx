import css from "./FriendList.module.css";
import { FriendListItem } from "FriendListItem/FriendListItem.jsx";

export const FriendList = (friends) => {
  return (
    <ul className="friend-list">
      {friends.map((frend) => (
        <FriendListItem key={frend.id} {...frend} />
      ))}
    </ul>
  );
};
