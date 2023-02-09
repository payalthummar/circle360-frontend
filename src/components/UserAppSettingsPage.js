import { useState } from "react";
import { UserAppSettings } from "../ui-components";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export default function UserAppSettingsPage() {
  const navigate = useNavigate();
  const [pushNotifications, setPushNotification] = useState(true);
  const [incognito, setIncognito] = useState(false);
  const [updateFrequency, setUpdateFrequency] = useState(0);
  const [updateRadius, setUpdateRadius] = useState(0);

  const UserAppSettingsOverrides = {
    BackIcon: {
      className: "custom-btn",
      onClick: () => navigate("/usersettings"),
    },
    ProfileImage: {
      alt: "Circle360 logo",
      src: logo,
      onClick: () => navigate("/usersettings"),
    },
    PushSwitchField: {
      onClick: () => setPushNotification(true),
    },
    IncognitoSwitchField: {
      onClick: () => setIncognito(true),
    },
    RadiusSliderField: {
      onClick: () => setUpdateFrequency((prev) => prev + 1),
    },
    FrequencySliderField: {
      onClick: () => setUpdateRadius((prev) => prev + 1),
    },
  };
  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <UserAppSettings
          style={styles.center}
          overrides={UserAppSettingsOverrides}
        />
      </Flex>
    </div>
  );
}
