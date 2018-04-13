import {DetoxBehaviorPluginAPI} from "detox";
import {registerArtifactsLocationParameter} from "./parameters/artifactsLocation";
import {registerTakeScreenshotsParameter} from "./parameters/takeScreenshots";
import {registerRecordVideosParameter} from "./parameters/recordVideos";

export function registerParameters(api: DetoxBehaviorPluginAPI): void {
    registerArtifactsLocationParameter(api);
    registerTakeScreenshotsParameter(api);
    registerRecordVideosParameter(api);
}