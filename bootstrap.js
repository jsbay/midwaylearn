const WebFramework = require('@midwayjs/web').Framework;
const web = new WebFramework().configure({
  port: 7001,
});

// eslint-disable-next-line node/no-extraneous-require
const { Bootstrap } = require('@midwayjs/bootstrap');
Bootstrap.load(web).run();
