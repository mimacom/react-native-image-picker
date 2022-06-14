import { NativeModules } from 'react-native';

import { Callback, CameraOptions, ImageLibraryOptions } from './types';

export * from './types';

const DEFAULT_OPTIONS: CameraOptions = {
  cameraType: 'back',
  durationLimit: 0,
  includeBase64: false,
  maxHeight: 0,
  maxWidth: 0,
  mediaType: 'photo',
  quality: 1,
  returnOriginal: false,
  saveToPhotos: false,
  videoQuality: 'high',
};

export function launchCamera(options: CameraOptions, callback: Callback) {
  if (typeof callback !== 'function') {
    console.error('Send proper callback function, check API');
    return;
  }

  NativeModules.ImagePickerManager.launchCamera(
    {...DEFAULT_OPTIONS, ...options},
    callback,
  );
}

export function launchImageLibrary(
  options: ImageLibraryOptions,
  callback: Callback,
) {
  if (typeof callback !== 'function') {
    console.error('Send proper callback function, check API');
    return;
  }
  NativeModules.ImagePickerManager.launchImageLibrary(
    {...DEFAULT_OPTIONS, ...options},
    callback,
  );
}
