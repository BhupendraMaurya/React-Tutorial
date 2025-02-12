# How parcel is so fast ? 
- Bcz it has .parcel-cache.

# Parcel 
- Dev build
- Local Server
- **HMR : Hot module replacement. => As soon as we save our code, it automatically refreshes our page and it can do this , bcz it uses a file watching algorithm

- File watching algorithm > Written in C++.

- Caching - Faster Builds: Id does things very fast, bcx it uses caching > files which are already loaded and saved, will take less time next when u would use it.

- Image Optimization

- Minification 

- Bundling 

- Compress

- Consistent hashing

- Code splitting 

- Differential bundling. - to support older browsers

- Diagnostics 

- Error Handling -> Better error suggestions.(beautifull errors)

- It gives a way to host our app on the HTTPs servers

- Tree Shaking => Will remove unused code

- different dev and prod builds.

# when you do this : npx parcel build index.html => you will get an error because in package.json it finds that apps.js is the entry point of our code, but here we are providing index.html, so remove that line from package.json.