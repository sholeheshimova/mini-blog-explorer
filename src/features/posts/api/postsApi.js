import { instance } from "../../../services/axiosInstance";

export async function getPosts() {
    const response  = await instance.get("/posts")

    // console.log(response.data);

    return response.data;

}