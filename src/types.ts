export type Callback = (response: ImagePickerResponse) => any;

export interface ImageLibraryOptions {
  includeBase64?: boolean;
  maxHeight?: number;
  maxWidth?: number;
  mediaType: MediaType;
  quality?: PhotoQuality;
  returnOriginal?: boolean; // return original image, without re-compression
  videoQuality?: AndroidVideoOptions | iOSVideoOptions;
}

export interface CameraOptions extends ImageLibraryOptions {
  cameraType?: CameraType;
  durationLimit?: number;
  saveToPhotos?: boolean;
}

export interface ImagePickerResponse {
  base64?: string;
  didCancel?: boolean;
  duration?: number;
  errorCode?: ErrorCode;
  errorMessage?: string;
  fileName?: string;
  fileSize?: number;
  height?: number;
  type?: string; //TODO
  uri?: string;
  width?: number;
}

export type AndroidVideoOptions = 'low' | 'high';
export type CameraType = 'back' | 'front';
export type ErrorCode = 'camera_unavailable' | 'permission' | 'others';
export type MediaType = 'photo' | 'video' | 'mixed';
export type iOSVideoOptions = 'low' | 'medium' | 'high';
export type PhotoQuality =
  | 0
  | 0.1
  | 0.2
  | 0.3
  | 0.4
  | 0.5
  | 0.6
  | 0.7
  | 0.8
  | 0.9
  | 1;
