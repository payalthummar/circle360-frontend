/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function UserDetails1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="932px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UserDetails1")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="600"
        color="rgba(16,16,16,1)"
        lineHeight="29.045454025268555px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="116px"
        left="136px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Profile details"
        {...getOverrideProps(overrides, "Profile details")}
      ></Text>
      <View
        width="390px"
        height="52px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="48px"
        left="20px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BacktoProfile")}
      >
        <View {...getOverrideProps(overrides, "ic:round-chevron-left")}></View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(16,16,16,1)"
          lineHeight="19.363636016845703px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="16.5px"
          left="40px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Profile"
          {...getOverrideProps(overrides, "Profile")}
        ></Text>
      </View>
      <View
        width="358px"
        height="227px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="177px"
        left="36px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Details")}
      >
        <Flex {...getOverrideProps(overrides, "Input Fields36803119")}></Flex>
        <Flex {...getOverrideProps(overrides, "Input Fields36803120")}></Flex>
        <Flex {...getOverrideProps(overrides, "Input Fields36803121")}></Flex>
      </View>
    </View>
  );
}
