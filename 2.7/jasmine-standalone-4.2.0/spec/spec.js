describe("YouTube Api", function () {
    it("API result length is as expected", function () {
      return getResponse("Java").then(function (result) {
        expect(result.length).toEqual(15);
      });
    });
  
    it("noOfPage is working as expected", () => {
      const res = noOfPage(60);
      expect(res).toEqual(12);
    });
  
    it("nextPage is Working as expected", () => {
      const res = nextPage(5);
      expect(res).toBe(6);
    });
  
    it("previousPage is working as expected", () => {
      const res = previousPage(5);
      expect(res).toBe(4);
    });
  });
  