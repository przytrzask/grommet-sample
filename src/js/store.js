

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
        console.log(result);
        resolve(result);
        
        
      } else {
      
        reject('coś nie tak, spróbuj ponownie');
        
        
      }

    });


  });

}

export function getUsersHeaders() {
  return new Promise((resolve, reject) => {
    const options = { method: 'GET'};
    fetch('/api/usersHeaders/', options)
    .then(response => response.json())
    .then((result) => {
      if (result) {
        console.log(result);
        resolve(result);
        
        
      } else {
      
        reject('coś nie tak, spróbuj ponownie');
        
        
      }

    });


  });

}

export function getUsers() {
  return new Promise((resolve, reject) => {
    const options = { method: 'GET'};
    fetch('/api/users/', options)
    .then(response => response.json())
    .then((result) => {
      if (result) {
        console.log(result);
        resolve(result);
        
        
      } else {
      
        reject('coś nie tak, spróbuj ponownie');
        
        
      }

    });


  });

}


export function getContractors() {
  return new Promise((resolve, reject) => {
    const options = { method: 'GET'};
    fetch('/api/contractors/', options)
    .then(response => response.json())
    .then((result) => {
      if (result) {
        console.log(result);
        resolve(result);
        
        
      } else {
      
        reject('coś nie tak, spróbuj ponownie');
        
        
      }

    });


  });

}

export function getOrders() {
  return new Promise((resolve, reject) => {
    const options = { method: 'GET'};
    fetch('/api/orders/', options)
    .then(response => response.json())
    .then((result) => {
      if (result) {
        console.log(result);
        resolve(result);
        
        
      } else {
      
        reject('coś nie tak, spróbuj ponownie');
        
        
      }

    });


  });

}

