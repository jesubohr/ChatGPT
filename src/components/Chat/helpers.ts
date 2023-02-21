export function setByScrollHeight(element: HTMLElement) {
  const targetElement = element as HTMLElement
  targetElement.style.height = 'auto'
  targetElement.style.height = `${targetElement.scrollHeight}px`
}
