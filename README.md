# Gulp Optimize Uploads

A collection of cleanup tasks for web uploads.

## Tasks

### Minify Images

Adds a task wrapper to imagemin-cli allowing lossless image minification in a single directory instead of requiring separate input and output directories.

**Arguments:**

- imageDir _(./images/\*\*/\*)_: The pattern to use for directory and/or file matching.

**Syntax:**

```bash
gulp minify-images --imageDir /foo/bar/**/*.jpg
```
