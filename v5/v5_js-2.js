function ifcls(){
    setTimeout(2000,function(){document.getElementById('tempIF_G').remove();});
}
function removebackground(){
    document.getElementById("loading").style.animation = "load-remove 1s 1"
}
function sendmail() {
    if (document.getElementById("ip-email").value == "" || document.getElementById("ip-name").value == "" || document.getElementById("ip-subject").value == "" || document.getElementById("ip-message").value == "") {
        alert("Some Fields Are Missing!!!")
    } else {
        if (document.getElementById("ip-ideas").value == "") { document.getElementById("ip-ideas").value = "No Ideas" }
        if (document.getElementById("ip-email").value.includes(" ")) { alert("Spaces In Email Is Not Valid"); throw new Error("") }
        document.getElementById("ip-name").value = document.getElementById("ip-name").value.replaceAll(" ", "+")
        document.getElementById("ip-subject").value = document.getElementById("ip-subject").value.replaceAll(" ", "+")
        document.getElementById("ip-message").value = document.getElementById("ip-message").value.replaceAll(" ", "+")
        document.getElementById("ip-ideas").value = document.getElementById("ip-ideas").value.replaceAll(" ", "+")
        data = "?entry.1120375066=" + document.getElementById("ip-email").value + "&entry.1808878457=" + document.getElementById("ip-name").value + "&entry.665491960=" + document.getElementById("ip-subject").value + "&entry.652909799=" + document.getElementById("ip-message").value + "&entry.435683521=" + document.getElementById("ip-ideas").value + "&entry.656874236=Recommendations"
        f_url = "https://docs.google.com/forms/d/e/1FAIpQLSdocdqyhyoTZrXcF2RejwMP35eB6akOG95aZoUxU5IAs3Nwdw/formResponse" + data
        ifeq = document.createElement("iframe")
        ifeq.id = "tempIF_G"
        ifeq.width = "100px"
        ifeq.height = "100px"
        ifeq.style.display = "none"
        ifeq.onload = "ifcls();"
        ifeq.src = f_url
        document.getElementsByTagName("body")[0].appendChild(ifeq);
        ifeq.onload = "ifeq.remove();"
        document.getElementById("ip-email").value = ""
        document.getElementById("ip-name").value = ""
        document.getElementById("ip-subject").value = ""
        document.getElementById("ip-message").value = ""
        document.getElementById("ip-ideas").value = ""
        alert("We Will Be Looking On This Soon")
        ifeq.addEventListener("load", ifcls(), false);
    }
  }