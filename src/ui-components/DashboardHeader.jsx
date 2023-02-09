/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
export default function DashboardHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="365px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DashboardHeader")}
      {...rest}
    >
      <Button
        width="350px"
        position="absolute"
        borderRadius="12px"
        top="282px"
        left="41px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="JOIN"
        {...getOverrideProps(overrides, "JoinButton")}
      ></Button>
      <Button
        width="350px"
        position="absolute"
        borderRadius="12px"
        top="200px"
        left="40px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="CREATE NEW"
        {...getOverrideProps(overrides, "CreateNewButton")}
      ></Button>
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
        width="161px"
        height="50px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30.68%"
        bottom="55.62%"
        left="31.4%"
        right="31.16%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="My Circles"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
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
