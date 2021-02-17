# OOOO Such a long link

An URL unShortener with links composed only of circular characters.

## How it works

The principle is to create a new URL from the encoding of another URL in baseO (created thanks to [baseN](https://www.npmjs.com/package/basen)). During a request on the newly created URL (only composed of circular characters), the API decodes the URL and redirects the client to the decoded URL.

## Why ?

Why not ? 😅
