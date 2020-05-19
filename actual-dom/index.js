function Tick() {
    document.getElementById("root").innerHTML =
        "<div>"+"Hello WOlrd" +"</div>"+
        "<input />"+
        "<p>" + new Date().toLocaleTimeString() + "</pre>" 
}
setInterval(Tick, 1000)