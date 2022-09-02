import axios from "axios";
import Service from './Service.json'

export default class ReportService {
    static async getAll(reportType, dateStart, dateEnd) {
            const resp = await axios.get(`${Service.SERVER_URL_TABLE}&dbeg=${dateStart}&dend=${dateEnd}&ttt=2&typ=${reportType}`)
            return resp.data
    }

    static async getMenu() {
        try {
            const resp = await axios.get(Service.SERVER_URL_MENU)
            return resp.data
        } catch (e) {
            console.log("getMenu()", e);
        }
    }
}