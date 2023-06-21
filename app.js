//DOM ile çekiyoruz

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

// const callBack = () => {
//   //Güncel zamanı alıyoruz

//   const dateNow = new Date();
//   let hr = dateNow.getHours();
//   let min = dateNow.getMinutes();
//   let sec = dateNow.getSeconds();

//   //Number i karekter olarak sınırlayamadıgımız ıcın strıng cevırıyoruz. ıkı basamakla sınırlandırma ıstıyorum(padStart)

//   hr = hr.toString().padStart(2, "0");
//   min = min.toString().padStart(2, "0");
//   sec = sec.toString().padStart(2, "0");

//   //const timeString = `${hr} : ${min} : ${sec} `;
//   //doma yazdırmak
//   hour.textContent = hr;
//   minute.textContent = min;
//   seconds.textContent = sec;
// };
// const clock = setInterval(callBack, 1000);

//2.yol
const clock = setInterval(() => {
  const dateNow = new Date();
  let hr = dateNow.getHours();
  let min = dateNow.getMinutes();
  let sec = dateNow.getSeconds();

  hr = hr.toString().padStart(2, "0");
  min = min.toString().padStart(2, "0");
  sec = sec.toString().padStart(2, "0");

  hour.textContent = hr;
  minute.textContent = min;
  seconds.textContent = sec;
}, 1000);
//default değer 1000milisaniyedir, yazmasanda her sn ye de bir güncelleyecek
