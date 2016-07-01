### Easy async for NodeBB on client side

Do you use `async` library on client side in your plugins?  
I do a lot. And I find it quite troublesome to put the library almost in each and every plugin I make. Furthermore, it rather more troublesome then to `require` the library in a manner like this:

```js
require(['../../plugins/nodebb-plugin-my-long-plugin-name/public/js/vendor/async/dist/async.min'], function (async) {
    //
});
```

Now imagine if you use the `async` library in your plugin a, plugin b and plugin c. All of them will `require` the library from themself. Since all of the plugins have different base urls, `RequireJS` will make three different HTTP requests.

#### Gimme a break!

After installing this plugin you will be able to:
```js
require(['async'], function (async) {
    // now you can use the latest stable "async": "^1.5.0"
});
```

That's it, nothing more, nothing less. I hope it will helps you.

#### Installation
```sh
cd /path/to/nodebb
npm install nodebb-plugin-frontend-async
```
Or via NodeBB Admin panel.

#### Information
The plugin:  
1. doesn't modify any source of NodeBB  
2. gets `async.min.js` from NodeBB `node_modules`  
3. injects `async` directly to `RequireJS` way before DOM is ready  
