import React from 'react'
import * as icons from '@ant-design/icons'


const Icon = ({icon}) => {
    const antIcon = icons;
    return React.createElement(antIcon[icon]);
};

export default Icon;