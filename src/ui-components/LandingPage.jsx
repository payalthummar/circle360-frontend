/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
export default function LandingPage(props) {
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
      {...getOverrideProps(overrides, "LandingPage")}
      {...rest}
    >
      <Button
        width="350px"
        position="absolute"
        borderRadius="12px"
        top="calc(50% - 23px - -351px)"
        left="calc(50% - 175px - 0px)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="GET STARTED"
        {...getOverrideProps(overrides, "GetStartedButton")}
      ></Button>
      <View
        width="316px"
        height="228px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 114px - 11px)"
        left="calc(50% - 158px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Title")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="500"
          color="rgba(13,26,38,1)"
          lineHeight="36px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="68.42%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="A new way to communicate&#xA; with your friends"
          {...getOverrideProps(
            overrides,
            "A new way to communicate with your friends"
          )}
        ></Text>
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="68.42%"
          left="12.03%"
          right="12.66%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Circle 360"
          {...getOverrideProps(overrides, "Circle 360")}
        ></Text>
      </View>
      <Image
        width="200px"
        height="200px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 100px - 297px)"
        left="calc(50% - 100px - 0px)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Logo")}
      ></Image>
    </View>
  );
}
