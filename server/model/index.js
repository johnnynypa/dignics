import Sequelize from 'sequelize';
import config from './configDb.js';
import path from 'path';

var sequelize = new Sequelize(config.name, config.username, config.password, config.options);

