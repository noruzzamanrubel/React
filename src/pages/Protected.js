import React from 'react';

const Protected = ({ isLogined, children }) => {
    if (!isLogined) {
        return "You are not authorized to view this page. Please login first.";
    }
    return children;
}

export default Protected