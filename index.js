const ffmpeg = require("ffmpeg");

module.exports = {
  extract: (inputFileName, outputFileName, callback) => {
    try {
      new ffmpeg(inputFileName).then(video => {
        video.fnExtractSoundToMP3(outputFileName, (err, file) => {
          if (!err) {
            callback();
          } else {
            console.error(err);
          }
        });
      });
    } catch (e) {
      console.error(e);
    }
  }
};
