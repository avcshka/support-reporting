import Icon from "../UI/icon/Icon";
import MyButton from "../UI/button/MyButton";
import classes from "./MyMenu.module.css"


const MyMenu = ({menuItems}) => {
    return (
        <div className={classes.myMenu}>
            {menuItems.map(menuItem =>
                <MyButton>
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
    );
};

export default MyMenu;