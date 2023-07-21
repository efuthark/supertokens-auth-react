"use strict";

var genericComponentOverrideContext = require("./genericComponentOverrideContext.js");
var superTokens = require("./superTokens.js");
var ThirdPartyEmailPasswordWebJS = require("supertokens-web-js/recipe/thirdpartyemailpassword");
var utils = require("./authRecipe-shared.js");
var recipe$1 = require("./emailpassword-shared4.js");
var recipe = require("./thirdparty-shared.js");

function _interopDefault(e) {
    return e && e.__esModule ? e : { default: e };
}

var ThirdPartyEmailPasswordWebJS__default = /*#__PURE__*/ _interopDefault(ThirdPartyEmailPasswordWebJS);

var _a = genericComponentOverrideContext.createGenericComponentsOverrideContext(),
    useContext = _a[0],
    Provider = _a[1];

var getFunctionOverrides = function (recipeId, onHandleEvent) {
    return function (originalImp) {
        return superTokens.__assign(superTokens.__assign({}, originalImp), {
            thirdPartySignInAndUp: function (input) {
                return superTokens.__awaiter(this, void 0, void 0, function () {
                    var response;
                    return superTokens.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                return [4 /*yield*/, originalImp.thirdPartySignInAndUp(input)];
                            case 1:
                                response = _a.sent();
                                if (response.status === "OK") {
                                    onHandleEvent({
                                        action: "SUCCESS",
                                        isNewUser: response.createdNewUser,
                                        user: response.user,
                                        userContext: input.userContext,
                                    });
                                }
                                return [2 /*return*/, response];
                        }
                    });
                });
            },
            setStateAndOtherInfoToStorage: function (input) {
                return originalImp.setStateAndOtherInfoToStorage({
                    state: superTokens.__assign(superTokens.__assign({}, input.state), {
                        rid: recipeId,
                        redirectToPath: superTokens.getRedirectToPathFromURL(),
                    }),
                    userContext: input.userContext,
                });
            },
            submitNewPassword: function (input) {
                return superTokens.__awaiter(this, void 0, void 0, function () {
                    var response;
                    return superTokens.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                return [
                                    4 /*yield*/,
                                    originalImp.submitNewPassword(
                                        superTokens.__assign(superTokens.__assign({}, input), {
                                            formFields: [input.formFields[0]],
                                        })
                                    ),
                                ];
                            case 1:
                                response = _a.sent();
                                if (response.status === "OK") {
                                    onHandleEvent({
                                        action: "PASSWORD_RESET_SUCCESSFUL",
                                        userContext: input.userContext,
                                    });
                                }
                                return [2 /*return*/, response];
                        }
                    });
                });
            },
            sendPasswordResetEmail: function (input) {
                return superTokens.__awaiter(this, void 0, void 0, function () {
                    var response;
                    return superTokens.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                return [4 /*yield*/, originalImp.sendPasswordResetEmail(input)];
                            case 1:
                                response = _a.sent();
                                if (response.status === "OK") {
                                    onHandleEvent({
                                        action: "RESET_PASSWORD_EMAIL_SENT",
                                        userContext: input.userContext,
                                    });
                                }
                                return [2 /*return*/, response];
                        }
                    });
                });
            },
            emailPasswordSignUp: function (input) {
                return superTokens.__awaiter(this, void 0, void 0, function () {
                    var response;
                    return superTokens.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                return [4 /*yield*/, originalImp.emailPasswordSignUp(input)];
                            case 1:
                                response = _a.sent();
                                if (response.status === "OK") {
                                    onHandleEvent({
                                        action: "SUCCESS",
                                        isNewUser: true,
                                        user: response.user,
                                        userContext: input.userContext,
                                    });
                                }
                                return [2 /*return*/, response];
                        }
                    });
                });
            },
            emailPasswordSignIn: function (input) {
                return superTokens.__awaiter(this, void 0, void 0, function () {
                    var response;
                    return superTokens.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                return [4 /*yield*/, originalImp.emailPasswordSignIn(input)];
                            case 1:
                                response = _a.sent();
                                if (response.status === "OK") {
                                    onHandleEvent({
                                        action: "SUCCESS",
                                        isNewUser: false,
                                        user: response.user,
                                        userContext: input.userContext,
                                    });
                                }
                                return [2 /*return*/, response];
                        }
                    });
                });
            },
        });
    };
};

