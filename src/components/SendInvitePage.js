import { useState } from "react";
import { SendInvite, GroupCode, ProfileLogo } from "../ui-components";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { SendInviteForm } from "../ui-components";

export default function SendInvitePage({ user }) {
  console.log(user);
  const groupCode = user.message?.myGroups.map((group) => {
    return group.groupID.groupCode;
  });

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const SendInvitationOverrides = {
    ProfileImage: {
      alt: "Circle360 logo",
      src: logo,
      onClick: () => navigate("/usersettings"),
    },
    BackIcon: {
      className: "custom-btn",
      onClick: () => navigate("/dashboard"),
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `http://circle360backendapp.us-east-1.elasticbeanstalk.com/api/group/user/${groupCode}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );
    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      // localStorage.setItem("user", JSON.stringify(data));
      console.log(data);
      setIsLoading(false);
      setEmail(data);
    }
  };
  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        {/* <SendInvite style={styles.center} overrides={SendInvitationOverrides} /> */}
        <ProfileLogo overrides={SendInvitationOverrides} />
        <SendInviteForm onSubmit={handleSubmit} />
        <GroupCode />
      </Flex>
    </div>
  );
}
/*const SendInvitationOverrides = {
  EmailTextField: {
    type: "email",
    onChange: (e) => {
      setEmail(e.target.value);
    },
   
  },
  ProfileImage: {
    alt: "Circle360 logo",
    src: logo,
    onClick: () => navigate("/usersettings"),
  },
  SendInviteButton: {
    className: "custom-btn",
    //onClick: () => alert("added"),
    onClick: () => {
      if (validator.isEmail(email)) {
        console.log(email);
      } else {
        alert("Your email is not correct!");
      }
    },
  },
  BackIcon: {
    className: "custom-btn",
    onClick: () => navigate("/dashboard"),
  },
  /*JoinButton: {
    className: "custom-btn",
    onClick: () => navigate("/dashboard"),
  }*/
