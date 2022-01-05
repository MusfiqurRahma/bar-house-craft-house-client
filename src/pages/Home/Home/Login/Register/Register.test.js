import React from 'react';
import ReactDom from 'react-dom';
import Register from './Register';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Register></Register>, div);
})