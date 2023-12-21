import css from "./FriendList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map((frend) => (
        <FriendListItem key={frend.id} {...frend} />
      ))}
    </ul>
  );
};
