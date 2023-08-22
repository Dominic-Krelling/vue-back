import axios from "axios";
export default class CalcasApi {
  async buscarTodasAsCalcas() {
    const { data } = await axios.get("/calcas/");
    return data;
  }
  async adicionarCalca(calca) {
    const { data } = await axios.post("/calcas/", calca);
    return data;
  }
  async atualizarCalca(calca) {
    const { data } = await axios.put(`/calcas/${calca.id}/`, calca);
    return data;
  }
  async excluirCalca(id) {
    const { data } = await axios.delete(`/calcas/${id}/`);
    return data;
  }
}
