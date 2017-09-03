export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_All_DEPS = 'GET_All_DEPS'

export const getAllUsers = (users) => ({
    type: GET_ALL_USERS,
    users
});

export const getAllDeps = (deps) => ({
    type: GET_All_DEPS,
    deps
});

const HOST = 'http://localhost:3000/api/v1'
export const fetchAllDeps = () => (dispatch, getState) => {
    fetch(HOST + "/departments", {method: "GET"})
        .then(response => response.json())
        .then(data => {
            dispatch(getAllDeps(data))
        })
}

export const fetchAllUsers = (departmentId) => (dispatch, getState) =>{
    let link = HOST + "/departments/"+departmentId + "/users";
    fetch(link, {method: "GET"})
        .then(response => response.json())
        .then(data => {
            dispatch(getAllUsers(data))
        })

}