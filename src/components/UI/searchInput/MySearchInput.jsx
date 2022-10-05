import classes from './MySearchInput.module.css'
import {useState} from "react";


const MySearchInput = ({getSearchQuery}) => {

    const [searchQueries, setSearchQueries] = useState('');

    const getQueries = () => {
        getSearchQuery(searchQueries);
    }

    return (
        <div>
            <form>
                <input
                    className={classes.mySearchInput}
                    type={'text'}
                    placeholder={'Search...'}
                    value={searchQueries}
                    onChange={(e) => getQueries(setSearchQueries(e.target.value))}
                />
            </form>
        </div>
    );
};

export default MySearchInput;