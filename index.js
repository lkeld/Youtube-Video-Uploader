const { upload } = require('youtube-videos-uploader'); //vanilla javascript

const video1 = { path: 'video1.mp4', title: 'title 1', description: 'description 1' }

const onVideoUploadSuccess = (videoUrl) => {

upload (credentials, [video1, video2]).then(console.log)

upload (credentials, [video1, video2], {headless:false}).then(console.log)


