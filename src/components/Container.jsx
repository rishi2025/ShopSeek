import React from "react";

function Container({className, children, px='px-4'}) {
    return <div className={`w-full max-w-full mx-auto ${px} ${className}`}>
        {children}
    </div>;
}

export default Container;