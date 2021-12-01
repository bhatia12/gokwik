const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log(value)
    localStorage.setItem("phone",value.contact)
    
    fetch("/send", {
        method: "POST",
        headers: {'Content-Type': 'application/json'} ,
        body: JSON.stringify(value)
    }).then(res => {
        window.location.href = ('/cod.html')
    });
});


