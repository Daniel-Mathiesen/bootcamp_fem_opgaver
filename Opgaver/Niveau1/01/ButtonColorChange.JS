function start() {
    var button = document.getElementById("my-button");
    button.addEventListener("click", toggle);
  };

  function toggle() {
    var color = document.getElementById("my-button");
    color.classList.toggle('green');
  };


start();