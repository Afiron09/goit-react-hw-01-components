import css from "./FriendsList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map((frend) => (
        <FriendListItem key={frend.id} {...frend} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
