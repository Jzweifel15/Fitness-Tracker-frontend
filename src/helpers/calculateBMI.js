export const calculateBMI = (weight, height) => {
  return Math.round((parseInt(weight) * 0.454) / ((parseInt(height) * 0.0254) ** 2));
}