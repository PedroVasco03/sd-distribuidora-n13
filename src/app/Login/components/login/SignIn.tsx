import { useEffect, useState } from "react";
import getAll from "../../../services/getAll";
import { useRouter } from "next/navigation";


interface User {
  email: string;
  senha: string;
  permissao: string;
}

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await getAll("usuario");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Verificar se os campos estão preenchidos
    if (!email.trim() || !senha.trim()) {
      setError("Por favor, preencha todos os campos!");
      return;
    }

    // Verificar se os dados de login são válidos
    const newData = data.filter(
      (item) => item.email === email && item.senha === senha
    );

    if (newData.length === 0) {
      setError("Email ou senha incorretos!");
      return;
    }

    if (newData[0].permissao === "restrito") {
      setError("Acesso negado. Você precisa de uma verificação do administrador!");
      return;
    }

    // Redirecionar para a página de usuário
    sessionStorage.setItem("user", JSON.stringify(newData));
    router.push("/user/home");
  };

  return (
    <>
      <form className="form" onSubmit={handleForm}>
        <h1 className="h1">Sign in</h1>
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <a className="a" href="#">
          Esqueceu a senha?
        </a>
        <button type="submit" className="button">
          Entrar
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </>
  );
};

export default SignIn;
