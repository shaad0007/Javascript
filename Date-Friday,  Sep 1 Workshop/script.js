const obj = {
  name: "shaad",
  city: "Indore",
  state: "M.P",
  age: 40,
  fullName: function () {
    return this.name + " " + this.age;
  },
  fav: ["one", "two", "three", "four"],
};

obj.name = "wasim";
console.log(obj);

// console.log(obj["fav"][0]);
// console.log(obj.fullName());
// console.log();
// document.write(obj);

// const arr = [1, 2, 3, 4, 5];
// arr[1] = 10;
// console.log(arr);
