let res = 0;

for (let i = 0; i <= 1000; i++) {
  if (i % 2) {
    res += i;
    console.log("Found");
  }
}

console.log(res * 5 > 5000 ? "Bigger" : "Smaller or equal");
