$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const color = $("select#color").val();
    const animal = $("select#animal").val();
    let answer = "";
    let img = "";
    if (color === "red") {
      if (animal === "dog") {
        answer = "Clifford";
        img = "img/clifford.jpg";
      } else {
        answer = "Arlene";
        img = "img/arlene.jpg";
      }
    } else if (color === "blue") {
      if (animal === "dog") {
        answer = "blue";
        img = "img/blue.jpg";
      } else {
        answer = "Tom";
        img = "img/tom.jpg";
      }
    } else if (color === "green") {
      if (animal === "dog") {
        answer = "Muttley";
        img = "img/muttley.jpg";
      } else {
        answer = "This green cat";
        img = "img/green-cat.jpg";
      }
    } else {
      if (animal === "dog") {
        answer = "Jake the Dog";
        img = "img/jake.jpg";
      } else {
        answer = "Garfield";
        img = "img/garfield.jpg";
      }
    }
    $("#result h2").text(answer);
    $("#result img").attr("src", img);
  });
});
