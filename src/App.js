import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import AuthPage from "./components/AuthPage";
import DashboardPage from "./components/DashboardPage";
import JoinMyCirclePage from "./components/JoinMyCirclePage";
import SendInvitePage from "./components/SendInvitePage";
import CircleSettingsPage from "./components/CircleSettingsPage";
import UserSettingsPage from "./components/UserSettingsPage";
import UserDetailsPage from "./components/UserDetailsPage";
import UserAppSettingsPage from "./components/UserAppSettingsPage";

import { Auth, Hub } from "aws-amplify";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "http://circle360backendapp.us-east-1.elasticbeanstalk.com/api/user",
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBheWFsQGdtaWwuY29tIiwidXNlcklEIjoiNjNlMjg1MmY3YmM5MzA4NjNlNWI2MGE5IiwiaWF0IjoxNjc1ODQ5NTMzLCJleHAiOjE2NzU4OTI3MzN9._TuW3ePIsUX6TBT66b7ngMKmxYTuYndx1hCuKZvBDYo`,
            },
          }
        );
        const data = await res.json();
        console.log("data".data);
        setUser(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      getData();
    }
  }, []);

  console.log("HERE", user);

  Hub.listen("auth", (data) => {
    switch (data.payload.event) {
      case "signIn":
        console.log("Auth Hub: user signed in");
        break;
      case "signUp":
        console.log("Auth Hub: user signed up");
        break;
      case "signOut":
        console.log("Auth Hub: user signed out");
        break;
      case "signIn_failure":
        console.log("Auth Hub: user sign in failed");
        break;
      case "configured":
        console.log("Auth Hub: the Auth module is configured");
    }
  });

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} /> */}
        <Route path="/dashboard" element={<DashboardPage user={user} />} />
        <Route path="/joincircle" element={<JoinMyCirclePage />} />
        <Route path="/sendinvite" element={<SendInvitePage user={user} />} />

        <Route
          path="/circlesettings/:groupCode"
          element={<CircleSettingsPage user={user} />}
        />
        <Route
          path="/usersettings"
          element={<UserSettingsPage user={user} />}
        />
        <Route path="/userdetails" element={<UserDetailsPage />} />
        <Route path="/userAppSettings" element={<UserAppSettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
