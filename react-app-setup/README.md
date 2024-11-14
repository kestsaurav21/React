# **NOTES**

## Q: What is `npm`?


- `npm` is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.

- The `npm` Registry is a public collection of packages of open-source code for` Node.js, front-end web apps, mobile apps, robots, routers`, and countless other needs of the JavaScript community.
- `npm` alternative is `yarn`

### How to initialize `npm`?

```
npm init
```

`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.


## Q: What is `Parcel/Webpack`? Why do we need it?

A: `Parcel` and `webpack` are the bundlers used mostly for `JavaScript` or `Typescript` code that helps you to `minify, clean, and make your code compact` so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application.

Use of `Parcel/Webpack`:
Module bundlers are the way to organize and combine many files of JavaScript code into one file. A JavaScript bundler can be used when your project becomes too large for a single file or when you're working with libraries that have multiple dependencies.


## Q: What is `npx`?

A: `npx` stands for `Node Package eXecute`. It is simply an `npm` package runner. It allows developers to execute any Javascript Package available on the npm registry without even installing it. npx is installed automatically with npm version 5.2.

## Q: What is difference between `dependencies vs devDependencies`?

A: `"dependencies"` : Packages required by your application in production. `"devDependencies"` : Packages that are only needed for local development and testing.

## Q: What is Tree Shaking? in JavaScript Bundles?

A: `Tree shaking`, also known as `dead code elimination`, is the practice of `removing unused code in your production build`. It's important to ship as little code to your end-users as possible. By statically analyzing our source code, we can determine what's not being used and exclude it from our final bundle.

## Q: What is Hot Module Replacement?

A: `Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload. Save valuable development time by only updating what's changed.

## Q: List down your favourite superpowers of Bundlers and describe any 3 of them in your own words.

### features:

- Dev Build - parcel provides us develop build
- Local Server - bundlers also provides us a local server, which can be used to see live changes in our application.
- HMR = Hot Module Replacement - exchanges, adds, or removes modules while an application is running, without a full reload

and some of more cool features of bundlers are:

- Image Optimization
- Minification
- Bundling
- Compress
- Error Handling
- Tree Shaking - remove unused code

## Q: What is `.gitignore`? What should we add and not add into it?

A: gitignore file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo. / will ignore directories with the name.

In our code we shouldn't add the files, which we can re-generate in future e.g, `node_modules`, `dist` etc.

## Q: What is the difference between `package.json` and `package-lock.json` files?

A: Both of these files have the same format, and perform similar functions in the root of a project. The difference is that `package-lock. json` cannot be published, and it will be ignored if found in any place other than the root project.

The package. json is used for more than dependencies - like defining project properties, description, author & license information, scripts, etc. The package-lock. json is solely used to lock dependencies to a specific version number.

## Q: Why should I not modify `package-lock.json`?

A: It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit `package-lock.json` to your code repository

You should avoid updating the `package.json` manually since it could break the synchronization between `package.json` and `package-lock. json`.

## Q: What is `node_modules`? Is it a good idea to push that on git?

A: The `node_modules` folder contains generated code. This is not code you've written and you should never make any updates to the files inside Node modules because there's a pretty good chance they'll get overwritten next time you install some modules.

It is better to not commit the `node_modules` folder, and instead add it to your `.gitignore` file.

Here are all the reasons why you shouldn't commit it: The node_modules folder has a massive size (up to Gigabytes). It is easy to recreate the node_modules folder via packages. json

## Q: What is the `dist` folder?

A: The `/dist` stands for distributable. The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.

Parcel's default directory for your output is named dist . The --dist-dir public tag defines the output folder for your production files and is named public to avoid confusion with the dist default directory.

## Q: What is `browserlists`?

A: Browserslist defines and shares the list of target browsers between various frontend build tools.


## what's the difference between tilde( ) and caret(^) in package.json

A: Tilde(~)
Tilde(~) consider only patch version update automatically .
Tilde(~) is more safer for production app. 
Tilde(~) is mainly used to automatic update to consider bug fixes.
example: MyPackageName: "~1.2.3" 

result: MyPackage will automatically update from "1.2.3" ..... "1.2.5"...... "1.2.9" but not accept update 1.3.3

Caret(^)
Caret(^) consider only patch and minor version update automatically.
Caret(^) is less safer than Tilde(~) for production app. because here minor feature will also update automatically . (Not sure our exiting function will support this update or not).
Caret(^) is mainly used to automatic update in package for minor feature and bug fixes both.
example: MyPackageName: "^1.2.3" 
result: MyPackage will automatically update from "1.2.3" ..... "1.2.5"...... "1.2.9" for patch and accept "1.3.0".... "1.5.0"......"1.9.9" for minor update.
