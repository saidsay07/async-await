function sleep(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {resolve(ms)}, ms)
    })
}

const url = "https://jsonplaceholder.typicode.com/posts"
function request() {
    console.log("Request started...")
    return sleep(2000).then(function () {
        return fetch(url)
    }).then(function (response) {
        return response.json()
    })
}

request().then(function (response) {
    console.log("Data:", response)
}).catch(function (e) {
    console.error("Error:", e)
}).finally(function () {
    console.log("Programmer Said")
})

// Async await нужны для того что бы писать асинхронный код как синхронный
async function requestAsync() {
    console.log("Request started...")
    try {
        await sleep(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log("Data:", data)
    } catch (e) {
        console.error("Error:", e)
    } finally {
        console.log("Programmer Said")
    }
}

requestAsync().then()