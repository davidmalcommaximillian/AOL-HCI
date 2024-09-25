document.getElementById('formContactUs').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const contactOption = document.getElementById('contactOption').value;
    const message = document.getElementById('message').value;
    if (name.length < 5) {
        alert('Length of name must be greater than 5');
        return;
    }
    if (email.indexOf('@') < 0 || email.indexOf('.') < 0) {
        alert('Email must be valid');
        return;
    }
    if (phone.length != 12 || isNaN(phone)) {
        alert('Phone number must be 12 digits');
        return;
    }
    if (contactOption != 'email' && contactOption != 'phone') {
        alert('Contact option must be either email or phone');
        return;
    }
    if (message.length < 10) {
        alert('Message must be greater than 10 characters');
        return;
    }
    alert('Form submitted successfully');
    document.getElementById('formContactUs').reset();
});


// Javascript Navbar Responsive 
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
    hamburger.classList.remove('open');
    closeBtn.style.display = 'none';
});