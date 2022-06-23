const { Log } = require('../models');

const logdata = [
    {
        log_id: 1,
        change: 1,
        title: "Satin Scrunchies",
        user: 1
      },
];

const seedLogs = () => Post.bulkCreate(logdata);

module.exports = seedLogs;
