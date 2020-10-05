const wrapElement = (el: HTMLElement, wrapper: HTMLElement) => {
  if (el && el.parentNode) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }
};

export { wrapElement };
