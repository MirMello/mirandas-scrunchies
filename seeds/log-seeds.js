const { Log } = require('../models');

const logdata = [
    {
        change: 2,
        title: 'Brown Fall',
        user_id: 1
      },
];

const seedLogs = () => Log.bulkCreate(logdata);

module.exports = seedLogs;
