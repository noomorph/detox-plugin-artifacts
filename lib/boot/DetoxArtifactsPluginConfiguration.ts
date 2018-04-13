export type DetoxArtifactsPluginConfiguration = {
    takeScreenshots: 'none' | 'failing' | 'all';
    recordVideos: 'none' | 'failing' | 'all';
    artifactsLocation: string;
};
