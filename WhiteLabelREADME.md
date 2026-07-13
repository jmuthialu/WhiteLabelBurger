# Whitelabel

## Principle
- Expo managed config for iOS and Android
- No need for any manual setups for scheme, bundleID in XCode
- At any time only one target can be built and run.
= If we want to change target, say from bk to mcd, then ios:mcd which will overwrite app.json for mcd, delete ios folder and build the app
- On expo build, it will swicth credentials based on brand.