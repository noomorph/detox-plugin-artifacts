import {DetoxBehaviorPlugin, DetoxBehaviorPluginAPI} from "detox";
import {registerArtifactsLocationParameter} from "./parameters/artifactsLocation";
import {registerTakeScreenshotsParameter} from "./parameters/takeScreenshots";
import {registerRecordVideosParameter} from "./parameters/recordVideos";
import {DeviceArtifactsAPI} from "../facade/DeviceArtifactsAPI";
import {DetoxArtifactsPluginConfiguration} from "./DetoxArtifactsPluginConfiguration";

export function instantiateDetoxArtifactsPlugin(api: DetoxBehaviorPluginAPI): DetoxBehaviorPlugin {
    registerArtifactsLocationParameter(api);
    registerTakeScreenshotsParameter(api);
    registerRecordVideosParameter(api);

    return {
        name: 'detox-plugin-artifacts',

        async onStart() {
        },

        async onBeforeTest() {
            const device = api.getDevice();
            const config = api.getConfiguration() as DetoxArtifactsPluginConfiguration;
            const artifacts: DeviceArtifactsAPI = device.plugins.artifacts;

            const screenshotName = '';
            if (config.takeScreenshots) {
                await artifacts.takeScreenshot(screenshotName);
            }

            const videoName = '';
            if (config.recordVideos) {
                await artifacts.startVideo();
            }
        },

        async onAfterTest() {
            api.getCurrentTestContext()


        },

        async onExit() {

        },
    };
}
