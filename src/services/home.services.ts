import axios from "axios";
import {HomeData} from '@/interfaces/home.interface';

export const getHome = {
    async getAll() {
        const {data} = await axios.get<HomeData>("https://rcw108.com/wp-json/wp/v2/pages/2?acf_format=standard");
        return data
    }
}
