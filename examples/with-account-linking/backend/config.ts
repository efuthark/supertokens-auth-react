import ThirdParty from "supertokens-node/recipe/thirdparty";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";
import Passwordless from "supertokens-node/recipe/passwordless";
import AccountLinking from "supertokens-node/recipe/accountlinking";
import EmailVerification from "supertokens-node/recipe/emailverification";
import { TypeInput } from "supertokens-node/types";
import UserMetadata from "supertokens-node/recipe/usermetadata";
import Dashboard from "supertokens-node/recipe/dashboard";
import { getUser } from "supertokens-node";

export function getApiDomain() {
    const apiPort = process.env.REACT_APP_API_PORT || 3001;
    const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
    return apiUrl;
}

export function getWebsiteDomain() {
    const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
    const websiteUrl = process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
    return websiteUrl;
}

let otp = "";

export function getOtp() {
    return otp;
}

export const SuperTokensConfig: TypeInput = {
    supertokens: {
        // this is the location of the SuperTokens core.
        connectionURI: "https://try.supertokens.com",
    },
    appInfo: {
        appName: "SuperTokens Demo App",
        apiDomain: getApiDomain(),
        websiteDomain: getWebsiteDomain(),
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
        EmailVerification.init({
            mode: "REQUIRED",
        }),
        AccountLinking.init({
            shouldDoAutomaticAccountLinking: async (newAccountInfo, user, _session, _tenantId, context) => {
                if (context.doNotLink === true) {
                    return {
                        shouldAutomaticallyLink: false,
                    };
                }

                return {
                    shouldAutomaticallyLink: true,
                    shouldRequireVerification: true,
                };
            },
        }),
        EmailPassword.init(),
        ThirdParty.init({
            signInAndUpFeature: {
                providers: [
                    // We have provided you with development keys which you can use for testing.
                    // IMPORTANT: Please replace them with your own OAuth keys for production use.
                    {
                        config: {
                            thirdPartyId: "google",
                            clients: [
                                {
                                    clientId:
                                        "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                                    clientSecret: "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",
                                },
                            ],
                        },
                    },
                    {
                        config: {
                            thirdPartyId: "github",
                            clients: [
                                {
                                    clientId: "467101b197249757c71f",
                                    clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd",
                                },
                            ],
                        },
                    },
                ],
            },
        }),
        Passwordless.init({
            contactMethod: "EMAIL_OR_PHONE",
            flowType: "USER_INPUT_CODE_AND_MAGIC_LINK",
            smsDelivery: {
                override: (oI) => {
                    return {
                        ...oI,
                        sendSms: async (input) => {
                            console.log("OTP is:", input.userInputCode!);
                            otp = input.userInputCode!;
                        },
                    };
                },
            },
        }),
        Session.init(),
        Dashboard.init(),
    ],
};
