/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDetails1OverridesProps = {
    UserDetails1?: PrimitiveOverrideProps<ViewProps>;
    "Profile details"?: PrimitiveOverrideProps<TextProps>;
    BacktoProfile?: PrimitiveOverrideProps<ViewProps>;
    "ic:round-chevron-left"?: PrimitiveOverrideProps<ViewProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    Details?: PrimitiveOverrideProps<ViewProps>;
    "Input Fields36803119"?: PrimitiveOverrideProps<FlexProps>;
    "Input Fields36803120"?: PrimitiveOverrideProps<FlexProps>;
    "Input Fields36803121"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type UserDetails1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UserDetails1OverridesProps | undefined | null;
}>;
export default function UserDetails1(props: UserDetails1Props): React.ReactElement;
