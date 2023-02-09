import { CircleSettingsHeader } from "../ui-components";
import { CircleSettingsMember } from "../ui-components";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CircleSettingsPage({ user }) {
  const [status, setStatus] = useState("");
  const [groupName, setGroupName] = useState("");
  const { groupCode } = useParams();
  console.log("id", groupCode);
  const navigate = useNavigate();
  console.log("user", user);

  console.log("groupName", user.message.myGroups[0].name);
  console.log(groupCode);
  useEffect(() => {
    // DELETE request using fetch with async/await
    async function deleteMember() {
      await fetch(
        `http://circle360backendapp.us-east-1.elasticbeanstalk.com/api/group/user/${groupCode}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBheWFsQGdtaWwuY29tIiwidXNlcklEIjoiNjNlMjg1MmY3YmM5MzA4NjNlNWI2MGE5IiwiaWF0IjoxNjc1ODQ5NTMzLCJleHAiOjE2NzU4OTI3MzN9._TuW3ePIsUX6TBT66b7ngMKmxYTuYndx1hCuKZvBDYo`,
          },
        }
      );
      setStatus("Delete successful");
    }

    deleteMember();
  }, []);
  // useEffect(() => {
  //   // DELETE request using axios with set headers
  //   const deleteMember = async () => {
  //     try {
  //       const data = await fetch(
  //         `http://circle360backendapp.us-east-1.elasticbeanstalk.com/api/group/user/${groupCode}`,

  //         {
  //           method: "DELETE",
  //           // headers: {
  //           //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBheWFsQGdtaWwuY29tIiwidXNlcklEIjoiNjNlMjg1MmY3YmM5MzA4NjNlNWI2MGE5IiwiaWF0IjoxNjc1ODY1NDk3LCJleHAiOjE2NzU5MDg2OTd9.obh4b1MN79QWB4zgSCtJfvHZf2BYwHFleN2MSyXEoDY`,
  //           // },
  //         }
  //       );
  //       setStatus(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   deleteMember();
  // }, []);

  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <CircleSettingsHeader
          style={styles.center}
          overrides={{
            Group: {
              children: user.message.myGroups.map((group) => <>{group.name}</>),
            },
            ProfileImage: {
              alt: "Circle360 logo",
              src: logo,
              onClick: () => navigate("/userSettings"),
            },
            BackIcon: {
              className: "custom-btn",
              onClick: () => navigate("/dashboard"),
            },
            InviteNewMemberButton: {
              className: "custom-btn",
              onClick: () => navigate("/sendinvite"),
            },
          }}
        />

        {user.message.myGroups.map((item, key) => (
          <div key={item._id}>
            {item.groupID.members?.map((data, key) => (
              <>
                <CircleSettingsMember
                  key={data._id}
                  overrides={{
                    MemberName: { children: data.email },
                    DeleteIcon: {
                      className: "custom-btn",
                      onClick: () => status,
                    },
                  }}
                />
              </>
            ))}
          </div>
        ))}
      </Flex>
    </div>
  );
}
