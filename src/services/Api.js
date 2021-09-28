import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
})

export const getdadosContatos = async () => {
  const url = `http://localhost:3000/camposIniciaisDeValores`
  return await axios.get(url)
}

