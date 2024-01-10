const texts = ["</Web Developer>", "</Designer>", "</Freelancer>", "</CHAROT LANG!>"]; // Add your desired typewriter texts here
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typewriter").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
})();
const navLinks = document.querySelectorAll('.responsive-button');

// Add an event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Get the target section from the href attribute
        const targetId = link.getAttribute('href');

        // Use the element's ID to scroll to the target section
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function previewImage() {
    var preview = document.getElementById('previewImage');
    var fileInput = document.getElementById('image');
    var file = fileInput.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function (e) {
        preview.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  function submitForm() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var image = document.getElementById('image').files[0];

    // You can perform further validation or processing here

    // Example: Displaying an alert with the values
    alert('Title: ' + title + '\nContent: ' + content);

    // You can also send the data to a server using AJAX or Fetch.
    // For file uploads, you would typically use FormData and send it to the server.

    var formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    // Example using Fetch API
    fetch('/your-upload-endpoint', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
  }