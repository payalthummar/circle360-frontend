/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SendInvitation(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="199px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SendInvitation")}
      {...rest}
    >
      <View
        width="430px"
        height="199px"
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
        {...getOverrideProps(overrides, "SendInvitation39343139")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="110px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="22px"
          left="43px"
          {...getOverrideProps(overrides, "BackToMyCircles")}
        >
          <Icon
            width="18px"
            height="9.27px"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 9.270263671875 }}
            paths={[
              {
                d: "M7 2.47205L7 0L0 4.32609L7 8.65217L7 6.11832C12 6.11832 15.5 7.10714 18 9.27019C17 6.18012 14 3.09006 7 2.47205Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="31.94%"
            bottom="29.44%"
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
    </View>
  );
}
