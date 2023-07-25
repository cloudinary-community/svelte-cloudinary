export interface CldUploadWidgetPropsOptions {
  // Widget

  encryption?: {
    key: string;
    iv: string;
  };
  defaultSource?: string;
  maxFiles?: number;
  multiple?: boolean;
  sources?: Array<
    | 'camera'
    | 'dropbox'
    | 'facebook'
    | 'gettyimages'
    | 'google_drive'
    | 'image_search'
    | 'instagram'
    | 'istock'
    | 'local'
    | 'shutterstock'
    | 'unsplash'
    | 'url'
  >;

  // Cropping

  cropping?: boolean;
  croppingAspectRatio?: number;
  croppingCoordinatesMode?: string;
  croppingDefaultSelectionRatio?: number;
  croppingShowBackButton?: boolean;
  croppingShowDimensions?: boolean;
  showSkipCropButton?: boolean;

  // Sources

  dropboxAppKey?: string;
  facebookAppId?: string;
  googleApiKey?: string;
  googleDriveClientId?: string;
  instagramClientId?: string;
  searchByRights?: boolean;
  searchBySites?: Array<string>;

  // Upload

  context?: object;
  folder?: string;
  publicId?: string;
  resourceType?: string;
  tags?: Array<string>;
  uploadSignature?: string | Function;
  uploadSignatureTimestamp?: number;

  // Client Side

  clientAllowedFormats?: Array<string>;
  croppingValidateDimensions?: boolean;
  maxChunkSize?: number;
  maxImageFileSize?: number;
  maxImageHeight?: number;
  maxImageWidth?: number;
  maxFileSize?: number;
  maxRawFileSize?: number;
  maxVideoFileSize?: number;
  minImageHeight?: number;
  minImageWidth?: number;
  validateMaxWidthHeight?: boolean;

  // Containing Page

  fieldName?: string;
  form?: string;
  thumbnails?: string;
  thumbnailTransformation?: string | Array<object>;

  // Customization

  buttonCaption?: string;
  buttonClass?: string;
  text?: object;
  theme?: string;
  styles?: object;

  // Advanced

  autoMinimize?: boolean;
  getTags?: Function;
  getUploadPresets?: Function;
  inlineContainer?: any; // string or DOM element
  language?: string;
  preBatch?: Function;
  prepareUploadParams?: Function;
  queueViewPosition?: string;
  showAdvancedOptions?: boolean;
  showCompletedButton?: boolean;
  showInsecurePreview?: boolean;
  showPoweredBy?: boolean;
  showUploadMoreButton?: boolean;
  singleUploadAutoClose?: boolean;
}
export type ResultsEvents =
  | { event: 'abort'; info: { ids: string[]; all: boolean } }
  | { event: 'batch-cancelled'; info: { reason: 'MAX_EXCEEDED' | 'INVALID_PUBLIC_ID' } }
  | { event: 'close' }
  | { event: 'display-changed'; info: 'show' | 'hidden' | 'minimized' | 'expanded' }
  | { event: 'publicid'; info: { id: string } }
  | { event: 'queues-end'; info: Record<string, unknown> }
  | { event: 'queues-start' }
  | {
    event: 'retry';
    info: {
      ids: string[];
      all: boolean;
    };
  }
  | {
    event: 'show-completed';
    info: {
      items: [
        {
          id: string;
          name: string;
          size: number;
          type: string;
          done: boolean;
          progress: number;
          file: Record<string, unknown>;
          uploadInfo: Record<string, unknown>;
        }
      ];
    };
  }
  | {
    event: 'source-changed';
    info: { source: string };
  }
  | {
    event: 'success';
    info: Record<string, unknown>;
  }
  | {
    event: 'tags';
    info: {
      tags: string[];
    }; //tags currently in the field
  }
  | {
    event: 'upload-added';
    info: {
      file: {
        lastModified: string;
        lastModifiedDate: string;
        name: string;
        size: number;
        type: string;
      };
      publicId: 'public-id';
    };
  };
export interface UploadWidget {
  open: (_?: any, { files }?: { files?: [URL] }) => void;
  close: ({ quiet }: { quiet: boolean }) => void;
  update: (options: CldUploadWidgetPropsOptions) => void;
  hide: () => void;
  show: () => void;
  minimize: () => void;
  destroy: ({ removeThumbnails }: { removeThumbnails: boolean }) => void;
  isShowing: () => boolean;
  isMinimized: () => boolean;
  isDestroyed: () => boolean;
}

export type DiscriminatedProps =
  | {
    uploadPreset: string;
    signatureEndpoint?: never;
  }
  | {
    uploadPreset?: never;
    signatureEndpoint: string;
  };
export type CldUploadWidgetProps = {
  onError?: (error: UploadError, widget?: UploadWidget) => void;
  onUpload?: (result: ResultsEvents, widget?: UploadWidget) => void;
  options?: CldUploadWidgetPropsOptions;
  onOpen?: (widget?: UploadWidget) => void;
  onClose?: (widget?: UploadWidget) => void;
} & DiscriminatedProps;

/* From the docs:
* The callback method has the following signature function(error, result) where error is either null if successful
* or an error message if there was a failure,
*/
type UploadError = {
  status: string;
  statusText: string;
} | null
export type ResultCallback = (error: UploadError, result: ResultsEvents) => void;
export type CreateUploadWidgetProps = {
  cloudName: string;
  uploadPreset?: string; // @TODO this should be optional if signature is present
  apiKey?: string;
} & CldUploadWidgetPropsOptions;

