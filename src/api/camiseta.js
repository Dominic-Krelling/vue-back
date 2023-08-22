import axios from "axios";
export default class CamisetasApi {
  async buscarTodasAsCamisetas() {
    const { data } = await axios.get("/camisetas/");
    return data;
  }

  async addCamiseta(camiseta) {
    const { data } = await axios.post("/camisetas/", camiseta);
    return data;
  }

  async updatCamiseta(camiseta) {
    const { data } = await axios.put(`/camisetas/${camiseta.id}/`, camiseta);
    return data;
  }
  async deletCamiseta(id) {
    const { data } = await axios.delete(`/camisetas/${id}/`);
    return data;
  }
}
