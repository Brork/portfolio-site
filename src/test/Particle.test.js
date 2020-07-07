import { Particle } from "../Particle";
import "@testing-library/jest-dom/extend-expect";

describe("Particle", () => {
  it("Returns a new object", () => {
    const actual = new Particle(5, 5, 5);
    expect(actual).toMatchObject({});
  });
  it("Has a radius property that is the value of the radius argument", () => {
    const radius = 5;
    const actual = new Particle(radis, 5, 5);
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
    it("adds the value of velocity.xd property to the x property", () => {
      const actual = new Particle(5, 5, 5);
      actual.velocity.xd = 5;
      actual.update();
      expect(actual.x).toBe(10);
    });
    it("is able to add correctly positive and negative integers and update the x property correctly", () => {
      const actual = new Particle(5, 5, 5);
      const actual2 = new Particle(5, -5, 5);
      actual.velocity.xd = -5;
      actual2.veloctiy.xd = -5;
      actual.update();
      actual2.update();
      expect(actual.x).toBe(0);
      expect(actual2.x).toBe(-10);
    });
    it("adds the value of velocity.yd property to the y property", () => {
      const actual = new Particle(5, 5, 5);
      actual.velocity.yd = 5;
      actual.update();
      expect(actual.y).toBe(10);
    });
    it("is able to add correctly positive and negative integers and update the y property correctly", () => {
      const actual = new Particle(5, 5, 5);
      const actual2 = new Particle(5, 5, -5);
      actual.velocity.yd = -5;
      actual2.veloctiy.yd = -5;
      actual.update();
      actual2.update();
      expect(actual.y).toBe(0);
      expect(actual2.y).toBe(-10);
    });
  });
  describe("Particle.applyFriction", () => {
    it("receives a number less than one as an argument and updates the velocity.xd value to be it's original value multiplied by the argument", () => {
      const actual = new Particle(5, 5, 5);
      const expected = 99;

      actual.velocity.xd = 100;
      actual.friction(0.99);
      expect(actual.velocity.xd).toBe(expected);
    });
    it("receives a number less than one as an argument and updates the velocity.yd value to be it's original value multiplied by the argument", () => {
      const actual = new Particle(5, 5, 5);
      const expected = 99;

      actual.velocity.yd = 100;
      actual.friction(0.99);
      expect(actual.velocity.yd).toBe(expected);
    });
    it("if the argument one or greater no change is made to the velocity.xd property", () => {
      const actual = new Particle(5, 5, 5);
      const expected = 10;
      actual.velocity.xd = expected;
      actual.friction(1);
      expect(actual.velocity.xd).toBe(expected);
      actual.friction(2);
      expect(actual.velocity.xd).toBe(expected);
    });
    it("if the argument one or greater no change is made to the velocity.yd property", () => {
      const actual = new Particle(5, 5, 5);
      const expected = 10;
      actual.velocity.yd = expected;
      actual.friction(1);
      expect(actual.velocity.yd).toBe(expected);
      actual.friction(2);
      expect(actual.velocity.yd).toBe(expected);
    });
    it("if the argument 0 or less then no change is made to the velocity.xd property", () => {
      const actual = new Particle(5, 5, 5);
      const expected = 10;
      actual.velocity.xd = expected;
      actual.friction(0);
      expect(actual.velocity.xd).toBe(expected);
      actual.friction(-0.99);
      expect(actual.velocity.xd).toBe(expected);
    });
    it("if the argument 0 or less then no change is made to the velocity.yd property", () => {
      const actual = new Particle(5, 5, 5);
      const expected = 10;
      actual.velocity.yd = expected;
      actual.friction(0);
      expect(actual.velocity.yd).toBe(expected);
      actual.friction(-0.84);
      expect(actual.velocity.yd).toBe(expected);
    });
  });
  describe("particle.applyGravity", () => {
    it("takes a number as an argument and adds it to the velocity.yd property", () => {
      const actual = new Particle(5, 5, 5);
      actual.gravity(1);
      expect(actual.velocity.yd).toBe(1);
    });
  });
  describe("Particle.resolveEdges", () => {});
});