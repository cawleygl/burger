document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

  // UPDATE
  const devourBtns = document.querySelectorAll('.devour-burger');

  // Set up the event listener for the create button
  if (devourBtns) {
    devourBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');

        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          if (response.ok) {
            console.log(`Devoured Burger #${id}`);
            location.reload('/');
          } else {
            alert('Something went wrong!');
          }
        });
      });
    });
  }
    // CREATE
    const cookBtn = document.getElementById('create-form');

    if (cookBtn) {
      cookBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const newBurgerName = { name: document.getElementById('new-burger-name').value.trim() };
  
        // Send POST request to create a new burger
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          body: JSON.stringify(newBurgerName),
        }).then(() => {
          document.getElementById('new-burger-name').value = '';
          console.log('Cooked a new burger!');
          location.reload();
        });
      });
    }
  
});
