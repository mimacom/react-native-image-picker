import { Callback, CameraOptions, ImageLibraryOptions } from '../../src/types';

export * from '../../src/types';
export declare function launchCamera(
  options: CameraOptions,
  callback: Callback,
): void;
export declare function launchImageLibrary(
  options: ImageLibraryOptions,
  callback: Callback,
): void;
