const SERVER_URL = 'http://localhost:5000';

const postDataApi = async (route, body) => {
    try {
        const res = await fetch(`${SERVER_URL}/${route}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const result = await res.json()
        if (result) {
            return result
        } else {
            return null
        }
    } catch (err) {
        console.log("🚀 ~ file: services.api.js:7 ~ postDataApi ~ err", err)

    }
}

const getDataApi = async (route) => {
    try {
        const res = await fetch(`${SERVER_URL}/${route}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const result = await res.json()
        if (result) {
            return result
        } else {
            return null
        }
    } catch (err) {
        console.log("🚀 ~ file: services.api.js:41 ~ getDataApi ~ err", err)

    }
}

export {postDataApi,getDataApi}