import api from "../../services/axios";

export default async function FormRegister(username, email, password) {
    const user = {
        username: username,
        email: email,
        password: password,
    };

    const headers = {
        "Content-Type": "application/json",
        Authorization: "JWT fefege...",
    };

    console.log(user);

    await api.post("http://127.0.0.1:3333/register", user, {
        headers: headers,
    });
}
