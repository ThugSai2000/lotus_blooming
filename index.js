const r = document.querySelector("#range");
const content1 = document.querySelector("#petal1");
//used addeventlistener to control the range input type functionality
r.addEventListener("input", function () {
  const rvalue = r.value;
  let a = rvalue;
  --a;
  // I used if and else conditions in order to control the opening and closing of petals
  if (a < 21) {
    // (-) i used minus symbol to move the petal to left side
    content1.style.rotate = -a + "deg";
  } else {
    //parseInt() is very useful in this kind of projects where we can convert numbers into numerical values--
    content1.style.rotate = -parseInt(21) + "deg";
  }
  //console.log(a);
});

const content2 = document.querySelector("#petal2");
r.addEventListener("input", function () {
  const rvalue = r.value;
  let b = rvalue;
  ++b;
  if (b < 21) {
    content2.style.rotate = b + "deg";
  } else {
    content2.style.rotate = parseInt(21) + "deg";
  }
  // console.log(b);
});
const content3 = document.querySelector("#petal3");
r.addEventListener("input", function () {
  const rvalue = r.value;
  let c = rvalue;
  --c;
  if (c < 41) {
    content3.style.rotate = -c + "deg";
  } else {
    content3.style.rotate = -parseInt(41) + "deg";
  }
  //console.log(c);
});
const content4 = document.querySelector("#petal4");
r.addEventListener("input", function () {
  const rvalue = r.value;
  let d = rvalue;
  ++d;
  if (d < 41) {
    content4.style.rotate = d + "deg";
  } else {
    content4.style.rotate = parseInt(41) + "deg";
  }
  //console.log(d);
});
const content5 = document.querySelector("#petal5");
r.addEventListener("input", function () {
  const rvalue = r.value;
  let e = rvalue;
  --e;
  if (e < 61) {
    content5.style.rotate = -e + "deg";
  } else {
    content5.style.rotate = -parseInt(61) + "deg";
  }
  //console.log(e);
});
const content6 = document.querySelector("#petal6");
r.addEventListener("input", function () {
  const rvalue = r.value;
  let f = rvalue;
  ++f;
  if (f < 61) {
    content6.style.rotate = f + "deg";
  } else {
    content6.style.rotate = parseInt(61) + "deg";
  }
  // console.log(f);
});
