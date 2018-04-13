import {registerParameters} from "./registerParameters";
import {DetoxBehaviorPlugin, DetoxBehaviorPluginAPI} from "detox";

export function instantiateDetoxArtifactsPlugin(api: DetoxBehaviorPluginAPI): DetoxBehaviorPlugin {
    registerParameters(api);

    return {
        name: 'detox-plugin-artifacts',

        async onStart() {

        },

        async onBeforeTest() {

        },

        async onAfterTest() {

        },

        async onExit() {

        },
    };
}
