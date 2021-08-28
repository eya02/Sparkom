const calculateTip = (total, tipPercent = 0.25) => total + total * tipPercent;

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});
