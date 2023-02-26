import { useState, useEffect } from "react";
import "./styles.css";
import { getRandomUser } from "./api/User";
// import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";
import Header from "./components/Header";

export default function App() {
  // const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   getPosts().then((post) => {
  //     setData(post);
  //   });
  // }, []);

  useEffect(() => {
    getRandomUser().then((user) => {
      setUserData(user.results[0]);
    });
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => {
      setUserData(user.results[0]);
    });
  };
  // console.log(userData);

  return (
    <div className="App">
      <Header />
      {userData && (
        <>
          <UserCard data={userData} />
          <button className="refresh-btn" onClick={refresh}>
            Refresh
          </button>
        </>
      )}
      {/* {data ? (
        data.map((e) => {
          return <PostCard key={e.id} title={e.title} body={e.body} />;
        })
      ) : (
        <p></p>
      )} */}
    </div>
  );
}
