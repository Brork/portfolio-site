export class Particle {
  constructor(radius, x, y) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.velocity = { x: 0, y: 0 };
    this.mass = 1;
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  applyFriction(num) {
    if (num < 1 && num > 0) {
      this.velocity.x = this.velocity.x * num;
      this.velocity.y = this.velocity.y * num;
    }
  }

  applyGravity(num) {
    this.velocity.y += num;
  }

  resolveEdges(height, width) {
    if (this.x > width - this.radius) {
      this.x = width - this.radius;
      if (this.velocity.x > 0) {
        this.velocity.x = -this.velocity.x;
      }
    } else if (this.x < 0 + this.radius) {
      this.x = 0 + this.radius;
      if (this.velocity.x < 0) {
        this.velocity.x = -this.velocity.x;
      }
    }
    if (this.y > height - this.radius) {
      this.y = height - this.radius;
      if (this.velocity.y > 0) {
        this.velocity.y = -this.velocity.y;
      }
    } else if (this.y < 0 + this.radius) {
      this.y = 0 + this.radius;
      if (this.velocity.y < 0) {
        this.velocity.y = -this.velocity.y;
      }
    }
  }
}
