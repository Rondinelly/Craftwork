let jsonInvalid = ["{ohcrap: 'our data!'"];

function promiseJson(json){
  return new Promise((fulfill, reject) => {
  try{
    fulfill(JSON.parse(jsonInvalid));
  } catch(error){
    reject(error);
  }
});
}

function onError(error){
  console.log(error.message);
}

promiseJson(jsonInvalid).then(null).catch(onError);
