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
import type { CustomProviderConfig } from "./types";

import Provider from ".";

/*
 * Class.
 */
export default class Custom extends Provider {
    private logo: JSX.Element | undefined;
    /*
     * Constructor.
     */
    constructor(config: CustomProviderConfig) {
        super(config);
        this.logo = config.logo;
    }

    getLogo = (): JSX.Element | undefined => {
        return this.logo;
    };

    /*
     * Static Methods
     */
    static init(config: CustomProviderConfig): Provider {
        if (config === undefined || config.id === undefined) {
            throw new Error("Custom provider config should contain an id attribute");
        }
        return new Custom(config);
    }
}
