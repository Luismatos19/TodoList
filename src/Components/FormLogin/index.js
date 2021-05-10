import React from "react";
import axios from "axios";

export default async function FormLogin(email, password) {
    const data = await axios.post("http://127.0.0.1:3333/register");
}
