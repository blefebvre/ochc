/**
 * loads and decorates the hero block
 * @param {Element} block The block element
 */
export default function decorate(block) {
  // Find the picture element within the block
  const picture = block.querySelector("picture");

  // Move picture to be a direct child of the block for absolute positioning
  if (picture) {
    block.append(picture);
  }
}
