/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CircleSettingsMemberOverridesProps = {
    CircleSettingsMember?: PrimitiveOverrideProps<ViewProps>;
    Member?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    DeleteMemberIcon?: PrimitiveOverrideProps<ViewProps>;
    DeleteIcon?: PrimitiveOverrideProps<IconProps>;
    MemberName?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CircleSettingsMemberProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CircleSettingsMemberOverridesProps | undefined | null;
}>;
export default function CircleSettingsMember(props: CircleSettingsMemberProps): React.ReactElement;
