/// <reference types="react" />
import { RecipeRouter } from "../recipeRouter";
import MFAThemeWrapper from "./components/themes/mfa";
import Passwordless from "./recipe";
import type { LoginAttemptInfo } from "./types";
import type { GenericComponentOverrideMap } from "../../components/componentOverride/componentOverrideContext";
import type { RecipeFeatureComponentMap, FeatureBaseProps, Navigate, UserContext } from "../../types";
import type { AuthComponent } from "../../types";
export declare class PasswordlessPreBuiltUI extends RecipeRouter {
    readonly recipeInstance: Passwordless;
    static instance?: PasswordlessPreBuiltUI;
    languageTranslations: {
        en: {
            GENERAL_ERROR_EMAIL_UNDEFINED: string;
            GENERAL_ERROR_EMAIL_NON_STRING: string;
            GENERAL_ERROR_EMAIL_INVALID: string;
            GENERAL_ERROR_PHONE_UNDEFINED: string;
            GENERAL_ERROR_PHONE_NON_STRING: string;
            GENERAL_ERROR_PHONE_INVALID: string;
            GENERAL_ERROR_OTP_UNDEFINED: string;
            GENERAL_ERROR_OTP_INVALID: string;
            GENERAL_ERROR_OTP_EXPIRED: string;
            GENERAL_ERROR_OTP_NON_STRING: string;
            GENERAL_ERROR_OTP_EMPTY: string;
            ERROR_SIGN_IN_UP_LINK: string;
            ERROR_SIGN_IN_UP_RESEND_RESTART_FLOW: string;
            ERROR_SIGN_IN_UP_CODE_CONSUME_RESTART_FLOW: string;
            PWLESS_SIGN_IN_UP_EMAIL_LABEL: string;
            PWLESS_SIGN_IN_UP_PHONE_LABEL: string;
            PWLESS_SIGN_IN_UP_SWITCH_TO_PHONE: string;
            PWLESS_SIGN_IN_UP_SWITCH_TO_EMAIL: string;
            PWLESS_SIGN_IN_UP_CONTINUE_BUTTON: string;
            PWLESS_COMBO_CONTINUE_WITH_PASSWORDLESS_LINK: string;
            PWLESS_COMBO_CONTINUE_WITH_PASSWORDLESS_BUTTON: string;
            PWLESS_COMBO_PASSWORD_LABEL: string;
            PWLESS_COMBO_FORGOT_PW_LINK: string;
            PWLESS_LINK_SENT_RESEND_SUCCESS: string;
            PWLESS_LINK_SENT_RESEND_TITLE: string;
            PWLESS_LINK_SENT_RESEND_DESC_START_EMAIL: string;
            PWLESS_LINK_SENT_RESEND_DESC_START_PHONE: string;
            PWLESS_LINK_SENT_RESEND_DESC_END_EMAIL: string;
            PWLESS_LINK_SENT_RESEND_DESC_END_PHONE: string;
            PWLESS_SIGN_IN_UP_CHANGE_CONTACT_INFO_EMAIL: string;
            PWLESS_SIGN_IN_UP_CHANGE_CONTACT_INFO_PHONE: string;
            PWLESS_LINK_CLICKED_CONTINUE_HEADER: string;
            PWLESS_LINK_CLICKED_CONTINUE_DESC: string;
            PWLESS_LINK_CLICKED_CONTINUE_BUTTON: string;
            PWLESS_RESEND_SUCCESS_EMAIL: string;
            PWLESS_RESEND_SUCCESS_PHONE: string;
            PWLESS_RESEND_BTN_DISABLED_START: string;
            PWLESS_RESEND_BTN_DISABLED_END: string;
            PWLESS_RESEND_BTN_EMAIL: string;
            PWLESS_RESEND_BTN_PHONE: string;
            PWLESS_USER_INPUT_CODE_HEADER_TITLE: string;
            PWLESS_USER_INPUT_CODE_HEADER_SUBTITLE: string;
            PWLESS_USER_INPUT_CODE_HEADER_SUBTITLE_LINK: string;
            PWLESS_USER_INPUT_CODE_INPUT_LABEL: string;
            PWLESS_MFA_HEADER_TITLE_PHONE: string;
            PWLESS_MFA_HEADER_TITLE_EMAIL: string;
            PWLESS_MFA_FOOTER_LOGOUT: string;
            "Failed to generate a one time code. Please try again": undefined;
            "Phone number is invalid": undefined;
            "Email is invalid": undefined;
            "Cannot sign in / up due to security reasons. Please try a different login method or contact support. (ERR_CODE_002)": undefined;
            "Cannot sign in / up due to security reasons. Please try a different login method or contact support. (ERR_CODE_003)": undefined;
            "Cannot sign in / up due to security reasons. Please contact support. (ERR_CODE_017)": undefined;
            "Cannot sign in / up due to security reasons. Please contact support. (ERR_CODE_018)": undefined;
            "Cannot sign in / up due to security reasons. Please contact support. (ERR_CODE_019)": undefined;
            AUTH_PAGE_HEADER_TITLE_SIGN_IN_AND_UP: string;
            AUTH_PAGE_HEADER_TITLE_SIGN_IN: string;
            AUTH_PAGE_HEADER_TITLE_SIGN_UP: string;
            AUTH_PAGE_HEADER_SUBTITLE_SIGN_IN_START: string;
            AUTH_PAGE_HEADER_SUBTITLE_SIGN_IN_SIGN_UP_LINK: string;
            AUTH_PAGE_HEADER_SUBTITLE_SIGN_IN_END: string;
            AUTH_PAGE_HEADER_SUBTITLE_SIGN_UP_START: string;
            AUTH_PAGE_HEADER_SUBTITLE_SIGN_UP_SIGN_IN_LINK: string;
            AUTH_PAGE_HEADER_SUBTITLE_SIGN_UP_END: string;
            AUTH_PAGE_FOOTER_START: string;
            AUTH_PAGE_FOOTER_TOS: string;
            AUTH_PAGE_FOOTER_AND: string;
            AUTH_PAGE_FOOTER_PP: string;
            AUTH_PAGE_FOOTER_END: string;
            DIVIDER_OR: string;
            BRANDING_POWERED_BY_START: string;
            BRANDING_POWERED_BY_END: string;
            SOMETHING_WENT_WRONG_ERROR: string;
            SOMETHING_WENT_WRONG_ERROR_RELOAD: string;
        };
    };
    constructor(recipeInstance: Passwordless);
    static getInstanceOrInitAndGetInstance(): PasswordlessPreBuiltUI;
    static getFeatures(useComponentOverrides?: () => GenericComponentOverrideMap<any>): RecipeFeatureComponentMap;
    static getFeatureComponent(
        componentName: "linkClickedScreen" | "otp-phone" | "otp-email",
        props: FeatureBaseProps<{
            redirectOnSessionExists?: boolean;
            userContext?: UserContext;
        }>,
        useComponentOverrides?: () => GenericComponentOverrideMap<any>
    ): JSX.Element;
    getFeatures: (useComponentOverrides?: () => GenericComponentOverrideMap<any>) => RecipeFeatureComponentMap;
    getFeatureComponent: (
        componentName: "linkClickedScreen" | "otp-phone" | "otp-email",
        props: FeatureBaseProps<{
            redirectOnSessionExists?: boolean;
            userContext?: UserContext;
        }>,
        useComponentOverrides?: () => GenericComponentOverrideMap<any>
    ) => JSX.Element;
    getAuthComponents(): AuthComponent<LoginAttemptInfo>[];
    static reset(): void;
    static LinkClicked: (
        props: FeatureBaseProps<{
            navigate?: Navigate;
            userContext?: UserContext;
        }>
    ) => JSX.Element;
    static MfaOtpPhone: (
        props: FeatureBaseProps<{
            navigate?: Navigate;
            userContext?: UserContext;
        }>
    ) => JSX.Element;
    static MfaOtpEmail: (
        props: FeatureBaseProps<{
            navigate?: Navigate;
            userContext?: UserContext;
        }>
    ) => JSX.Element;
    static MFAOTPTheme: typeof MFAThemeWrapper;
}
declare const LinkClicked: (
    props: FeatureBaseProps<{
        navigate?: Navigate;
        userContext?: UserContext;
    }>
) => JSX.Element;
declare const MfaOtpPhone: (
    props: FeatureBaseProps<{
        navigate?: Navigate;
        userContext?: UserContext;
    }>
) => JSX.Element;
declare const MfaOtpEmail: (
    props: FeatureBaseProps<{
        navigate?: Navigate;
        userContext?: UserContext;
    }>
) => JSX.Element;
export { LinkClicked, MfaOtpPhone, MfaOtpEmail, MFAThemeWrapper as MFAOTPTheme };
