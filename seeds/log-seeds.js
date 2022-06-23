const { Log } = require('../models');

const logdata = [
    {
        log_id: 1,
        change: 1,
        title: 1,
        user: 1
      },
];

const seedLogs = () => Log.bulkCreate(logdata);

module.exports = seedLogs;
