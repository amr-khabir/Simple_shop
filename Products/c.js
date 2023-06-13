function showHiddenElement1() {
  // استدعاء فتح النافذة الثانية
  var newWin = window.open("description.html");
  // تعيين دالة العرض المخفي بعد تحميل الصفحة الثانية
  newWin.onload = function() {
    var hiddenElement = newWin.document.getElementById("p1");
    hiddenElement.style.display = "block";

  };
}
function showHiddenElement2() {
  // استدعاء فتح النافذة الثانية
  var newWin = window.open("description.html");
  // تعيين دالة العرض المخفي بعد تحميل الصفحة الثانية
  newWin.onload = function() {
    var hiddenElement = newWin.document.getElementById("p2");
    hiddenElement.style.display = "block";
  };
}
function showHiddenElement3() {
  // استدعاء فتح النافذة الثانية
  var newWin = window.open("description.html");
  // تعيين دالة العرض المخفي بعد تحميل الصفحة الثانية
  newWin.onload = function() {
    var hiddenElement = newWin.document.getElementById("p3");
    hiddenElement.style.display = "block";
  };
}

function price1() {
  // استدعاء فتح النافذة الثانية
  var newWin = window.open("Price.html");

  // تعيين دالة العرض المخفي بعد تحميل الصفحة الثانية
  newWin.onload = function() {
    var input =newWin.document.getElementById("d1");
    input.value=8;
  };
}
function price2() {
  // استدعاء فتح النافذة الثانية
  var newWin = window.open("Price.html");

  // تعيين دالة العرض المخفي بعد تحميل الصفحة الثانية
  newWin.onload = function() {
    var input =newWin.document.getElementById("d1");
    input.value=50;
  };
}
function price3() {
  // استدعاء فتح النافذة الثانية
  var newWin = window.open("Price.html");

  // تعيين دالة العرض المخفي بعد تحميل الصفحة الثانية
  newWin.onload = function() {
    var input =newWin.document.getElementById("d1");
    input.value=150;
  };
}

var rating = document.getElementById("rating");
var stars = [];
for(var i = 0; i < 5; i++) {
  stars[i] = rating.appendChild(document.createElement("span"));
  stars[i].id="starr";
  stars[i].classList.add("fa");
  stars[i].classList.add("fa-star-o");
  stars[i].addEventListener("click", function() {
    var j = stars.indexOf(this);
    for(var i = 0; i <= j; i++) {
      stars[i].classList.remove("fa-star-o");
      stars[i].classList.add("fa-star"); 
    }
  });
}

function textt() {
  document.getElementById("txt1").innerHTML="<br>";
}

const btn = document.getElementById("b1");
const text = document.getElementById("txt"); 
const container = document.getElementById("txt1");

btn.addEventListener("click", function() {
  const span = document.createElement("span");
  span.id="st";
  span.innerHTML = text.value+"<br>";
  container.appendChild(span);  
});