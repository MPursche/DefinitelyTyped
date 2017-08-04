// Type definitions for rasterizehtml 1.2.4
// Project: https://github.com/cburgmer/rasterizeHTML.js
// Definitions by: Marcel Pursche <https://github.com/MPursche>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * API Documentation: https://github.com/cburgmer/rasterizeHTML.js/wiki/API
 */
declare module 'rasterizehtml' {
    /**
     * Rendering options
     */
    export interface Options {
        /**
         * The width of the viewport, by default the width of the canvas, or '300' if not provided.
         */
        width?: string | number;
        /**
         * The height of the viewport, by default the height of the canvas, or '200' if not provided.
         */
        height?: string | number;
        /**
         * The URL base of the HTML document which relative resources will be based on, default: null.
         */
        baseUrl?: string;
        /**
         * If set to true, it will execute JavaScript in the page/HTML string and wait for the onload event before drawing the content (not available for drawDocument), default: false.
         */
        executeJs?: boolean;
        /**
         * Will wait the given amount of milliseconds before interrupting the execution of JavaScript. Will also wait if no script is running, default: 0.
         */
        executeJsTimeout?: number;
        /**
         * A factor to zoom the displayed content by, default: 1
         */
        zoom?: number;
        /**
         * A selector whose matched element receives a simulated mouse hover to match :hover style rules, default: null.
         */
        hover?: string;
        /**
         * A selector whose matched element receives a simulated user activation to match :active style rules, default: null.
         */
        active?: string;
        /**
         * A selector whose matched element receives a simulated focus to match :focus style rules, default: null.
         */
        focus?: string;
        /**
         * A selector whose matched element receives a simulated target activation to match :target style rules, default: null.
         */
        target?: string;
        /**
         * Allows fine-tuning caching behaviour:
         * - 'none' forces requested pages not to be cached by the browser by adding a unique query string in the form of "?_=[timestamp]" to each request,
         * - 'repeated' forces a non-cached load for initial calls, while allowing the browser to cache repeated calls to the same URL,
         * - 'all' will not employ any cache busting (default).
         */
        cache?: 'none' | 'repeated' | 'all';
        /**
         * An object holding the library's own in-memory cache. Only effective in reuse between several calls to the API and cache set to some value other than none. Should be initialized with {}.
         */
        cacheBucket?: any;
    }

    /**
     * Error message during rendering
     */
    export interface ErrorMessage {
        /** Human readable error message */
        message: string;
        /** Optional error object */
        originalError?: Error;
    }

    /**
     * The Render result
     */
    export interface RenderResult {
        /**
         * The resulting image rendered to the canvas. If content overflows the specified viewport (defined by the width and height parameters or the canvas element's size) the image will have greater dimensions.
         */
        image: HTMLImageElement;
        /**
         * The internal SVG representation of the rendered content.
         */
        svg: string;
        /**
         * A list of resources that failed to load.
         */
        errors: ErrorMessage[];
    }

    /**
     * Draw a page to a canvas
     * @param url URL of page
     * @param canvas If given draws the image to this canvas. Only returns an image if not.
     * @param options Additional options
     */
    export function drawURL(url: string, canvas?: HTMLCanvasElement, options?: Options): Promise<RenderResult>;

    /**
     * Draw HTML to a canvas
     * @param html String with html to render
     * @param canvas If given draws the image to this canvas. Only returns an image if not.
     * @param options Additional options
     */
    export function drawHTML(html: string, canvas?: HTMLCanvasElement, options?: Options): Promise<RenderResult>;

    /**
     * Draw a Document to a canvas
     * @param document HTML Document
     * @param canvas If given draws the image to this canvas. Only returns an image if not.
     * @param options Additional options
     */
    export function drawDocument(document: HTMLDocument, canvas?: HTMLCanvasElement, options?: Options): Promise<RenderResult>;
}