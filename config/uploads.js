/**
 * File Upload Settings
 * (sails.config.uploads)
 *
 * These options tell Sails where (and how) to store uploaded files.
 *
 *  > This file is mainly useful for configuring how file uploads in your
 *  > work during development; for example, when lifting on your laptop.
 *  > For recommended production settings, see `config/env/production.js`
 *
 * For all available options, see:
 * https://sailsjs.com/config/uploads
 */

module.exports.uploads = {

  adapter: require('skipper-s3'),
  key: 'AKIA6FOJLRIUWVXAR3XB',
  secret: '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',
  bucket: 'taxistudio-cad',
  headers: {
    'Cache-Control': 'max-age=86400'
  }

  /***************************************************************************
  *                                                                          *
  * Sails apps upload and download to the local disk filesystem by default,  *
  * using a built-in filesystem adapter called `skipper-disk`. This feature  *
  * is mainly intended for convenience during development since, in          *
  * production, many apps will opt to use a different approach for storing   *
  * uploaded files, such as Amazon S3, Azure, or GridFS.                     *
  *                                                                          *
  * Most of the time, the following options should not be changed.           *
  * (Instead, you might want to have a look at `config/env/production.js`.)  *
  *                                                                          *
  ***************************************************************************/
  // dirpath: '.tmp/uploads',

};