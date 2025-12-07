document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  if (!form) {
    console.error('Order script: <form> not found on the page.');
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault(); 


    const first = document.getElementById('fn');
    const last  = document.getElementById('ln');
    const phone = document.getElementById('pn');
    const addr  = document.getElementById('sa');

    if (!first || !last || !phone || !addr) {
      console.error('Order script: one or more required inputs (fn,ln,pn,sa) are missing from the DOM.');
      alert('A scripting error occurred. Please check the console for details.');
      return;
    }

    const firstVal = first.value.trim();
    const lastVal  = last.value.trim();
    const phoneVal = phone.value.trim();
    const addrVal  = addr.value.trim();


    if (!firstVal || !lastVal || !phoneVal || !addrVal) {
      alert('Please fill out First Name, Last Name, Phone, and Street Address.');
      return;
    }

    const checkboxes = form.querySelectorAll('.checkbox-group input[type="checkbox"]');
    const drinks = [];

    checkboxes.forEach(box => {
      if (box.checked) {
        let label = form.querySelector('label[for="' + box.id + '"]');
        let title = (label && label.textContent) ? label.textContent.trim() : (box.value || box.id);
        drinks.push(title);
      }
    });

    if (drinks.length === 0) {
      alert('Please select at least one drink.');
      return;
    }

   
    const summary =
      'Order Summary\n\n' +
      'Name: ' + firstVal + ' ' + lastVal + '\n' +
      'Phone: ' + phoneVal + '\n' +
      'Address: ' + addrVal + '\n\n' +
      'Drinks Ordered:\n - ' + drinks.join('\n - ');


    alert(summary);

    form.reset();
  });
});
