import userData from "../../json/userData.json";
import friends from "../../json/friends.json";
import transactions from "../../json/transactions.json";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

 const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;