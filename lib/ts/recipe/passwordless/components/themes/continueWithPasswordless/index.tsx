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
 * Imports.
 */
import React from "react";

import { withOverride } from "../../../../../components/componentOverride/withOverride";
import { hasFontDefined } from "../../../../../styles/styles";
import SuperTokens from "../../../../../superTokens";
import { Button } from "../../../../emailpassword/components/library";
import { ThemeBase } from "../themeBase";

import type { PartialAuthComponentProps } from "../../../../../types";
import type { NormalisedConfig } from "../../../types";

const ContinueWithPasswordless: React.FC<{ continueWithPasswordlessClicked: () => void }> = (props) => {
    return (
        <div data-supertokens="continueWithPasswordlessButtonWrapper">
            <Button
                isLoading={false}
                onClick={() => {
                    props.continueWithPasswordlessClicked();
                }}
                type="button"
                label={"PWLESS_COMBO_CONTINUE_WITH_PASSWORDLESS_BUTTON"}
            />
        </div>
    );
};

const ContinueWithPasswordlessWithOverride = withOverride(
    "PasswordlessContinueWithPasswordless",
    ContinueWithPasswordless
);

export const ContinueWithPasswordlessTheme = (
    props: PartialAuthComponentProps & { config: NormalisedConfig; continueWithPasswordlessClicked: () => void }
) => {
    const rootStyle = SuperTokens.getInstanceOrThrow().rootStyle;
    const hasFont = hasFontDefined(rootStyle) || hasFontDefined(props.config.recipeRootStyle);
    return (
        <ThemeBase loadDefaultFont={!hasFont} userStyles={[rootStyle, props.config.recipeRootStyle]}>
            <ContinueWithPasswordlessWithOverride {...props} />
        </ThemeBase>
    );
};
