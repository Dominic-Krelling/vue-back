import axios from "axios";
export default class TenissApi {
  async buscarTodosOsTenis() {
    const { data } = await axios.get("/tenis/");
    return data;
  }
  async adicionarTenis(tenis) {
    const { data } = await axios.post("/tenis/", tenis);
    return data;
  }
  async atualizarTenis(tenis) {
    const { data } = await axios.put(`/tenis/${tenis.id}/`, tenis);
    return data;
  }
  async excluirTenis(id) {
    const { data } = await axios.delete(`/tenis/${id}/`);
    return data;
  }
}
