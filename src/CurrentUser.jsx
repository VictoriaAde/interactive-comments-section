import { currentUser } from './data.json';

const CurrentUser = () => {
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

export default CurrentUser;
