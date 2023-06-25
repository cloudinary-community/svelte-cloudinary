// This types still comes wrong
// import type { ImageProps } from '@unpic/svelte'
// But this is the same used by the @unpic/svelte package
import type { ConstrainedImageProps, FixedImageProps, FullWidthImageProps, UnpicImageProps } from '@unpic/core';
import type { HTMLImgAttributes } from 'svelte/elements';
type ImageProps = UnpicImageProps<HTMLImgAttributes, string | null>;
import type { ImageOptions, ConfigOptions } from '@cloudinary-util/url-loader';
/**
* layout prop comes from unpic and have some rules related to width and height
* but when intersecting the types from unpic and the url-loader those rules are broken
* this definition of the type will re-enable those rules  by using this discriminated union construct
* Thr rules are:
* if layout="fullWidth" then width is not allowed
* if layout="fixed" then width and height are required
      * if layot="constrained" then width and height are required
* constrained is the default value
*/
type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};

/** This is the type for the props definition is a union between
* unpic props and the url-loader props
* plus the fix for the layout prop defied as LayoutAndSize
* example of usage:
*
*const props: CldImageProps = {
*  layout: "fixed",
*  height: 200,
*  width: 200,
*  src: ''
*}
*const props: CldImageProps = {
*  layout: "fullWidth",
*  height: 200,
*  src: ''
*}
*const props: CldImageProps = {
*  with: 200,
*  height: 200,
*  src: ''
*}
*/
// export type CldImageProps = Prettify<ImageOptions &
//   // Omit<ImageProps, 'width' | 'height'> & {
//   ImageProps & {
//     config?: ConfigOptions;
//     preserveTransformations?: boolean;
//     tint?: string;
//   }>
// } & LayoutAndSize>

type BaseProps = UnpicImageProps<HTMLImgAttributes, string | null>
  & ImageOptions
  & {
    config?: ConfigOptions;
    preserveTransformations?: boolean;
    tint?: string;
  }
  & {
    layout?: "fixed" | "constrained" | "fullWidth";
    width?: number | string | undefined;
    height?: number | string | undefined;
  }
  & (
    FullWidthImageProps<HTMLImgAttributes, string | null>
    | (FixedImageProps<HTMLImgAttributes, string | null> & { width: number; height: number; })
    | (ConstrainedImageProps<HTMLImgAttributes, string | null> & { width: number; height: number; })
  );

export type CldImageProps = Prettify<BaseProps>
