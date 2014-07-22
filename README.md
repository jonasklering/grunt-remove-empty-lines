# grunt-remove-empty-lines

> Very simple and lightweight cleaner that just removes empty lines from specific parts of any kind of files

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-remove-empty-lines --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-remove-empty-lines');
```

### Options

#### options.regex
Type: `RegExp` 
Default value: `/(?:[ |\t]*<!--\(\s?remove-empty-lines-start\s?\)-->)\n?([\s\S]+?)(?:[ |\t]*<!--\(\s?remove-empty-lines-end\s?\)-->)/g`

**Example:**

Before

```html
<!--(remove-empty-lines-start)-->
<meta charset="UTF-8">

<title>...</title>

<meta name="keywords" content="..." />
<meta name="description" content="...">

<meta name="author" content="...">

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<!--(remove-empty-lines-end)-->
```

After

```html
<meta charset="UTF-8">
<title>...</title>
<meta name="keywords" content="..." />
<meta name="description" content="...">
<meta name="author" content="...">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```

#### Default Options

```js
grunt.initConfig({
  removeemptylines: {
    options: {},
    files: {
      'dest/sampleFile.html': ['src/sampleFile.html']
    }
  }
});
```