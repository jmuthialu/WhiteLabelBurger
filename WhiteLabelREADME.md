# Whitelabel

## Principle
- Expo managed config for iOS and Android
- No need for any manual setups for scheme, bundleID etc in XCode
- Only one target can be built and run at any point of time.
= If target needs to be changed, say from bk to mcd, then running ios:mcd will overwrite app.json for mcd, delete ios folder and build the app
- On expo build, it will override credentials.json based on brand.