/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Home1OverridesProps = {
    Home1?: PrimitiveOverrideProps<ViewProps>;
    GetStartedButton?: PrimitiveOverrideProps<ButtonProps>;
    "A new way to communicate with your friends"?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Logo?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Home1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Home1OverridesProps | undefined | null;
}>;
export default function Home1(props: Home1Props): React.ReactElement;
