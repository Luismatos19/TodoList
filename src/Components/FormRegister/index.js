import api from "../../services/axios";
import { toast } from "react-toastify";

//função para fazer o registro

export default async function FormRegister(username, email, password) {
    const user = {
        username: username,
        email: email,
        password: password,
    };

    //header paraa  requisição
    const headers = {
        "Content-Type": "application/json",
        Authorization: "JWT fefege...",
    };

    console.log(user);

    try {
        await api.post("/register", user, {
            headers: headers,
        });
        toast.success("Registro feito com sucesso");
        return true;
    } catch (err) {
        console.log(err);
        toast.error("Preencha todos os campos");
        return false;
    }
}
