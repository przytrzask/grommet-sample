const tasks = [];

import Rest from 'grommet/utils/Rest';

export function addTask(task) {
  return new Promise((resolve, reject) => {
    tasks.push(task);
    resolve();

  });

}

export function getColumns() {
  return new Promise((resolve, reject) => {
    Rest.get('/api/json/').then((error, response => {
      if (error) {
        reject('coś nie tak, spróbuj ponownie');
      } else {
        // alert(response.body);
        resolve(response.body);
        
      }

    }));


    resolve(tasks);

  });

}
