async function search() {
      const email = document.getElementById("email").value.toLowerCase();
      const result = document.getElementById("result");

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();

        const user = users.find(u => u.email.toLowerCase() === email);

        if (user) {
          result.textContent = `Name: ${user.name}`;
        } else {
          result.textContent = "User not found.";
        }
      } catch (err) {
        result.textContent = "Error fetching users.";
        console.error(err);
      }
    }

