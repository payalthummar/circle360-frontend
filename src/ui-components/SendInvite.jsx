/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function SendInvite(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="932px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SendInvite")}
      {...rest}
    >
      <Image
        width="280px"
        height="280px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="610px"
        left="75px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "QRCodeImage")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="500"
        color="rgba(13,26,38,1)"
        lineHeight="72px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="242px"
        height="61px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="52.58%"
        bottom="40.88%"
        left="21.86%"
        right="21.86%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ABC123"
        {...getOverrideProps(overrides, "InvitationCode")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="49.14%"
        bottom="48.61%"
        left="9.3%"
        right="47.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Here is your invitation code:"
        {...getOverrideProps(overrides, "Here is your invitation code:")}
      ></Text>
      <View
        width="350px"
        height="127px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="260px"
        left="40px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <View
          width="350px"
          height="127px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 63.5px - 0px)"
          left="calc(50% - 175px - 0px)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "SendInvite37242856")}
        >
          <Button
            width="350px"
            position="absolute"
            borderRadius="12px"
            top="calc(50% - 23px - -31.5px)"
            left="calc(50% - 175px - 0px)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="SEND INVITATION"
            {...getOverrideProps(overrides, "SendInviteButton")}
          ></Button>
          <TextField
            placeholder="Email"
            width="330px"
            height="42px"
            position="absolute"
            top="0px"
            left="20px"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "EmailTextField")}
          ></TextField>
        </View>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="350px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="20.49%"
        bottom="75%"
        left="9.3%"
        right="9.3%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Looks like you don’t have an account. Let’s create a new one for you."
        {...getOverrideProps(
          overrides,
          "Please enter the email of the member you would like to invite:"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(13,26,38,1)"
        lineHeight="48px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="344px"
        height="44px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12.02%"
        bottom="83.26%"
        left="10%"
        right="10%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Invite New Member"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="110px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43px"
        left="43px"
        {...getOverrideProps(overrides, "BackToMyCircles")}
      >
        <Icon
          width="18px"
          height="15px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 15 }}
          paths={[
            {
              d: "M7 4L7 0L0 7L7 14L7 9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="20.83%"
          bottom="16.67%"
          left="0%"
          right="83.64%"
          {...getOverrideProps(overrides, "BackIcon")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="30px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="My Circles"
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </View>
      <Image
        width="60px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25px"
        right="40px"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "ProfileImage")}
      ></Image>
    </View>
  );
}
