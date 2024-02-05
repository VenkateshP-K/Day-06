class circle {
    constructor (radius,color) {
      this.radius = radius;
      this.color = color
    }
    getarea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    getcircumference() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  let circle02 = new circle(10,"red");
  console.log(circle02)
  console.log(circle02.getarea());
  console.log(circle02.getcircumference());