import user from './profile/user.json';
import Profile from './profile/profile';

import data from './statistics/data';
import Statistics from './statistics/statistics';

import friends from './friends/friends';
import FriendsList from './friends/friendsList';

import transactions from './transactions/transactions';
import TransactionHistory from './transactions/transactionsHistory';

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
      <Statistics stats={data} />
      <FriendsList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