/* Copyright (c) 2022, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
function getRecipeImplementation$1(originalImplementation) {
    return {
        doesEmailExist: originalImplementation.doesEmailExist.bind(originalImplementation),
        sendPasswordResetEmail: originalImplementation.sendPasswordResetEmail.bind(originalImplementation),
        getResetPasswordTokenFromURL: originalImplementation.getResetPasswordTokenFromURL.bind(originalImplementation),
        submitNewPassword: originalImplementation.submitNewPassword.bind(originalImplementation),
        signIn: originalImplementation.emailPasswordSignIn.bind(originalImplementation),
        signUp: originalImplementation.emailPasswordSignUp.bind(originalImplementation),
        getTenantIdFromURL: originalImplementation.getTenantIdFromURL.bind(originalImplementation),
    };
}

/* Copyright (c) 2022, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
function getRecipeImplementation(originalImplementation) {
    return {
        getAuthorisationURLWithQueryParamsAndSetState:
            originalImplementation.getAuthorisationURLWithQueryParamsAndSetState.bind(originalImplementation),
        getStateAndOtherInfoFromStorage:
            originalImplementation.getStateAndOtherInfoFromStorage.bind(originalImplementation),
        signInAndUp: originalImplementation.thirdPartySignInAndUp.bind(originalImplementation),
    };
}

/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
/*
 * Methods.
 */
function normaliseThirdPartyEmailPasswordConfig(config) {
    if (config === undefined) {
        config = {};
    }
    var override = superTokens.__assign(
        {
            functions: function (originalImplementation) {
                return originalImplementation;
            },
        },
        config.override
    );
    var signInAndUpFeature = normaliseSignInUpFeatureConfig(config.signInAndUpFeature);
    var thirdpartyNormalisedConfig = recipe.normaliseThirdPartyConfig({
        getRedirectionURL: config.getRedirectionURL,
        style: config.style,
        onHandleEvent: config.onHandleEvent,
        preAPIHook: config.preAPIHook,
        signInAndUpFeature: config.signInAndUpFeature,
        oAuthCallbackScreen: config.oAuthCallbackScreen,
        useShadowDom: config.useShadowDom,
    });
    var emailPasswordNormalisedConfig = recipe$1.normaliseEmailPasswordConfig({
        getRedirectionURL: config.getRedirectionURL,
        onHandleEvent: config.onHandleEvent,
        style: config.style,
        preAPIHook: config.preAPIHook,
        resetPasswordUsingTokenFeature: config.resetPasswordUsingTokenFeature,
        signInAndUpFeature: config.signInAndUpFeature,
        useShadowDom: config.useShadowDom,
    });
    return superTokens.__assign(superTokens.__assign({}, utils.normaliseAuthRecipe(config)), {
        emailPasswordConfig: emailPasswordNormalisedConfig,
        thirdPartyConfig: thirdpartyNormalisedConfig,
        disableEmailPassword: config.disableEmailPassword === true,
        signInAndUpFeature: signInAndUpFeature,
        override: override,
    });
}
function normaliseSignInUpFeatureConfig(config) {
    var disableDefaultUI =
        config === undefined || config.disableDefaultUI === undefined ? false : config.disableDefaultUI;
    var defaultToSignUp = config === undefined || config.defaultToSignUp === undefined ? false : config.defaultToSignUp;
    return superTokens.__assign(superTokens.__assign({}, config), {
        disableDefaultUI: disableDefaultUI,
        defaultToSignUp: defaultToSignUp,
        style: config === undefined || config.style === undefined ? "" : config.style,
    });
}

