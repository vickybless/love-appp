function lovecal() {
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  // error message
  const error = document.getElementById("error");
  // answer area
  const answer = document.getElementsByClassName("heading");
  // message area
  const message = document.getElementsByClassName("message");

  //Conditons
  if (firstname.value == "" || lastname.value == "") {
    error.style.visibility = "visible";
    error.innerText = "Invalid name";
    error.style.color = "orange";
  } else if (firstname.value.length < 3 || lastname.value.length < 3) {
    error.style.visibility = "visible";
    error.innerText = "Name must be minimum of 3 characters";
    error.style.color = "orange";
  } else {
    // percentage =Math.floor(Math.random()* 100 + 1);
    // answer.innerHTML = `message.innerHTL = <h1>${percentage}% <h1>`;
    var love = Math.ceil(Math.random() * 100);
    //   answer[0].innerHTML = love + "%";
    //   answer[0].style.visibilty = "visible";
    message[0].innerHTML = `Hi, ${firstname.value} and
      ${lastname.value} Your Love Score is:  <br/> ${love}%`;

    if (love >= 70) {
      message[0].innerHTML = `Hi, ${firstname.value} and
      ${lastname.value} Your Love Score is:  <br/><br/> ${love}% <br/><br/> aww... sweet couple ❤️ `;
    } else if (love > 30 && love <= 70) {
      message[0].innerHTML = `Hi, ${firstname.value} and
      ${lastname.value} Your Love Score is:  <br/><br/> ${love}% <br/><br/> Love is always trying 😐 `;
    } else if (love <= 30) {
      message[0].innerHTML = `Hi, ${firstname.value} and
      ${lastname.value} Your Love Score is:  <br/><br/> ${love}% <br/><br/> Try a new Partner 😂 `;
    } else {
      message[0].innerHTML = `The Pressure is getting worser 🤣`;
    }

    // Setting Timer
    //   setTimeout(()=>{
    //       message[0].innerHTML = ""
    //   }, 10000)
  }
  // firstname.value =""
  // lastname.value= ""
  //   End Setting  Timer
}

//Social share...
//   const link = encodeURI(window.location.href);
//   const msg = encodeURIComponent(
//     "Experience love and fun with this application "
//   );
//   const title = encodeURIComponent(
//     document.querySelector("title").textContent
//   );

//   console.log([link, msg, title]);

//   const fb = document.querySelector(".facebook");
//   fb.href = `https://www.facebook.com/share.php?u=${link}`;

//   const twitter = document.querySelector(".twitter");
//   twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

//   //whatsApp
//   const whatsApp = document.querySelector(".whatsapp");
//   whatsApp.href = `(https://api.whatsapp.com/send?phone=XXXXXXXXXXX&text${msg}&source=&data=&app_absent${link})`;

//End social share...

//Print
//   const printBtn = document.getElementById("print");
//   printBtn.addEventListener("click", function () {
//     window.print();
//   });

//End Print
src =
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" >
  jQuery(document).ready(function () {
    $("#btn-print").click(function () {
      window.print();
    });
  });
