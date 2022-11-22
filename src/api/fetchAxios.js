import axios from "axios";

const fetchAxios = axios.create({
  baseURL: "https://apiperu.dev/api/dni",
});

const token = "a3dd909f984a67e4274272eb2ea911b77e2b5190c0e032b389f0016622d0dbfc";

export const getDataDNI = async (dni) => {
  try {
    const { data } = await fetchAxios.get(`/${dni}?api_token=${token}`);
    if (!data.success) throw new error();
    return data.data;
  } catch (error) {
    return {
      dni,
      nombres: "",
      apellido_paterno: "",
      apellido_materno: "",
      error: true,
    };
  }
};
