function updatelogs(){
    document.getElementById("v2_upd").innerText = json["upmsg"]
    document.getElementById("v2_xabme").innerText = json["xabme"]
    document.getElementById("v2_vno").innerText = json["vno"]
    document.getElementById("v2_tagline").innerText = json["tagline"]
}
// var update = ""
// // fetch('https://script.google.com/macros/s/AKfycbyE5lJJHxPzx2ZPrK9S1ekEiTRPaXGEyOvnGFu4TeSUGL4KPlA2/exec')
// // .then(response => response.text())
// // .then(text => updatelogs(text))
// fetch('https://script.google.com/macros/s/AKfycbxr5RAnjxHkiniaMxeSEZezxnO103r9KmmBnF2-9KDMH5xDWDqCfoIPAFoE1VltVlHm0w/exec')
// .then(response => response.json())
// .then(json => {updatejsonlogs(json)})
async function get() {
    let obj = await (await fetch('https://script.google.com/macros/s/AKfycbxr5RAnjxHkiniaMxeSEZezxnO103r9KmmBnF2-9KDMH5xDWDqCfoIPAFoE1VltVlHm0w/exec')).json();
    return obj;
}
var json;
(async () => {
  json = await get()
  updatelogs()
})()

