// ReactWrapper.jsx
// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import ExampleReactComponent from './ExampleReactComponent'; // Adjust the import path as necessary

export function renderReactComponent(containerId) {
    console.log(ExampleReactComponent);
  ReactDOM.render(<ExampleReactComponent />, document.getElementById(containerId));
}

export function clearReactComponent(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.unmountComponentAtNode(container);
  }
}
