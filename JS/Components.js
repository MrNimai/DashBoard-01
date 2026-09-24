fetch("Components/Nav.html")
.then(Response => Response.text())
.then(data => {
    document.getElementById("Nav").innerHTML = data;
})


fetch("Components/Sidebar.html")
.then(Response => Response.text())
.then(data => {
    document.getElementById("Sidebar").innerHTML = data;
})

fatch("Components/Footer.html")
.then(Response => Response.text())
.then(data => {
    document.getElementById("Footer").innerHTML = data;
})