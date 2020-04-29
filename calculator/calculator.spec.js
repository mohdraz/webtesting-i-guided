const { add } = require("./calculator.js");

// test away!

describe("arithmetic functions", () => {
  describe("add()", () => {
    it("should return the sume of 2 number", () => {
      expect(add(2, 2)).toBe(4);
      expect(add(2, 3)).toBe(5);
    });

    // it("should thorw an exception if the parms are not number", () => {
    //   expect(add("blue", 2)).toThrow();
    //   expect(add(2, "red")).toThrow();
    //   expect(add("blue, 2")).toThrow();
    // });
    it("should throw an exception if the param are nto numbers", () => {
      expect(() => {
        add("red", 2);
      }).toThrow();

      expect(() => {
        add("blue", 3);
      }).toThrow();
    });

    it("should return 0 where called with no args", () => {
      // AAA - arrange, act, assess

      // arrange
      const expectedResult = 0;

      //act
      const actualResult = add();

      //assess
      expect(actualResult).toBe(expectedResult);
    });

    it("should return the param if only is passed ", () => {
      // AAA - arrange, act, assess

      // arrange
      const expectedResult = 5;

      //act
      const actualResult = add(5);

      //assess
      expect(actualResult).toBe(expectedResult);
    });

    it("should handle more than two arguments", () => {
      expect(add(1, 2, 3)).toBe(6);
      expect(add(1, 2, 3, 5)).toBe(11);
    });

    it("should accept an array of numbers", () => {
      expect(add([1, 2, 3])).toBe(6);
      expect(add([1, 2, 3, 5])).toBe(11);
    });

    it.todo("what if there are 2 arrays");
  });
});
