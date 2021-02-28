document.addEventListener('DOMContentLoaded', postRequest)

function postRequest() {

    document.getElementById('infoSubmit').addEventListener('click', function (event) {

        var req = new XMLHttpRequest()

        var payload = { name: null, subject: null } // Fill empty key value pair
        payload.name = document.getElementById('name').value 
        payload.subject = document.getElementById('subject').value

        req.open('POST', 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', true) // Initiate POST request
        req.setRequestHeader('Content-Type', 'application/json')

        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 400) { // Check success
                alert("Thanks for reaching out!")
            } else {
                console.log("Error in network request: " + req.statusText) // Communication Failed
            }
        });

        req.send(JSON.stringify(payload)) // Send stringified payload variable i.e. given user input string
        event.preventDefault()
    });

}
