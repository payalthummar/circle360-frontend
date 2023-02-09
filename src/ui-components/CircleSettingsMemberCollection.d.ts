/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CircleSettingsMemberProps } from "./CircleSettingsMember";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CircleSettingsMemberCollectionOverridesProps = {
    CircleSettingsMemberCollection?: PrimitiveOverrideProps<CollectionProps>;
    CircleSettingsMember?: CircleSettingsMemberProps;
} & EscapeHatchProps;
export declare type CircleSettingsMemberCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CircleSettingsMemberProps;
} & {
    overrides?: CircleSettingsMemberCollectionOverridesProps | undefined | null;
}>;
export default function CircleSettingsMemberCollection(props: CircleSettingsMemberCollectionProps): React.ReactElement;
