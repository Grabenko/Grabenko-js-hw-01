let zp = prompt("Введіть розмір вашої зарплати");
zp = Number(zp);
const nad = zp * 0.15;

const pod = (zp + nad) * 0.10;

const magaz = 190;

const res = zp + nad - pod - magaz;
console.log(res);

alert("В мене залишилось :" +  res);