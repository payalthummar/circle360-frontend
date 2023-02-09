/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function CircleSettingsMember(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="35px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CircleSettingsMember")}
      {...rest}
    >
      <View
        width="350px"
        height="35px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="40px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Member")}
      >
        <View
          width="350px"
          height="35px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(239,240,240,1)"
          {...getOverrideProps(overrides, "Rectangle 1164")}
        ></View>
        <View
          width="30px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="2px"
          left="309px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "DeleteMemberIcon")}
        >
          <Icon
            width="17.5px"
            height="22.5px"
            viewBox={{ minX: 0, minY: 0, width: 17.5, height: 22.5 }}
            paths={[
              {
                d: "M13.75 7.5L13.75 20L3.75 20L3.75 7.5L13.75 7.5ZM11.875 0L5.625 0L4.375 1.25L0 1.25L0 3.75L17.5 3.75L17.5 1.25L13.125 1.25L11.875 0ZM16.25 5L1.25 5L1.25 20C1.25 21.375 2.375 22.5 3.75 22.5L13.75 22.5C15.125 22.5 16.25 21.375 16.25 20L16.25 5Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.5%"
            bottom="12.5%"
            left="20.83%"
            right="20.83%"
            {...getOverrideProps(overrides, "DeleteIcon")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(13,26,38,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="284px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="5.71%"
          bottom="8.57%"
          left="5.71%"
          right="13.14%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children=""
          {...getOverrideProps(overrides, "MemberName")}
        ></Text>
      </View>
    </View>
  );
}
