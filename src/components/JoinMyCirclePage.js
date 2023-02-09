import { useState } from "react";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import {
  JoinCircleForm,
  SendInvitation,
  JoinCircle,
  ProfileLogo,
} from "../ui-components";

export default function JoinMyCircle() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [invitationCode, setInvitationCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8080/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ invitationCode }),
    });
  };

  const JoinMyCircleOverrides = {
    ProfileImage: {
      alt: "Circle360 logo",
      src: logo,
      onClick: () => navigate("/usersettings"),
    },
    BackIcon: {
      className: "custom-btn",
      onClick: () => navigate("/dashboard"),
    },
    JoinCircleField: {
      type: "text",
      onChange: (e) => setInvitationCode(e.target.value),
    },
    /*JoinButton: {
      className: "custom-btn",
      onClick: () => navigate("/dashboard"),
    }*/
  };
  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <ProfileLogo overrides={JoinMyCircleOverrides} />
        {/*<JoinCircle style={styles.center} overrides={JoinMyCircleOverrides} />*/}
        <JoinCircleForm

        //onSubmit={(fields) => {
        /* Handle form submission */
        //}}
        />
      </Flex>
    </div>
  );
}
