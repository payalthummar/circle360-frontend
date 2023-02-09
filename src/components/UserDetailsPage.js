import { UserDetails } from "../ui-components";
import { useState } from "react";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export default function UserDetailsPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nickname, setNickName] = useState("");
  const UserDetailsOverrides = {
    BackIcon: {
      className: "custom-btn",
      onClick: () => navigate("/usersettings"),
    },
    ProfileImage: {
      alt: "Circle360 logo",
      src: logo,
      onClick: () => navigate("/usersettings"),
    },
    EmailTextField: {
      type: "text",
    },
    NickNameField: {
      type: "text",
      onChange: (e) => setNickName(e.target.value),
    },
  };
  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <UserDetails style={styles.center} overrides={UserDetailsOverrides} />
      </Flex>
    </div>
  );
}
