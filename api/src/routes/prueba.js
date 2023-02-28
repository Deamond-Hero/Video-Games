fetch('https://api.rawg.io/api/games?key=1903854e6b4047d5abf16b5005140ebc')
.then(response=> response.json())
.then(data=>console.log(data))

