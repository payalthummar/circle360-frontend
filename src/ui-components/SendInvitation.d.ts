/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SendInvitationOverridesProps = {
    SendInvitation?: PrimitiveOverrideProps<ViewProps>;
    SendInvitation39343139?: PrimitiveOverrideProps<ViewProps>;
    BackToMyCircles?: PrimitiveOverrideProps<ViewProps>;
    BackIcon?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    ProfileImage?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SendInvitationProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SendInvitationOverridesProps | undefined | null;
}>;
export default function SendInvitation(props: SendInvitationProps): React.ReactElement;
