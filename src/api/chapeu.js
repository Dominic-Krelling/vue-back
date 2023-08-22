import axios from "axios";
export default class ChapeusApi {
  async buscarTodosOsChapeus() {
    const { data } = await axios.get("/chapeus/");
    return data;
  }
  async adicionarChapeu(chapeu) {
    const { data } = await axios.post("/chapeus/", chapeu);
    return data;
  }
  async atualizarChapeu(chapeu) {
    const { data } = await axios.put(`/chapeus/${chapeu.id}/`, chapeu);
    return data;
  }
  async excluirChapeu(id) {
    const { data } = await axios.delete(`/chapeus/${id}/`);
    return data;
  }
}
