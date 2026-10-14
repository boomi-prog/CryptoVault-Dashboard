function settingsPage(page){
    const settings=document.querySelectorAll(".security-page");
    settings.forEach(function(secure){
        secure.style.display="none";
    })
    document.getElementById(page).style.display="block";
}
function markets(){
    window.location.href="./markets.html"
}
function wallets(){
    window.location.href="./wallets.html"
}
function settings(){
    window.location.href="./settings.html"
}
function logout(){
    window.location.href="./logout.html"
}
function togbtn(){
const toggleBtn=document.getElementById("toggle-btn");
toggleBtn.style.display="none"
}
function closeBtn(){
const toggleBtn=document.getElementById("toggle-btn");
toggleBtn.style.display="block";
}
function lightmode() {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}
if (localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
}
function signUp(){
    window.location.href="./createaccount.html"
}
function signIn(){
    window.location.href="./logout.html"
}
const search=document.getElementById("search-icon");
const coins=document.querySelectorAll("#coin-rows tr");
if(search){
search.addEventListener("input",function(){
    let searchValue=search.value.toLowerCase();
    coins.forEach(function(row){
        const searchCoinName=row.querySelector(".coin-name");
        if(searchCoinName){
            const CoinName=searchCoinName.textContent.toLocaleLowerCase();
            if(CoinName.includes(searchValue)){
                row.style.display="";
            }
            else{
                row.style.display="none"
            }
        }
    });
});
}
function filterCoins(category) {
    const rows = document.querySelectorAll("#coin-rows tr");
    rows.forEach(function(row) {
        row.style.display = "none";
    })
        if (category === "all") {
        rows.forEach(function(row) {
            row.style.display = "";
                });
        }
        else if (category === "favourites") {
            rows.forEach(function(row){
            const star = row.querySelector(".star");
            if (star && star.classList.contains("star-active")){
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }
        else if(category=="defi"){
            rows.forEach(function(row){
                if (row.classList.contains("coin-defi")) {
                row.style.display = "";
            }
            });
        }
        else if(category==="nft"){
                 rows.forEach(function(row) {
            if (row.classList.contains("coin-nft")) {
                row.style.display = "";
            }
        });
        }
    }
function checkBtn(copy){
    if(copy.classList.contains("bi-copy")){
     copy.classList.remove("bi-copy");
     copy.classList.add("bi-check2");
    }
    else{
     copy.classList.add("bi-copy");
     copy.classList.remove("bi-check2"); 
    }
}
function showEyeIcon(){
    const eye=document.getElementById("eye-icon");
    const pwd=document.getElementById("password");
    if(pwd.type=="password")
    {
        pwd.type="text";
        eye.classList.add("bi-eye");
        eye.classList.remove("bi-eye-slash");
    }
    else{
        pwd.type="password"
        eye.classList.remove("bi-eye");
        eye.classList.add("bi-eye-slash");
    }
}
function showSignInEyeIcon(){
    const eye=document.getElementById("eye-icon");
    const pwd=document.getElementById("signIn-password");
    if(pwd.type=="password")
    {
        pwd.type="text";
        eye.classList.add("bi-eye");
        eye.classList.remove("bi-eye-slash");
    }
    else{
        pwd.type="password";
        eye.classList.remove("bi-eye");
        eye.classList.add("bi-eye-slash");
    }
}
const username=document.getElementById("user-name");
if(username){
username.addEventListener("input",function(){
    this.value=this.value.replace(/[^A-Za-z ]/g,"");
})
}
function createAccount(event){
  event.preventDefault();
  const Email=document.getElementById("signIn-email").value;
  const Password=document.getElementById("signIn-password").value;
  const user={email:Email,password:Password};
  localStorage.setItem("userAccount",JSON.stringify(user));
  alert("Account Created Successfully");
  const createAccount=document.getElementById("create-account-container");
  const account=document.getElementById("account-container");
  createAccount.style.display="none";
  account.style.display="block";
}
function dashboard(){
    window.location.href="./dashboard.html";
}
function dashboardSignIn(event){
    event.preventDefault();
    const SavedUserAccount=JSON.parse(localStorage.getItem("userAccount"));
    const SignInEmail=document.getElementById("email").value;
    const SignInPassword=document.getElementById("password").value;
    if(SavedUserAccount==null){
        alert("Please create an account first!");
        return;
    }
    // if(SignInEmail==SavedUserAccount.email && SignInPassword==SavedUserAccount.password){
    //     window.location.href="./dashboard.html";
    // }
    // if(SignInEmail==SavedUserAccount.email && SignInPassword==SavedUserAccount.password){
    //   alert("please enter valid username and password")
    // }
     if(SignInEmail != SavedUserAccount.email){
        alert("Please enter valid email")
    }
    else if(SignInPassword !=SavedUserAccount.password){
        alert("please enter valid password")
    }
    else{
        window.location.href="./dashboard.html";
    }
}
function forgetPassword(event){
  event.preventDefault();
  let password=document.getElementById("password");
  let user=JSON.parse(localStorage.getItem("userAccount"));
  let newPassword=prompt("Enter new password");
  if(newPassword){
     user.password=newPassword;
     localStorage.setItem("userAccount",JSON.stringify(user));
  }
  password.value=newPassword;
  password.focus();
  alert("Password updated successfully");
}
const sidebarSearch=document.getElementById("sidebar-search");
if(sidebarSearch){
    sidebarSearch.addEventListener("input",function(){
        let sidebarValue=sidebarSearch.value.toLocaleLowerCase();
            if(sidebarValue === "markets"){
               window.location.href="./markets.html";
            }
            else if(sidebarValue === "wallets"){
                window.location.href="./wallets.html";
            }
            else if(sidebarValue === "settings"){
                window.location.href="./settings.html";
            }
            else if(sidebarValue === "logout"){
                window.location.href="./logout.html";
            }
        })
    }
function saveChanges() {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const dashboardName = {
    FirstName: firstName,
    LastName: lastName
  };
  localStorage.setItem("dashboardPortfolio", JSON.stringify(dashboardName));
  document.querySelectorAll(".profile-input").forEach(function(input) {
  input.value = "";
});
  alert("Changes saved successfully!");
}
function loadDashboardName() {
  const data = JSON.parse(localStorage.getItem("dashboardPortfolio"));
  if (data) {
    document.getElementById("alex-name-change").innerText =
      data.FirstName + " " + data.LastName;
    document.getElementById("initial-text").innerText =
      data.FirstName[0] + data.LastName[0];
  }
}
loadDashboardName();
