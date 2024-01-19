export interface CloudinaryVideoPlayer {
    on: Function;
}
export interface CloudinaryVideoPlayerOptionsLogo {
    logoImageUrl?: string;
    logoOnclickUrl?: string;
    showLogo?: boolean;
}
export interface CloudinaryVideoPlayerOptions extends CloudinaryVideoPlayerOptionsLogo {
    aiHighlightsGraph?: boolean;
    bigPlayButton?: boolean | string;
    colors?: CloudinaryVideoPlayerOptionsColors;
    controlBar?: {
        pictureInPictureToggle?: boolean;
        chaptersButton?: boolean;
    };
    controls?: boolean;
    floatingWhenNotVisible?: string;
    fluid?: boolean;
    fontFace?: string;
    hideContextMenu?: boolean;
    interactionAreas?: any;
    playbackRates?: Array<any>;
    playlistWidget?: {
        direction?: string;
        total?: string;
    };
    posterOptions?: CloudinaryVideoPlayerOptionPosterOptions;
    showJumpControls?: boolean;
    seekThumbnails?: boolean;
    videoJS?: object;
    autoPlay?: string | boolean | undefined;
    autoplay?: string | boolean | undefined;
    autoplayMode?: string;
    autoShowRecommendations?: boolean;
    loop?: boolean;
    maxTries?: Number;
    muted?: boolean;
    playedEventPercents?: number[];
    playedEventTimes?: null | Array<any>;
    playsinline?: boolean;
    videoTimeout?: number;
    withCredentials?: boolean;
    chapters?: object;
    preload?: string;
    publicId?: string;
    sourceTransformation?: object;
    sourceTypes?: Array<string>;
    transformation?: Array<object> | object;
    ads?: {
        adTagUrl?: string;
        adsInPlaylist?: string;
        showCountdown?: boolean;
        adLabel?: string;
        locale?: string;
        prerollTimeout?: number;
        postrollTimeout?: number;
    };
    analytics?: boolean;
    allowUsageReport?: Boolean;
    cloud_name?: string;
    cname?: string;
    privateCdn?: boolean;
    queryParams?: Record<string, string | number | boolean> | string;
    secure?: boolean;
    secureDistribution?: string;
    language?: string;
    languages?: Record<string, object>;
}
export interface CloudinaryVideoPlayerOptionsColors {
    accent?: string;
    base?: string;
    text?: string;
}
export interface CloudinaryVideoPlayerOptionPosterOptions {
    publicId: string;
}
