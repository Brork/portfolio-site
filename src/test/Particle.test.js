import { Particle } from "../Particle";
import "@testing-library/jest-dom/extend-expect";

describe("Particle", () => {
  it("Returns a new object", () => {
    const actual = new Particle(5, 5, 5);
    expect(actual).toMatchObject({});
  });
  it("Has a radius property that is the value of the radius argument", () => {
    const radius = 5;
    const actual = new Particle(radius, 5, 5);
    expect(actual.radius).toBe(radius);
  });
  it("Has an x property that is value of the x argument", () => {
    const x = 5;
    const actual = new Particle(5, x, 5);
    expect(actual.x).toBe(x);
  });
  it("Has a y property that is the value of the y argument", () => {
    const y = 5;
    const actual = new Particle(5, 5, y);
    expect(actual.y).toBe(y);
  });
  it("Has a velocity property that is an object containing an x & y property set to 0", () => {
    const actual = new Particle(5, 5, 5);
    expect(actual.velocity).toMatchObject({ x: 0, y: 0 });
  });
  it("Has a mass property that is equal to 1", () => {
    const actual = new Particle(5, 5, 5);
    expect(actual.mass).toBe(1);
  });
  describe("Particle.update", () => {
    it("adds the value of velocity.x property to the x property", () => {
      const actual = new Particle(5, 5, 5);
      actual.velocity.x = 5;
      actual.update();
      expect(actual.x).toBe(10);
    });
    it("is able to add correctly positive and negative integers and update the x property correctly", () => {
      const actual = new Particle(5, 5, 5);
      const actual2 = new Particle(5, -5, 5);
      actual.velocity.x = -5;
      actual2.velocity.x = -5;
      actual.update();
      actual2.update();
      expect(actual.x).toBe(0);
      expect(actual2.x).toBe(-10);
    });
    it("adds the value of velocity.y property to the y property", () => {
      const actual = new Particle(5, 5, 5);
      actual.velocity.y = 5;
      actual.update();
      expect(actual.y).toBe(10);
    });
    it("is able to add correctly positive and negative integers and update the y property correctly", () => {
      const actual = new Particle(5, 5, 5);
      const actual2 = new Particle(5, 5, -5);
      actual.velocity.y = -5;
      actual2.velocity.y = -5;
      actual.update();
      actual2.update();
      expect(actual.y).toBe(0);
      expect(actual2.y).toBe(-10);
    });
  });
  xdescribe("Particle.reverseXVelocity", () => {
    it("if velocity.x has a value of 0, returns 0", () => {
      const actual = new Particle(5, 5, 5);
      actual.reverseXVelocity();
      expect(actual.velocity.x).toBe(0);
    });
    it("if velocity.x property has a positive integer value will change property to be same integer negative", () => {
      const actual = new Particle(5, 5, 5);
      actual.velocity.x = 1;
      actual.reverseXVelocity();
      expect(actual.velocity.x).toBe(-1);
    });
    it("if velocity.x property has a negative integer value will change property to be the same integer positive", () => {
      const actual = new Particle(5, 5, 5);
      actual.velocity.x = -1;
      expect(actual.velocity.y).toBe(1);
    });
  });
  xdescribe("Particle.reverseYVelocity", () => {
    it("if velocity.y has a value of 0, returns 0", () => {
      const actual = new Particle(5, 5, 5);
      actual.reverseYVelocity();
      expect(actual.velocity.y).toBe(0);
    });
    it("if velocity.y property has a positive integer value will change property to be same integer negative", () => {
      const actual = new Particle(5, 5, 5);
      actual.velocity.x = 1;
      actual.reverseYVelocity();
      expect(actual.velocity.y).toBe(-1);
    });
    it("if velocity.x property has a negative integer value will change property to be the same integer positive", () => {
      const actual = new Particle(5, 5, 5);
      actual.velocity.x = -1;
      expect(actual.velocity.y).toBe(1);
    });
  });
  describe("Particle.applyFriction", () => {
    it("receives a number less than one as an argument and updates the velocity.x value to be it's original value multiplied by the argument", () => {
      const actual = new Particle(5, 5, 5);
      const expected = 99;

      actual.velocity.x = 100;
      actual.applyFriction(0.99);
      expect(actual.velocity.x).toBe(expected);
    });
    it("receives a number less than one as an argument and updates the velocity.y value to be it's original value multiplied by the argument", () => {
      const actual = new Particle(5, 5, 5);
      const expected = 99;

      actual.velocity.y = 100;
      actual.applyFriction(0.99);
      expect(actual.velocity.y).toBe(expected);
    });
    it("if the argument one or greater no change is made to the velocity.x property", () => {
      const actual = new Particle(5, 5, 5);
      const expected = 10;
      actual.velocity.x = expected;
      actual.applyFriction(1);
      expect(actual.velocity.x).toBe(expected);
      actual.applyFriction(2);
      expect(actual.velocity.x).toBe(expected);
    });
    it("if the argument one or greater no change is made to the velocity.y property", () => {
      const actual = new Particle(5, 5, 5);
      const expected = 10;
      actual.velocity.y = expected;
      actual.applyFriction(1);
      expect(actual.velocity.y).toBe(expected);
      actual.applyFriction(2);
      expect(actual.velocity.y).toBe(expected);
    });
    it("if the argument 0 or less then no change is made to the velocity.x property", () => {
      const actual = new Particle(5, 5, 5);
      const expected = 10;
      actual.velocity.x = expected;
      actual.applyFriction(0);
      expect(actual.velocity.x).toBe(expected);
      actual.applyFriction(-0.99);
      expect(actual.velocity.x).toBe(expected);
    });
    it("if the argument 0 or less then no change is made to the velocity.y property", () => {
      const actual = new Particle(5, 5, 5);
      const expected = 10;
      actual.velocity.y = expected;
      actual.applyFriction(0);
      expect(actual.velocity.y).toBe(expected);
      actual.applyFriction(-0.84);
      expect(actual.velocity.y).toBe(expected);
    });
  });
  describe("particle.applyGravity", () => {
    it("takes a number as an argument and adds it to the velocity.y property", () => {
      const actual = new Particle(5, 5, 5);
      actual.applyGravity(1);
      expect(actual.velocity.y).toBe(1);
    });
  });
  describe.only("Particle.resolveEdges", () => {
    it("if x property is less than 0+radius property then x property will be set to 0+radius", () => {
      const actual = new Particle(5, -5, 5);
      actual.resolveEdges(100, 100);
      expect(actual.x).toBe(5);
    });
    it("if x property is less than 0+radius then velocity.x property will be reversed to be a positive integer if it was a negative one", () => {
      const actual = new Particle(5, -5, 5);
      actual.velocity.x = -5;
      actual.resolveEdges(100, 100);
      let xVelocityIsPositive;

      if (actual.velocity.x > 0) {
        xVelocityIsPositive = true;
      }

      expect(xVelocityIsPositive).toBe(true);
    });
    it("if x property is greater than width argument-radius property then x property will be set to width argument-radius property", () => {
      const actual = new Particle(5, 100, 5);
      actual.resolveEdges(100, 100);
      expect(actual.x).toBe(95);
    });
    it("if x property is greater than width arg-radius property then velocity.x property will be reversed to be a negative integer if it was a positive one", () => {
      const actual = new Particle(5, 100, 5);
      actual.velocity.x = 5;
      actual.resolveEdges(100, 100);
      let xVelocityIsNegative;

      if (actual.velocity.x < 0) {
        xVelocityIsNegative = true;
      }

      expect(xVelocityIsNegative).toBe(true);
    });
    it("if y property is less than 0+radius property then x property will be set to 0+radius", () => {
      const actual = new Particle(5, 5, -5);
      actual.resolveEdges(100, 100);
      expect(actual.y).toBe(5);
    });
    it("if y property is less than 0+radius then velocity.y property will be reversed to be a positive integer if it was a negative one", () => {
      const actual = new Particle(5, 5, -5);
      actual.velocity.y = -5;
      actual.resolveEdges(100, 100);
      let yVelocityIsPositive;

      if (actual.velocity.y > 0) {
        yVelocityIsPositive = true;
      }

      expect(yVelocityIsPositive).toBe(true);
    });
    it("if y property is greater than height argument-radius property then x property will be set to height argument-radius property", () => {
      const actual = new Particle(5, 5, 100);
      actual.resolveEdges(100, 100);
      expect(actual.y).toBe(95);
    });
    it("if y property is greater than height argument-radius property then velocity.y property will be reversed to be a negative integer if it was a positive one", () => {
      const actual = new Particle(5, 5, 100);
      actual.velocity.y = 5;
      actual.resolveEdges(100, 100);
      let yVelocityIsNegative;

      if (actual.velocity.y < 0) {
        yVelocityIsNegative = true;
      }

      expect(yVelocityIsNegative).toBe(true);
    });
    it("if x property is less than 0 + raidus property will call applyFriction method", () => {
      const actual = new Particle(5, 0, 5);
      const applyFriction = (Particle.prototype.applyFriction = jest.fn());

      actual.resolveEdges(100, 100);

      expect(applyFriction).toHaveBeenCalled();
    });
    it("if x property is greater than width argument - radius property will call applyFriction method", () => {
      const actual = new Particle(5, 100, 5);
      const applyFriction = (Particle.prototype.applyFriction = jest.fn());

      actual.resolveEdges(100, 100);

      expect(applyFriction).toHaveBeenCalled();
    });
    it("if y property is less than 0 + radius property will call applyFriction method", () => {
      const actual = new Particle(5, 5, 0);
      const applyFriction = (Particle.prototype.applyFriction = jest.fn());

      actual.resolveEdges(100, 100);

      expect(applyFriction).toHaveBeenCalled();
    });
    it("if y property is greater than height argument-radius property will call applyFriction method", () => {
      const actual = new Particle(5, 5, 100);
      const applyFriction = (Particle.prototype.applyFriction = jest.fn());

      actual.resolveEdges(100, 100);

      expect(applyFriction).toHaveBeenCalled();
    });
    it("will only call applyFriction method once even if both y and x property are both above height and width respectively", () => {
      const actual = new Particle(5, 100, 100);
      const applyFriction = (Particle.prototype.applyFriction = jest.fn());

      actual.resolveEdges(100, 100);

      expect(applyFriction).toHaveBeenCalledTimes(1);
    });
    it("will only call applyFriction method once even if both y and x property are both above height and width arg - radius prop respectively", () => {
      const actual = new Particle(5, 100, 100);
      const applyFriction = (Particle.prototype.applyFriction = jest.fn());

      actual.resolveEdges(100, 100);

      expect(applyFriction).toHaveBeenCalledTimes(1);
    });
    it("will only call applyFriction method once even if both y and x property are both below 0 + radius prop respectively", () => {
      const actual = new Particle(5, 0, 0);
      const applyFriction = (Particle.prototype.applyFriction = jest.fn());

      actual.resolveEdges(100, 100);

      expect(applyFriction).toHaveBeenCalledTimes(1);
    });
    it("will only call applyFriction method once if x prop is below 0 + radius prop and y prop is above height arg - radius prop", () => {
      const actual = new Particle(5, 0, 100);
      const applyFriction = (Particle.prototype.applyFriction = jest.fn());

      actual.resolveEdges(100, 100);

      expect(applyFriction).toHaveBeenCalledTimes(1);
    });
    it("will only call applyFriction method once if y prop is below 0 + radius prop and x prop is above width arg - radius prop", () => {
      const actual = new Particle(5, 100, 0);
      const applyFriction = (Particle.prototype.applyFriction = jest.fn());

      actual.resolveEdges(100, 100);

      expect(applyFriction).toHaveBeenCalledTimes(1);
    });
    it("will not call friction method if none of the above conditions are met", () => {
      const actual = new Particle(5, 50, 50);
      const applyFriction = (Particle.prototype.applyFriction = jest.fn());

      actual.resolveEdges(100, 100);

      expect(actual.x).toBe(50);
      expect(actual.y).toBe(50);
      expect(applyFriction).toHaveBeenCalledTimes(0);
    });
  });
});
