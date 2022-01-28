
export const addtoDB = async (user,url) => {
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type" : "application/json; charset=utf-8"
        }
    })
}