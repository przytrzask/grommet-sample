

// import Rest from 'grommet/utils/Rest';

export function addTask(task) {
  return new Promise((resolve, reject) => {
    tasks.push(task);
    resolve();

  });

}


  


export function getColumns() {
  return new Promise((resolve, reject) => {
    const options = { method: 'GET'};
    fetch('/api/json/', options)
    .then(response => response.json())
    .then((result) => {
      if (result) {
        resolve(result);
        
        console.log(result);
      } else {
        console.log(result);
        reject('coś nie tak, spróbuj ponownie');
        
        
      }

    });


  });

}


export function getRows() {
  return new Promise((resolve, reject) => {
    const options = { method: 'GET'};
    fetch('/api/rows/', options)
    .then(response => response.json())
    .then((result) => {
      if (result) {
        resolve(result);
        
        
      } else {
      
        reject('coś nie tak, spróbuj ponownie');
        
        
      }

    });


  });

}
