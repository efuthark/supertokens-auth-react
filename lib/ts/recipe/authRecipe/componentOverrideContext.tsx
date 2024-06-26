import { createGenericComponentsOverrideContext } from "../../components/componentOverride/genericComponentOverrideContext";

import type { ComponentOverrideMap } from "./types";

const [useContext, Provider] = createGenericComponentsOverrideContext<ComponentOverrideMap>();

export { useContext as useAuthRecipeComponentOverrideContext, Provider as AuthRecipeComponentsOverrideContextProvider };
