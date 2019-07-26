module.exports = {
  port: process.env.PORT,
  files: ['./client/src/**/*.{html,htm,css,js}'],
  server:{
    baseDir: [".client/src", "./build/contracts"]
  }};
