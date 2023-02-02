//VM PROVISONING

//variables
let navTransform = 0;

//selectors
let navToggle = document.querySelector('.main-navbar .btn-toggle');
let menuToggle = document.querySelector('.main-navbar .navbar-toggle');
let backButton = document.querySelector('.main-navbar .btn-back');

//get all sibling
function getAllSiblings(element, parent) {
  const children = [...parent.children];
  return children.filter(child => child !== element);
}

//destroy menu
let navDestroy = () => {
  document.querySelectorAll(".main-navbar .navbar-toggle__inner .active, .main-navbar .navbar-toggle__inner .show").forEach((activeItem) => {
    activeItem.classList.remove("active")
    activeItem.classList.remove("show")
  })
}

//window click menu hide
if (matchMedia('(min-width: 1200px)').matches) {
  window.addEventListener("click", () => {
    navDestroy()
  })
}

// Prevent showing animation on window resize
// let resizeTimer;
// window.addEventListener("resize", () => {
//   document.body.classList.add("resize-animation-stopper");
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(() => {
//     document.body.classList.remove("resize-animation-stopper");
//   }, 400);
// });

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".main-navbar .dropdown").forEach(el => {
    el.addEventListener('click', function (e) {
      e.stopPropagation()
      this.lastElementChild.classList.toggle('show');
      this.classList.toggle('active');

      // remove child element active class
      let childrenOfUl = [].slice.call(this.lastElementChild.children);
      childrenOfUl.forEach((childItem) => {
        childItem.classList.remove("active")
      })
      el.lastElementChild.querySelectorAll("ul").forEach((item) => {
        if (item.classList.contains("show")) {
          item.classList.remove("show")
        }
      })

      //remove all active class from sibling
      let allSibling = getAllSiblings(this, this.parentElement)
      allSibling.forEach((sibling) => {
        if (sibling.classList.contains("active")) {
          sibling.classList.remove("active")
          sibling.lastElementChild.classList.remove('show');
        }
      })

      if (matchMedia('(min-width:768px) and (max-width: 1199px)').matches) {
        if(document.querySelectorAll(".main-navbar .dropdown.active").length<3){
          navTransform =0;
          menuToggle.style.cssText = `transform: translatex(${navTransform}px);`
          backButton.classList.add('d-none')
          backButton.classList.remove('d-inline-flex')
        }else{
          navTransform = -(document.documentElement.clientWidth/3)* (document.querySelectorAll(".main-navbar .dropdown.active").length - 2);
          menuToggle.style.cssText = `transform: translatex(${navTransform}px);`
          backButton.classList.remove('d-none')
          backButton.classList.add('d-inline-flex')
        }
      }

      if (matchMedia('(max-width: 767px)').matches) {
        navTransform -= 100;
        if (navTransform <= -100) {
          backButton.classList.remove('d-none')
          backButton.classList.add('d-inline-flex')
        }
        menuToggle.style.cssText = `transform: translatex(${navTransform}%);`
      }

      let nextUlRightPosition = this.lastElementChild.getBoundingClientRect().right
      let nextUlBottomtPosition = this.lastElementChild.getBoundingClientRect().bottom
      let documentWidth = document.documentElement.clientWidth
      let documentHeight = document.documentElement.clientHeight
       console.log("right position"+ nextUlRightPosition + "document width"+ documentWidth)
      if (matchMedia('(min-width: 1200px)').matches && nextUlRightPosition > documentWidth) {
        this.lastElementChild.style.cssText = "left: auto; right: 100%; z-index:1;";
      }

      // if(nextUlBottomtPosition>documentHeight){
      //   this.lastElementChild.style.cssText = "top: auto; bottom: 0;";
      // }
    });
  });
});


if (matchMedia('(max-width: 1199px)').matches) {
  // Menu toogle on mobile
  navToggle.addEventListener('click', function (e) {
    this.classList.toggle('open');
    menuToggle.classList.toggle('active');
    e.stopPropagation();
    navDestroy()
    navTransform = 0;
    menuToggle.style.cssText = `transform: translatex(${navTransform}%);`
    backButton.classList.remove('d-inline-flex')
    backButton.classList.add('d-none')
  });

}



if (matchMedia('(max-width: 1199px)').matches) {
  backButton.addEventListener("click", () => {
    if (matchMedia('(min-width:768px) and (max-width: 1199px)').matches) {
      if(document.querySelectorAll(".main-navbar .dropdown.active").length<4){
        backButton.classList.add('d-none')
        backButton.classList.remove('d-inline-flex')
        navTransform =0;
        menuToggle.style.cssText = `transform: translatex(${navTransform}px);`
      }else{
        backButton.classList.remove('d-none')
        backButton.classList.add('d-inline-flex')
        navTransform -= -(document.documentElement.clientWidth/3);
        menuToggle.style.cssText = `transform: translatex(${navTransform}px);`
      }
    }
    if (matchMedia('(max-width: 767px)').matches) {
      navTransform += 100;
      if (navTransform > -100) {
        backButton.classList.remove('d-inline-flex')
        backButton.classList.add('d-none')
      }
      menuToggle.style.cssText = `transform: translatex(${navTransform}%);`
    }
    document.querySelectorAll(".main-navbar .dropdown.active").forEach( (lastItem, index, array)=> {
      if (index + 1 === array.length) {
        lastItem.classList.remove("active")
        lastItem.lastElementChild.classList.remove("show")
      }
    });
  })
}











///////////////

/**
 * Variables
 */
const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$.ajax({
  url: '/your-url/',
  type: 'POST',
  headers: {
    'X-CSRFToken': csrftoken,
  },
  data: {
    // data to be sent to the server
  },
  success: function (response) {
    // handle the response
  }
});

var csrftoken = Cookies.get('csrftoken');

