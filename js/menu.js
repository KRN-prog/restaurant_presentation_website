var zoomImg = function () {
  var clone = this.cloneNode();
  clone.classList.remove("zoomImg1");

  var lb = document.getElementById("lbInner");
  lb.innerHTML = "";
  lb.appendChild(clone);

  lb = document.getElementById("lbOuter");
  lb.classList.add("show");
};

var zoomImg2 = function () {
  var clone = this.cloneNode();
  clone.classList.remove("zoomImg2");

  var lb = document.getElementById("lbInner");
  lb.innerHTML = "";
  lb.appendChild(clone);

  lb = document.getElementById("lbOuter");
  lb.classList.add("show");
};

var zoomImg3 = function () {
  var clone = this.cloneNode();
  clone.classList.remove("zoomImg3");

  var lb = document.getElementById("lbInner");
  lb.innerHTML = "";
  lb.appendChild(clone);

  lb = document.getElementById("lbOuter");
  lb.classList.add("show");
};

window.addEventListener("load", function(){
  var images = document.getElementsByClassName("zoomImg1");
  if (images.length>0) {
    for (var img of images) {
      img.addEventListener("click", zoomImg);
    }
  }

  document.getElementById("lbOuter").addEventListener("click", function(){
    this.classList.remove("show");
  });


  var images2 = document.getElementsByClassName("zoomImg2");
  if (images2.length>0) {
    for (var img of images2) {
      img.addEventListener("click", zoomImg2);
    }
  }

  document.getElementById("lbOuter").addEventListener("click", function(){
    this.classList.remove("show");
  });

  var images2 = document.getElementsByClassName("zoomImg3");
  if (images2.length>0) {
    for (var img of images2) {
      img.addEventListener("click", zoomImg2);
    }
  }

  document.getElementById("lbOuter").addEventListener("click", function(){
    this.classList.remove("show");
  });
});
