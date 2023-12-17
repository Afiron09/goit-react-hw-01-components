import user from "path/to/user.json";
import { Profile } from "../Profile/Profile";
import { Statistics } from "../Statistics/Statistics";
import data from "path/to/data.json";

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
    </div>
  );
};
