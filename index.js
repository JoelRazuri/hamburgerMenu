const $menuHamburguer = document.getElementById("menu-hamburguer"),
      $menuHamburguerActivate = document.getElementById("menu-hamburguer-activate"),
      $menuHamburguerItems = document.querySelectorAll(".item");


$menuHamburguer.addEventListener("click", () => {
    if ($menuHamburguerActivate.style.display === "none"){
        $menuHamburguerActivate.style.display = "flex"
    } else {
        $menuHamburguerActivate.style.display = "none"
    }
});


$menuHamburguerItems.forEach(el => el.addEventListener("click", () => {
    $menuHamburguerActivate.style.display = "none";
}));


