import axios from "axios";
import Service from './Service.json'

export default class ReportService {
    static async getAll(reportType, dateStart, dateEnd) {
        try {
            // const resp = await axios.get(`${Service.SERVER_URL_TABLE} + &dbeg=${dateStart} + &dend=${dateEnd} + &ttt=2 + &typ=${reportType}`)
            const resp = await axios.get(`${Service.SERVER_URL_TABLE}&dbeg=2022-05-31&dend=2022-08-03&ttt=2&typ=${reportType}`)
            return resp.data
        } catch (e) {
            console.log("getAll()", e);
        }
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