const apiUrl = import.meta.env.VITE_API_URL;

/*
export async function loginUserService({ name, password }) {
  try {
    const response = await fetch(`${apiUrl}/api/v1/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ name: "samanta williams", password: "167238" }),
    });
    const token = await response.text();

    console.log(token);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

export async function registrerUserService({ name, password, email }) {
  try {
    const response = await fetch(`${apiUrl}/api/v1/users/login`, {
      method: "POST",
      body: JSON.stringify({ name, password, email }),
    });
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
*/