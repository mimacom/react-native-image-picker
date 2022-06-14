export declare type Callback = (response: ImagePickerResponse) => any;
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
  type?: string;
  uri?: string;
  width?: number;
}
export declare type AndroidVideoOptions = 'low' | 'high';
export declare type CameraType = 'back' | 'front';
export declare type ErrorCode = 'camera_unavailable' | 'permission' | 'others';
export declare type MediaType = 'photo' | 'video' | 'mixed';
export declare type iOSVideoOptions = 'low' | 'medium' | 'high';
export declare type PhotoQuality =
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
