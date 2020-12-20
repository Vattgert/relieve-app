const API_BASE_URL = "http://api.relieve.com:3000/v1";

async function send({ method, path, body }){
    /*const url = new URL(path, API_BASE_URL);
    console.log(url.href);*/
    const url = API_BASE_URL + path;

    const response = await fetch(url, {
        mode: 'cors',
        method,
        //body,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        return response.json();
    } else {
        console.error({ url, body });
        throw new Error(response.statusText);
    }
}

function createParamsString(params){
    let paramsString = '';
    if(params){
        Object.keys(params).map((key, index, array) => {
            if(key && params[key]){
                paramsString += `${key}=${params[key]}`;
            } else if(key && !params[key]){
                paramsString += `${key}`;
            }
            
            if (index !== array.length - 1){
                paramsString += "&";
            }
        })
    }
    return paramsString ? `?${paramsString}` : '';
}

export function get(path, params){
    const paramsString = createParamsString(params);

    return send({
        method: 'get',
        path: `${path}${paramsString}`,
    });
}