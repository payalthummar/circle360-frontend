/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CircleSettingsHeaderFormInputValues = {
    Field0?: string;
};
export declare type CircleSettingsHeaderFormValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CircleSettingsHeaderFormOverridesProps = {
    CircleSettingsHeaderFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CircleSettingsHeaderFormProps = React.PropsWithChildren<{
    overrides?: CircleSettingsHeaderFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: CircleSettingsHeaderFormInputValues) => void;
    onChange?: (fields: CircleSettingsHeaderFormInputValues) => CircleSettingsHeaderFormInputValues;
    onValidate?: CircleSettingsHeaderFormValidationValues;
} & React.CSSProperties>;
export default function CircleSettingsHeaderForm(props: CircleSettingsHeaderFormProps): React.ReactElement;
