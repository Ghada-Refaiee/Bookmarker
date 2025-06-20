// var arr = ["Web", "UX", "UI"];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// built-in method
// arr.push("testing","dev");
// arr.unshift("tetsing");
// arr.pop();
// arr.shift();
// arr.splice(1,"testing","Dev");
// var x = arr.slice(0,3)
// console.log(arr.sort()); //reverse
// indexOf
// console.log(arr.join(" "));

// var description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates mollitia quas amet sunt? Architecto veritatis, nobis cupiditate debitis nostrum unde expedita laboriosam nisi magni cum a officia dolorum at fugit? Ipsa corporis illo sunt ab doloribus ipsam tempore adipisci.`
// document.getElementById("demo").innerHTML = description.split(" ").slice(0,7).join(" ");

// var x = description.split("a").join('/');
// console.log(x)

// var emps = [
//   { eName: "ghada", eSalary: 3000, eAge: 22, eAddress: "Cairo" },
//   { eName: "Sara", eSalary: 3000, eAge: 22, eAddress: "Giza" },
//   { eName: "Ahmed", eSalary: 3000, eAge: 22, eAddress: "Hind" },
//   { eName: "Hamada", eSalary: 3000, eAge: 22, eAddress: "Cairo" },
// ];
// var emp1 = ""
// for (var i = 0; i < emps.length; i++) {
//   emp1 += ` <tr>
//             <td>${emps[i].eName}</td>
//             <td>${emps[i].eSalary}</td>
//             <td>${emps[i].eAge}</td>
//             <td>${emps[i].eAddress}</td>
//           </tr>`;
// }
// document.getElementById("cells").innerHTML = emp1;
// task
// dispaly data ==> table /==> tr ==> emp1 / td ==> prop

// 90% tasks
// task ==> CRUD --> create , retrive , update , delete
//               --> search , clear , add , save data ? localstorage

//

// 1- design --> done
// 2- add product --> done
// 3- display
// 4- clear

// 5- visit
// 6- delete
// search
// 7- save
var allBookmarks = [];

if (localStorage.getItem("Bookmarks")) {
  allBookmarks = JSON.parse(localStorage.getItem("Bookmarks"));

  dispalyBookmark();
}
function submitBookmark(){

  var bookmark ={
    siteName : document.getElementById("siteNameId").value,
    siteUrl : document.getElementById("siteUrlId").value
  }
  
  allBookmarks.push(bookmark)

  // saving
localStorage.setItem("Bookmarks", JSON.stringify(allBookmarks));

  //displaying bookmark
  dispalyBookmark();
}
function dispalyBookmark(){
  var box = ""
  for (var i = 0; i < allBookmarks.length; i++) {
    box += ` <tr>
              <td>${i + 1}</td>
              <td>${allBookmarks[i].siteName}</td>
              <td><button onclick="visit(${i})" class="visit-btn btn"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
              <td><button onclick="deleteBookmark(${i});" class="delete-btn btn "><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
            </tr>`;
  }
  document.getElementById("tBody").innerHTML = box;
}
// function visit(pIndex) {
  

// }
function deleteBookmark(pIndex) {
  allBookmarks.splice(pIndex, 1);
  dispalyBookmark();
  localStorage.setItem("Bookmarks", JSON.stringify(allBookmarks));
}
