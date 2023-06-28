console.log('contact js connected')


const sendMail = (event)=>{
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const address = document.getElementById('address').value;
    const message = document.getElementById('message').value;
    console.log(email)
    Email.send({
        SecureToken : "8fd91fc5-15d1-49a7-9a46-e5e2f4b8c688",
        To : 'ayan.upadhaya71@gmail.com',
        From : `ayanu881@gmail.com`,
        Subject : `${subject}`,
        Body : `<b>From: ${fullName}</b> <br> 
        <b>Address:</b>${address}<br> 
        <b>Email:</b> ${email}<br> 
        <b>Message:</b>${message}  `
    }).then(
      message =>{ 
        Swal.fire({
            icon: 'success',
            title: 'Your mail has been send',
          })
        }
    );

    event.target.reset()

}

