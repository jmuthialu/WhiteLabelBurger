# README

## iOS  and Android
- Expo managed config for iOS and Android.
- No need to change anything in Xcode such as for any manual setups for scheme, bundleID etc 
- Xcode project can be deleted anytime and recreated anytime from package scripts.
- App.json bundleID will be the bundleID used by Xcode for which the app will be created.
- Only one target can be built and run at any point of time.
- If target needs to be changed, say from bk to mcd, then running ios:mcd will overwrite app.json for mcd, delete ios folder and build the app
- On expo build, it will override credentials.json based on brand.