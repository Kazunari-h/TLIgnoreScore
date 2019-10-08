const list_rst = document.querySelectorAll(".list-rst__rate")

if (list_rst) {
    list_rst.forEach(element => {
        element.style.display = "none";
    });
}

const restaurant_rating = document.getElementById("js-header-rating");
if (restaurant_rating) {
    restaurant_rating.style.display = "none";
}