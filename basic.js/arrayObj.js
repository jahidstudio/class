let person = [{ name: "evan", village: "tarakanda", town: "mymensing", dristric: "mymensing" },
              { name: "rakib", village: "tarakanda", town: "mymensing", dristric: { city: ["dhaka", "softecft-it"], Selection: "10" }, },
               { name: "evafan", village: "tarakanda", town: "mymensing", dristric: "mymensing" },

];

console.log(person[1].dristric.city[0]);
