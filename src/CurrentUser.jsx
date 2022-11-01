import { currentUser } from './data.json';

const CurrentUser = () => {
  return (
    <div className="p-4 bg-White rounded-md">
      <form action="">
        <input
          type="text"
          id="addComment"
          className="focus:outline focus:outline-Grayish_Blue border border-solid border-Light_gray rounded-md w-full px-3 pt-3 pb-16 text-Dark_blue text-sm"
          placeholder="Add a comment..."
          required
        />
        <div className="flex justify-between items-center mt-6">
          <img
            className="rounded-full"
            src="https://via.placeholder.com/35"
            alt={currentUser.username}
          />
          <p className="hidden">Username: {currentUser.username}</p>
          <button
            type="submit"
            className="bg-Moderate_blue text-White uppercase text-sm font-semibold py-2 px-6 rounded-lg"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CurrentUser;
