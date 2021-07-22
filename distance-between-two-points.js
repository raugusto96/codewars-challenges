// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.

// your code here
function distanceBetweenPoints({ x: x1, y: y1 }, { x: x2, y: y2 }) {
  return Math.hypot(x1 - x2, y1 - y2);
}