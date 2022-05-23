import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ isLogined, children }) => {
    if (!isLogined) {
        return "You are not authorized to view this page. Please login first.";
    }
    return children;
}

export default Protected