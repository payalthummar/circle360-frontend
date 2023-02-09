/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SendInviteOverridesProps = {
    SendInvite?: PrimitiveOverrideProps<ViewProps>;
    QRCodeImage?: PrimitiveOverrideProps<ImageProps>;
    InvitationCode?: PrimitiveOverrideProps<TextProps>;
    "Here is your invitation code:"?: PrimitiveOverrideProps<TextProps>;
    "Frame 418"?: PrimitiveOverrideProps<ViewProps>;
    SendInvite37242856?: PrimitiveOverrideProps<ViewProps>;
    SendInviteButton?: PrimitiveOverrideProps<ButtonProps>;
    EmailTextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Please enter the email of the member you would like to invite:"?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    BackToMyCircles?: PrimitiveOverrideProps<ViewProps>;
    BackIcon?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    ProfileImage?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SendInviteProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SendInviteOverridesProps | undefined | null;
}>;
export default function SendInvite(props: SendInviteProps): React.ReactElement;
