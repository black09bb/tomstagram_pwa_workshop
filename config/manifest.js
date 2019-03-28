'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/zonkyio/ember-web-app#documentation for a list of
  // supported properties

  return {
    "name": "Tomstagram",
    "short_name": "Tomstagram",
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "display": "standalone",
    "orientation": "portrait",
    "Scope": "/",
    "start_url": "/auth",
    "icons": [
      {
        "src": "assets/icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  };
}
