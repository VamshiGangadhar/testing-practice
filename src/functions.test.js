/* eslint-disable jest/valid-expect-in-promise */
import functions from "./functions";

// sum of the numbers testing

test("sum of two numbers", () => {
  expect(functions.add(10, 20)).toBe(30);
  expect(functions.add(1, 3)).toBe(4);
});

test("sum of two numbers not 5", () => {
  expect(functions.add(10, 20)).not.toBe(31);
});

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkmate()).toBeFalsy();
});

test("the value should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

test("user details", () => {
  expect(functions.checkUser()).toEqual({
    firstName: "Vamshi",
    lastName: "Hanumanthu",
  });
});

test("Should be under age", () => {
  const age = 17;
  expect(age).toBeLessThan(18);
});

// arrays
test("Admin Should be in username", () => {
  const userNames = ["vamshi", "Hanumanthu", "gangadhar"];
  expect(userNames).toContain("vamshi");
});

test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  console.log("Fetched Data:", data); // Add this line
  expect(data.name).toEqual("Leanne Graham");
});

// test("User fetched name should be Leanne Graham", () => {
//   functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });
