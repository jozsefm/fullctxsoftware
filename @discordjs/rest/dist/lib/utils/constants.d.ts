import type { RESTOptions } from '../REST';
export declare const DefaultUserAgent: string;
export declare const DefaultRestOptions: Required<RESTOptions>;
/**
 * The events that the REST manager emits
 */
export declare const enum RESTEvents {
    Debug = "restDebug",
    RateLimited = "rateLimited"
}
export declare const ALLOWED_EXTENSIONS: readonly ["webp", "png", "jpg", "jpeg", "gif"];
export declare const ALLOWED_SIZES: readonly [16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
export declare type ImageExtension = typeof ALLOWED_EXTENSIONS[number];
export declare type ImageSize = typeof ALLOWED_SIZES[number];
//# sourceMappingURL=constants.d.ts.map