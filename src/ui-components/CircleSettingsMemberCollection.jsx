/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import CircleSettingsMember from "./CircleSettingsMember";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function CircleSettingsMemberCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "CircleSettingsMemberCollection")}
      {...rest}
    >
      {(item, index) => (
        <CircleSettingsMember
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CircleSettingsMember>
      )}
    </Collection>
  );
}
