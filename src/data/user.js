import { getDataApi, postDataApi } from "../services/services.api"

const getAllUsers = async () => {
    try {
        const result = await getDataApi('users/getAllUsers');
        if (result.statusCode === 200) {
            return result
        } else {
            return null
        }

    } catch (err) {
        console.log("🚀 ~ file: user.js:7 ~ getAllUsers ~ err", err)
    }
}

const deleteUser = async (id) => {
    try {
        const result = await getDataApi(`users/deleteUserById/${id}`);
        if (result.statusCode === 200) {
            return result
        } else {
            return null
        }

    } catch (err) {
        console.log("🚀 ~ file: user.js:7 ~ getAllUsers ~ err", err)
    }
}

const addUser = async (body) => {
    try {
        if (body.name === '' || body.mobile === '' || body.address === '' || body.password === '') {
            alert('please enter all the details')
        } else {
            const result = await postDataApi('users/createUser', body);
            if (result.statusCode === 200) {
                return result
            } else {
                return null
            }
        }
    } catch (err) {
        console.log("🚀 ~ file: user.js:7 ~ getAllUsers ~ err", err)
    }
}


export { getAllUsers, deleteUser, addUser }