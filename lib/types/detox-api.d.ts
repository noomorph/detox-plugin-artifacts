declare module "detox" {

    type DetoxParameterMetadata<T> = {
        readonly camelCaseName: string;
        readonly description?: string;
        readonly shorthand?: string;
        readonly defaultValue?: T;
        readonly required?: boolean;

        parse?(value: string, accumulator: T): T;
    };

    type DetoxTestContext = {
        readonly incrementalId: number;
        readonly title: string;
        readonly fullTitle: string;
        readonly failed: boolean;
    };

    type DetoxDeviceContext = {
    };

    interface DetoxBehaviorPluginAPI {
        registerParameter(parameterMetadata: DetoxParameterMetadata<any>): void;
        getCurrentTestContext(): Readonly<DetoxTestContext> | null;
        getCurrentDeviceContext(): Readonly<DetoxDeviceContext> | null;
    }

    interface DetoxBehaviorPlugin {
        readonly name: string;

        onStart?(): Promise<void>;
        onBeforeTest?(): Promise<void>;
        onAfterTest?(): Promise<void>;
        onExit?(): Promise<void>;
    }

    type DetoxBehaviorPluginFactory = (api: DetoxBehaviorPluginAPI) => DetoxBehaviorPlugin;
}