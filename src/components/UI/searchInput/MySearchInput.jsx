import classes from './MySearchInput.module.css'
import {useEffect, useState} from "react";


const MySearchInput = ({getSearchQuery}) => {

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getSearchQuery(searchQuery);
    })

    return (
        <div>
            <form>
                <input
                    className={classes.mySearchInput}
                    type={'text'}
                    placeholder={'Search...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
        </div>
    );
};

export default MySearchInput;