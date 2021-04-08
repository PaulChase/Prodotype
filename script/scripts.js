// styling mobile menu
let menubtn = document.querySelector(".menu-btn");
let mobileMenu = document.querySelector(".nav-menu");
menubtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
    // mobileMenu.style.height = "100vh";
    mobileMenu.style.fontSize = "22px";
    mobileMenu.style.textAlign = "left";

    mobileMenu.children[5].style.width = "50%";
    mobileMenu.children[5].style.margin = "10%  0";
  } else {
    mobileMenu.style.display = "none";
  }
});

// login message
let loginBtn = document.querySelector(".login-btn");
let loginMessage = document.querySelector(".login-message");
let loginForm = document.querySelector(".login-form");
let loginPopup = document.querySelector("#id01");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loginMessage.style.display = "block";
  loginPopup.style.display = "none";

  // getting the inputed username
  let userName = document.querySelector(".username").value;

  // creating a template with username
  let welcomeMessage = document.createTextNode(
    `Congrats ${userName}, You are now logged into prodotype. 
     As a registered user, you can now browse the site fully without limitations.`
  );

  // getting welcome text paragraph
  let welcometext = document.querySelector(".welcome");

  welcometext.appendChild(welcomeMessage);
});

// close btn
let loginMessageClose = document.querySelector(".close-btn");
loginMessageClose.addEventListener("click", () => {
  loginMessage.style.display = "none";
});

// getting review form
let reviewForm = document.querySelector(".review-form");

// the date the review was addded
let d = new Date();

// adding event to the review form
reviewForm.addEventListener("submit", submitReview);

// alert message
let confirmMessage = document.querySelector(".alertMessage");

function submitReview(e) {
  e.preventDefault();
  // reviewForm.style.display = "none";

  // getting values from form
  let customerName = document.querySelector(".customer-name").value;
  let customerReview = document.querySelector(".customer-review").value;

  let reviews = document.querySelector(".post-reviews ");

  // creating the necessary elements
  let divright = document.createElement("div");
  let divtop = document.createElement("div");
  let divGeneral = document.createElement("div");
  let pName = document.createElement("p");
  let review = document.createElement("p");
  let reactions = document.createElement("div");
  let avtatar = document.createElement("img");
  let boldname = document.createElement("b");
  let timeReviewed = document.createElement("p");
  let ratings = document.createElement("p");
  let numberRating = document.createTextNode("4.0");

  // the reactions section
  reactions.className = "reactions";
  let likes = document.createElement("i");
  likes.className = " la la-thumbs-up w3-xlarge mg-s-10";
  let dislikes = document.createElement("i");
  dislikes.className = " la la-thumbs-down w3-xlarge mg-s-10";
  let comments = document.createElement("i");
  comments.className = " la la-comments w3-xlarge mg-s-10";
  let closeReview = document.createElement("i");
  closeReview.className =
    "fas fa-times-circle w3-xlarge mg-s-10  w3-text-dark-grey w3-hover-text-red reviewCloser";
  closeReview.style.float = "right";

  // the stars in the rating
  let star1 = document.createElement("i");
  let star2 = document.createElement("i");
  let star3 = document.createElement("i");
  let star4 = document.createElement("i");
  let star5 = document.createElement("i");
  star1.className = "fas fa-star w3-text-amber ";
  star2.className = "fas fa-star w3-text-amber ";
  star3.className = "fas fa-star w3-text-amber ";
  star4.className = "fas fa-star w3-text-amber ";
  star5.className = "fas fa-star w3-text-amber ";

  timeReviewed.style.fontStyle = "italic";

  // the default profile pic
  avtatar.src = "../styling/customers/girl4.jpg";
  avtatar.className = "profile-pic";

  // adding classnames
  divGeneral.className = "w3-padding break-line addedReview";
  divtop.className = "grid-2";

  // appending the children elements to their parents
  boldname.appendChild(document.createTextNode(customerName));
  review.appendChild(document.createTextNode(customerReview));
  pName.appendChild(boldname);
  timeReviewed.innerHTML = d.toDateString();
  divright.append(pName, timeReviewed, ratings);
  reactions.append(likes, dislikes, comments, closeReview);

  divtop.appendChild(avtatar);
  divtop.appendChild(divright);
  ratings.append(numberRating, star1, star2, star3, star4, star5);

  divGeneral.append(divtop, review, reactions);

  // appending the review to the review list
  reviews.prepend(divGeneral);

  // let reviewCloser = document.querySelectorAll(".reviewCloser");
  // reviewCloser.addEventListener("click", () => {
  //   divGeneral.style.display = "none";
  // });

  // send confrim message
  confirmMessage.style.fontStyle = "italic";
  confirmMessage.className = "w3-medium w3-text-amber";
  confirmMessage.appendChild(
    document.createTextNode(
      "Your review has been successfully added to the list. You can go ahead and add more or delete the ones you have added"
    )
  );

  setTimeout(() => {
    confirmMessage.style.display = "none";
  }, 6000);

  // to close the review
  closeReview.addEventListener("click", () => {
    if (confirm("Are you sure you want this delete this review?")) {
      divGeneral.style.display = "none";
    }
  });
}
// end of function

// let latestReview = document.querySelector(".addedReview");
// let reviewCloser = document.querySelector(".reviewCloser");
// reviewCloser.addEventListener("click", alert("nope"));

let addReview = document.querySelector(".addReview");

let showReviewForm = document.querySelector(".show-form");
showReviewForm.addEventListener("click", () => {
  // if ((document.querySelector(".addReview").style.display = "none")) {
  //   document.querySelector(".addReview").style.display = "block";
  // } else {
  //   document.querySelector(".addReview").style.display = "none";
  // }

  let closeBtn = document.createElement("button");
  closeBtn.appendChild(document.createTextNode("close"));
  closeBtn.className = "w3-btn mg-s-10 w3-round";
  closeBtn.style.width = "40%";
  closeBtn.style.opacity = 0.2;

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addReview.style.display = "none";
  });

  let addedReviewContent = document.querySelector("#reviewContent");
  addedReviewContent.className += " w3-modal-content";

  let submitBtn = document.querySelector("#submitBtn");

  reviewForm.appendChild(closeBtn);

  submitBtn.style.width = "50%";
  addReview.className += " w3-modal  ";
  addReview.style.display = "block";
});