/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
var ThirdPartyEmailPassword = /** @class */ (function (_super) {
    superTokens.__extends(ThirdPartyEmailPassword, _super);
    function ThirdPartyEmailPassword(config, recipes, webJSRecipe) {
        if (webJSRecipe === void 0) {
            webJSRecipe = ThirdPartyEmailPasswordWebJS__default.default;
        }
        var _this = this;
        var _a;
        var disableThirdParty =
            ((_a = config.signInAndUpFeature) === null || _a === void 0 ? void 0 : _a.providers) === undefined ||
            config.signInAndUpFeature.providers.length === 0;
        if (
            superTokens.SuperTokens.usesDynamicLoginMethods === false &&
            config.disableEmailPassword === true &&
            disableThirdParty
        ) {
            throw new Error("You need to enable either email password or third party providers login.");
        }
        _this = _super.call(this, config) || this;
        _this.webJSRecipe = webJSRecipe;
        _this.recipeID = ThirdPartyEmailPassword.RECIPE_ID;
        _this.getDefaultRedirectionURL = function (context) {
            return superTokens.__awaiter(_this, void 0, void 0, function () {
                return superTokens.__generator(this, function (_a) {
                    if (context.action === "RESET_PASSWORD") {
                        if (this.emailPasswordRecipe === undefined) {
                            throw new Error("Should not come here...");
                        }
                        return [2 /*return*/, this.emailPasswordRecipe.getDefaultRedirectionURL(context)];
                    } else {
                        return [2 /*return*/, this.getAuthRecipeDefaultRedirectionURL(context)];
                    }
                });
            });
        };
        _this.emailPasswordRecipe =
            recipes.emailPasswordInstance !== undefined
                ? recipes.emailPasswordInstance
                : superTokens.SuperTokens.usesDynamicLoginMethods === false && _this.config.disableEmailPassword
                ? undefined
                : new recipe$1.EmailPassword(
                      superTokens.__assign(superTokens.__assign({}, _this.config.emailPasswordConfig), {
                          appInfo: _this.config.appInfo,
                          recipeId: _this.config.recipeId,
                      }),
                      // ThirdPartyEmailPassword has emailPassword and thirdparty instances initialized within it,
                      // so we pass the ThirdPartyEmailPassword instance to getRecipeImpl functions to get each recipe instance
                      // importing the sub-recipes (thirdparty, emailpassword) directly from web-js would throw an error due to them not being initialized
                      // getting the appropriate interfaces (the ones exposed by the recipe index files) through the web-js
                      // instance of ThirdPartyEmailPassword would require reworking web-js and is impractical
                      getRecipeImplementation$1(_this.webJSRecipe)
                  );
        // we initialise this recipe only if the user has provided thirdparty
        // providers.
        _this.thirdPartyRecipe =
            recipes.thirdPartyInstance !== undefined
                ? recipes.thirdPartyInstance
                : superTokens.SuperTokens.usesDynamicLoginMethods === false && disableThirdParty
                ? undefined
                : new recipe.ThirdParty(
                      superTokens.__assign(superTokens.__assign({}, _this.config.thirdPartyConfig), {
                          appInfo: _this.config.appInfo,
                          recipeId: _this.config.recipeId,
                      }),
                      getRecipeImplementation(_this.webJSRecipe)
                  );
        return _this;
    }
    /*
     * Static methods.
     */
    ThirdPartyEmailPassword.init = function (config) {
        var normalisedConfig = normaliseThirdPartyEmailPasswordConfig(config);
        return {
            recipeID: ThirdPartyEmailPassword.RECIPE_ID,
            authReact: function (appInfo) {
                ThirdPartyEmailPassword.instance = new ThirdPartyEmailPassword(
                    superTokens.__assign(superTokens.__assign({}, normalisedConfig), {
                        appInfo: appInfo,
                        recipeId: ThirdPartyEmailPassword.RECIPE_ID,
                    }),
                    {
                        emailPasswordInstance: undefined,
                        thirdPartyInstance: undefined,
                    }
                );
                return ThirdPartyEmailPassword.instance;
            },
            webJS: ThirdPartyEmailPasswordWebJS__default.default.init(
                superTokens.__assign(superTokens.__assign({}, normalisedConfig), {
                    override: {
                        functions: function (originalImpl, builder) {
                            var functions = getFunctionOverrides(
                                ThirdPartyEmailPassword.RECIPE_ID,
                                normalisedConfig.onHandleEvent
                            );
                            builder.override(functions);
                            builder.override(normalisedConfig.override.functions);
                            return originalImpl;
                        },
                    },
                })
            ),
        };
    };
    ThirdPartyEmailPassword.getInstanceOrThrow = function () {
        if (ThirdPartyEmailPassword.instance === undefined) {
            var error =
                "No instance of ThirdPartyEmailPassword found. Make sure to call the ThirdPartyEmailPassword.init method." +
                "See https://supertokens.io/docs/thirdpartyemailpassword/quick-setup/frontend";
            // eslint-disable-next-line supertokens-auth-react/no-direct-window-object
            if (typeof window === "undefined") {
                error = error + superTokens.SSR_ERROR;
            }
            throw Error(error);
        }
        return ThirdPartyEmailPassword.instance;
    };
    /*
     * Tests methods.
     */
    ThirdPartyEmailPassword.reset = function () {
        if (!superTokens.isTest()) {
            return;
        }
        ThirdPartyEmailPassword.instance = undefined;
        return;
    };
    ThirdPartyEmailPassword.RECIPE_ID = "thirdpartyemailpassword";
    return ThirdPartyEmailPassword;
})(utils.AuthRecipe);

exports.Provider = Provider;
exports.ThirdPartyEmailPassword = ThirdPartyEmailPassword;
exports.useContext = useContext;