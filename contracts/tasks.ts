import { TASKS_DESCRIPTION } from './tasks-description';

import { task } from 'hardhat/config';
import './subtasks';

task(TASKS_DESCRIPTION.EXPORT_TO_FRONTEND.TASK).setAction(
  async (taskArgs, { run }) => {
    await run(TASKS_DESCRIPTION.EXPORT_TO_FRONTEND.SUBTASK, taskArgs);
  }
);
