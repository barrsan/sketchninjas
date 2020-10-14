const checkParentClassName = (element: any, className: string) => {
  if (
    element.className &&
    element.className.split(' ').indexOf(className) >= 0
  ) {
    return true;
  }

  return !!(
    element.parentNode && checkParentClassName(element.parentNode, className)
  );
};

export { checkParentClassName };
