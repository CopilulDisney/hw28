const getUsers = (limit) => {
    return fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
}

const renderUsers = async () => {
    try {
        const response = await getUsers(5).then(res => res.json())
        if(!Array.isArray(response)){
            throw new SyntaxError('Something went wrong')
        }
        response.forEach(item => console.log(item))
    } catch (error) {
        console.log(error)
    }
}

renderUsers()
