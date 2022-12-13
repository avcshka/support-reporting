import Icon from "../UI/icon/Icon";
import MyButton from "../UI/button/MyButton";
import classes from "./MySidebar.module.css"
import React, {useState} from "react";
import MyLogo from "../UI/logo/MyLogo";

const MySidebar = ({menuItems, changeActiveMenuItem}) => {
    const [activeMenuId, setActiveMenuId] = useState(0);

    const onChangeActiveMenuItem = (id) => {
        setActiveMenuId(id);
        changeActiveMenuItem(id);
    }

    return (
        <div className={classes.myMenu}>

            <MyLogo/>

            <div>
                {menuItems.map((menuItem, index) =>
                    <MyButton
                        key={'menuitem_' + index}
                        active={activeMenuId === menuItem.id}
                        onClick={() => onChangeActiveMenuItem(menuItem.id)}>
                        <div className={classes.myItems}>
                            {menuItem.icon
                                ? <div className={classes.myIcon}>
                                    <Icon icon={menuItem.icon}/>
                                </div>
                                : <div style={{marginLeft: '20px'}}></div>
                            }
                            {menuItem.title}
                        </div>
                    </MyButton>
                )}
            </div>
        </div>
    );
};

export default MySidebar;