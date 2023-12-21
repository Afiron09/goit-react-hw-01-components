import user from "path/to/user.json";
import { Profile } from "../Profile/Profile";
import { Statistics } from "../Statistics/Statistics";
import data from "path/to/data.json";
import friends from "path/to/friends.json";
import { FriendsList } from "../FriendList/FriendsList";
import transactions from "path/to/transactions.json";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
