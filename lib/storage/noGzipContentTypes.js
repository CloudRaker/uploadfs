var _ = require('lodash');

// Content types NOT suitable for gzip because
// they are already compressed and it's not worth
// the impact on phones etc.
var noGzipContentTypes = [
  'image/gif', 'image/jpeg', 'image/png', 'video/mpeg', 'video/mp4', 'video/quicktime', 'application/zip'
];

module.exports = {
  isGzipAppropriate: function (contentType) {
    return !_.includes(noGzipContentTypes, contentType);
  },
  noGzipContentTypes
};
