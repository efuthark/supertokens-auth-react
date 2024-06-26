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

import NormalisedURLPath from "supertokens-web-js/lib/build/normalisedURLPath";

import SuperTokens from "../superTokens";

import { RoutingComponent } from "./routingComponent";

import type { RecipeRouter } from "../recipe/recipeRouter";
import type { ReactRouterDomWithCustomHistory } from "../ui/types";

/*
 * Component.
 */

export function getSuperTokensRoutesForReactRouterDom({
    getReactRouterDomWithCustomHistory,
    recipeList,
    basePath,
}: {
    getReactRouterDomWithCustomHistory: () => ReactRouterDomWithCustomHistory | undefined;
    recipeList: RecipeRouter[];
    basePath: string | undefined;
}): JSX.Element[] {
    const routerInfo = getReactRouterDomWithCustomHistory();
    if (routerInfo === undefined) {
        return [];
    }

    const Route = routerInfo.router.Route;
    const routes = Object.values(
        recipeList.reduce((routes, recipe) => {
            const pathsToFeatureComponentWithRecipeIdMap = recipe.getPathsToFeatureComponentWithRecipeIdMap();
            Object.keys(pathsToFeatureComponentWithRecipeIdMap).forEach((path) => {
                path = path === "" ? "/" : path;
                const pathForRouter = getPathForRouter(basePath, path);
                if (!(path in routes)) {
                    routes[path] = (
                        <Route exact key={`st-${path}`} path={pathForRouter}>
                            <RoutingComponent
                                getReactRouterDomWithCustomHistory={getReactRouterDomWithCustomHistory}
                                preBuiltUIList={recipeList}
                                path={path}
                            />
                        </Route>
                    );
                }
            });

            return routes;
        }, {} as Record<string, JSX.Element>)
    );

    if (
        !SuperTokens.getInstanceOrThrow().disableAuthRoute &&
        recipeList.some((ui) => ui.getAuthComponents().length !== 0)
    ) {
        const path = SuperTokens.getInstanceOrThrow()
            .appInfo.websiteBasePath.appendPath(new NormalisedURLPath("/"))
            .getAsStringDangerous();
        routes.push(
            <Route key={"st-/auth"} exact path={getPathForRouter(basePath, path)}>
                <RoutingComponent
                    getReactRouterDomWithCustomHistory={getReactRouterDomWithCustomHistory}
                    preBuiltUIList={recipeList}
                    path={path}
                />
            </Route>
        );
    }
    return routes;
}

function getPathForRouter(basePath: string | undefined, path: string) {
    let pathForRouter = path;
    if (basePath !== undefined) {
        if (pathForRouter.startsWith(basePath)) {
            pathForRouter = pathForRouter.slice(basePath.length);
            if (!pathForRouter.startsWith("/")) {
                pathForRouter = "/" + pathForRouter;
            }
        } else {
            throw new Error("basePath has to be a prefix of websiteBasePath passed to SuperTokens.init");
        }
    }
    return pathForRouter;
}
