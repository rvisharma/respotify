import React from "react";

export default React.createClass({
    render: function () {
        let {name} = this.props;
        return (
            <div className="greeting">
                Hello, {name}!
            </div>
        );
    }
});