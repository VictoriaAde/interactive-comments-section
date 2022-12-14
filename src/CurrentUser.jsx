import { useState } from 'react';
import { currentUser } from './data.json';

const CurrentUser = ({ submitLabel, handleSubmit }) => {
  const [text, setText] = useState('');

  console.log(text);
  // const isTextAreaDisabled = text.length === 0;
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText('');
  };

  return (
    <div className="p-4 bg-White rounded-md">
      <form onSubmit={onSubmit}>
        <textarea
          name=""
          id=""
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
            // disabled={isTextAreaDisabled}
            className="bg-Moderate_blue hover:bg-Light_grayish_blue text-White uppercase text-sm font-semibold py-2 px-6 rounded-lg hover:cursor-pointer"
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CurrentUser;
