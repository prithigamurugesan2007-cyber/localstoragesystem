function addData() {
    let usertitle = document.getElementById("userkey").value.trim();
    let uservalue = document.getElementById("userdata").value.trim();

    if (usertitle === "" || uservalue === "") {
        document.getElementById("result").innerText =
            "Please enter both key and value.";
        return;
    }

    localStorage.setItem(usertitle, uservalue);

    document.getElementById("result").innerText =
        "Data added successfully.";

    document.getElementById("userkey").value = "";
    document.getElementById("userdata").value = "";
}

function getData() {
    let searchvalue = document.getElementById("usersearch").value.trim();

    if (searchvalue === "") {
        document.getElementById("result").innerText =
            "Please enter a key to search.";
        return;
    }

    let returnvalue = localStorage.getItem(searchvalue);

    if (returnvalue !== null) {
        document.getElementById("result").innerText =
            "Value: " + returnvalue;
    } else {
        document.getElementById("result").innerText =
            "No data found.";
    }
}

function deleteData() {
    localStorage.clear();

    document.getElementById("result").innerText =
        "All data deleted.";
}