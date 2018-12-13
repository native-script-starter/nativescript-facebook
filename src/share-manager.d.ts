import {ImageSource} from 'tns-core-modules/image-source';
import {ShareAdditionContent} from './share-manager.common';

export * from './share-manager.common';

/**
 * When people share links from your app to Facebook it includes a contentURL with the link to be shared.
 * @param {string} link  Link to be shared.
 * @param {ShareAdditionContent} addition When you use the Facebook share dialog, you have additional options that aren't available when you share by using the API.
 */
export declare function createLinksShareContent(link: string, addition?: ShareAdditionContent): any;


/**
 * People can share photos from your app to Facebook with the Share Dialog or with a custom interface. Photos must be less than 12MB in size. People need the native Facebook installed, version 7.0 or higher
 * @param {ImageSource[] | string[]} images : ImageSources or image urls of the photo to be shared
 * @param {ShareAdditionContent} addition When you use the Facebook share dialog, you have additional options that aren't available when you share by using the API.
 */
export declare function createPhotosShareContent(images: ImageSource[] | string[], userGenerated: boolean, addition?: ShareAdditionContent): any;


/**
 * the SDK automatically checks for the native Facebook app. If it isn't installed, the SDK switches people to their default browser and opens the Feed Dialog. If someone wants to share an Open Graph story, the SDK opens the Web Share Dialog.
 * @param {any} content: Links content or photos content
 */
export declare function showShareDialog(content: any): void


/**
 * The Message Dialog switches to the native Messenger for iOS app, then returns control to your app after a post is published.
 * @param {any} content: Links content or photos content, SUPPORTED SHARE TYPES - ShareLinkContent - ShareCameraEffectContent - ShareMessengerOpenGraphMusicTemplateContent - ShareMessengerMediaTemplateContent - ShareMessengerGenericTemplateContent UNSUPPORTED SHARE TYPES (DEPRECATED AUGUST 2018) - ShareOpenGraphContent - SharePhotoContent - ShareVideoContent - Any other types that are not one of the four supported types listed above
 */
export declare function showMessageDialog(content: any): void