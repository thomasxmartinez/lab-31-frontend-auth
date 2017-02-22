'use strict';

require('angular').module('demoApp')
.service('photoService', ['$log', 'authService', 'Upload', function($log, authService, Upload){
  let photoService = {};

  photoService.upload = (gallery, photo) => {
    return authService.fetchToken()
    .then(token => {
      let url = `${__API_URL__}/api/photo`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };

      return Upload.upload({
        url,
        headers,
        data: {
          title: photo.title,
          galleryID: gallery._id,
          file: photo.file,
        },
      });
    })
    .then(res => res.data);
  };

  return photoService;
}]);
