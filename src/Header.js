import React from 'react';
import HeaderCss from'./Header.css'
const Header = function (props) {
    return (
        React.createElement("div", {className: "header"}, props.heading)
    )
}
export default Header;