// Return a random hex color.
export function randomColor() {
  return '#' + ('000000' + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)
}

// Return a random number between min and max.
export function randomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min)
}
