fetch("https://covid19api.com/")
.then (res => res.json())
.then (data =>display())