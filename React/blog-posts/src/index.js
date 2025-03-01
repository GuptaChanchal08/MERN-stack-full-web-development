import React from "react";
import ReactDOM from "react-dom/client";
import profile1 from "./image/pic-1.jpg";
import profile2 from "./image/pic-2.jpg";
import profile3 from "./image/pic-3.jpg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="ui-comments">
      <UserCard>
        <SingleComment name='Harry' date='Today at 5:00PM' text='It is amazing' picture={profile1}/>
      </UserCard>
        <UserCard>
      <SingleComment name='Alex' date='Today at 6:00PM' text='Great job' picture={profile2}/>
        </UserCard>
      <UserCard>
        <SingleComment name='Sofia' date='Today at 7:00PM' text='Thanks...' picture={profile3}/>
      </UserCard>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
