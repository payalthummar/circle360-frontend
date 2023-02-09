/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function GroupCode(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="322px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "GroupCode")}
      {...rest}
    >
      <View
        width="430px"
        height="322px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "GroupCode39343193")}
      >
        <Image
          width="41.63%"
          height="50.62%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="44.41%"
          bottom="4.97%"
          left="29.07%"
          right="29.3%"
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
          top="14.91%"
          bottom="66.15%"
          left="21.16%"
          right="22.56%"
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
          top="8.39%"
          bottom="85.09%"
          left="6.51%"
          right="50.47%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Here is your invitation code:"
          {...getOverrideProps(overrides, "Here is your invitation code:")}
        ></Text>
      </View>
    </View>
  );
}
