

export async function fetchData() {
  let url = 'https://gist.githubusercontent.com/shalurai/942783a364a260c66d877a0ce957afc5/raw/4ac6ce02f2ab7c4087dc42b4d507b559bb21415b/Data.json';
  let response = await fetch(url);
 let body = await response.json();
 let bodyData = await body.Reggae;
  console.log("body", bodyData);
  return bodyData;

}
