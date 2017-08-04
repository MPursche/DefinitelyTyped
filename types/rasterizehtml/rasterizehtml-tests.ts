import rasterizehtml = require('rasterizehtml');

const canvas = document.createElement('canvas');

const documentPromise: Promise<rasterizehtml.RenderResult> = rasterizehtml.drawDocument(document, canvas, {
    width: 1920,
    height: 1080
});
rasterizehtml.drawDocument(document).then((result) => {
    const image: HTMLImageElement = result.image;
    const svg: string = result.svg;
    const errors: rasterizehtml.ErrorMessage[] = result.errors;
});
rasterizehtml.drawDocument(document, canvas);

const htmlPromise: Promise<rasterizehtml.RenderResult> = rasterizehtml.drawHTML("<html><body>Test</body></html>", canvas, {
    width: 1920,
    height: 1080,
    baseUrl: "http://localhost:8080/",
    executeJs: true,
    executeJsTimeout: 1000,
    zoom: 2,
    hover: ".hover",
    active: ".active",
    focus: "#focus",
    target: "#target",
    cache: 'all',
    cacheBucket: {}
});
rasterizehtml.drawHTML("<html><body>Test</body></html>");
rasterizehtml.drawHTML("<html><body>Test</body></html>", canvas);

const urlPromise: Promise<rasterizehtml.RenderResult> = rasterizehtml.drawURL("https://github.com/DefinitelyTyped/DefinitelyTyped", canvas, {
    width: 1920,
    height: 1080,
    executeJs: false,
    cache: 'none'
});
rasterizehtml.drawURL("https://github.com/DefinitelyTyped/DefinitelyTyped");
rasterizehtml.drawURL("https://github.com/DefinitelyTyped/DefinitelyTyped", canvas);
