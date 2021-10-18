import consola from 'consola';
import { TASKS_DESCRIPTION } from './tasks-description';

const fs = require('fs-extra');
import { subtask } from 'hardhat/config';
const appRoot = require('app-root-path');

subtask(TASKS_DESCRIPTION.EXPORT_TO_FRONTEND.SUBTASK).setAction(async () => {
  if (fs.existsSync(`${appRoot}/../frontend`)) {
    consola.info('Exporting typechain to frontend');
    let srcPath = `${appRoot}/typechain`;
    let destPath = `${appRoot}/../frontend/typechain`;
    fs.copySync(srcPath, destPath, { overwrite: true });
    consola.success('Typechain export to frontend finished');
    consola.info('Exporting addresses to frontend');
    srcPath = `${appRoot}/addresses.ts`;
    destPath = `${appRoot}/../frontend/addresses.ts`;
    fs.copySync(srcPath, destPath, { overwrite: true });
    consola.success('Addresses export to frontend finished');
  } else {
    consola.warn('frontend folder not found');
  }
});
