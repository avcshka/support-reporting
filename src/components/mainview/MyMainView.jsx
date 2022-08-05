import React, {useState} from 'react';
import classes from "./MyMainView.module.css"
import MyTable from "../UI/table/MyTable";
import MyHeaderView from "./headerview/MyHeaderView";
import axios from "axios";

const MyMainView = () => {

    // const [table, setTable] = useState([])
    //
    // async function fetchTable() {
    //     const responseTable =  await axios.get('https://test.oculeus.com/supportreport/get_report?dbeg=2022-05-31&dend=2022-08-03&ttt=2&typ=1')
    // }


    const [test, setTest] = useState([])
    const info = [
        {"USER NAME": "Irina Grosu", "SCORE OCULEUS": 1640, "EFFICIENCY OCULEUS": 12.62,},
        {"USER NAME": "Igor Visotski","SCORE OCULEUS": 1085,"EFFICIENCY OCULEUS": 6.46},
        {"USER NAME": "Natalia Bucicovscaia","SCORE OCULEUS": 680,"EFFICIENCY OCULEUS": 5.27},
        {"USER NAME": "Vlada Androsova","SCORE OCULEUS": 925,"EFFICIENCY OCULEUS": 5.26},
        {"USER NAME": "Michael Sumarev","SCORE OCULEUS": 870,"EFFICIENCY OCULEUS": 5.12},
        {"USER NAME": "Svetozar A","SCORE OCULEUS": 70,"EFFICIENCY OCULEUS": 0.40}
    ]


    return (
        <div className={classes.myMainView}>

            <MyHeaderView>

            </MyHeaderView>

            <hr/>

            <MyTable>

            </MyTable>

        </div>
    );
};

export default MyMainView;