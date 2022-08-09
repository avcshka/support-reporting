import axios from "axios";

export default class ReportService {
    static async getAll() {
        try {
            const resp =  await axios.get('https://test.oculeus.com/supportreport/get_report?dbeg=2022-05-31&dend=2022-08-03&ttt=2&typ=1')
            return resp.data
        } catch (e) {
            console.log("getAll()", e);
        }
    }
    static async getMenu() {
        try {
            const resp = await axios.get('https://test.oculeus.com/supportreport/get_reports_list')
            return resp.data
        } catch (e) {
            console.log("getMenu()", e);
        }
    }
}