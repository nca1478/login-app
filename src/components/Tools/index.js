// Dependencies
import toastr from 'toastr';

const setHeader = (method, body) => {  
  return {
    method,
    body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
  }
}

const alertaRest = (data) => {
  if(data.ok)
    toastr.success(data.message);
  else
    toastr.error(data.message);
}

const alerta = (message, type) => {
  if(type === 'error')
    toastr.error(message);
  else
    toastr.success(message);
}

export { setHeader, alertaRest, alerta };