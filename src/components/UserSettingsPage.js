import { UserSettings } from "../ui-components";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export default function UserSettingsPage() {
  const navigate = useNavigate();

  const UserSettingsOverride = {
    BackIcon: {
      className: "custom-btn",
      onClick: () => navigate("/dashboard"),
    },
    /* SignoutButton:{
        className: "custom-btn",
        onClick: () => navigate("/"),
    }*/
    /*DeleteAccountButton:{
        className: "custom-btn",
        onClick: () => navigate("/"),
    } */
    ProfileDetailsButton: {
      className: "custom-btn",
      onClick: () => navigate("/userdetails"),
    },
    AppSettingsButton: {
      className: "custom-btn",
      onClick: () => navigate("/userAppSettings"),
    },
  };
  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <UserSettings style={styles.center} overrides={UserSettingsOverride} />
      </Flex>
    </div>
  );
}
