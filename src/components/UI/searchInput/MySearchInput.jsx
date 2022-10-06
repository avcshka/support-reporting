import classes from './MySearchInput.module.css'
import {useState} from "react";


const MySearchInput = ({getSearchQuery}) => {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearchQuery = () => {
        getSearchQuery(searchQuery);
    }

    return (
        <div>
            <form>
                <input
                    className={classes.mySearchInput}
                    type={'text'}
                    placeholder={'Search...'}
                    value={searchQuery}
                    onChange={(e) => onChangeSearchQuery(setSearchQuery(e.target.value))}
                />
            </form>
        </div>
    );
};

export default MySearchInput;