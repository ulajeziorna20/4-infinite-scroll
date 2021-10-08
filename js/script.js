

// let scrollHeight = document.documentElement.scrollHeight;
// console.log(scrollHeight);


// let scrollTop = document.documentElement.scrollTop;
// console.log(scrollTop);

// let clientHeight = document.documentElement.clientHeight;
// console.log(clientHeight);


let endOfPage = 0;


const showLoading = () => {
  let loading = document.getElementById(`loading`);
  console.log(loading);

  loading.style.display = `block`;


}



const hideLoading = () => {
  let loading = document.getElementById(`loading`);
  console.log(loading);

  loading.style.display = `none`;


}








const getData = () => {


  fetch(`https://akademia108.pl/api/ajax/get-users.php`)

    .then(res => res.json())
    .then(data => {

      console.log(data);


      for (const user of data) {
        
        let pUserId = document.createElement(`p`);
        let pUserName = document.createElement(`p`);
        let pUserUrl = document.createElement(`p`);


        pUserId.innerText = `UserId:  ${user.id}`;
        pUserName.innerText = `UserName:  ${user.name}`;
        pUserUrl.innerText = `UserUrl:  ${user.website}`;


        console.log(pUserId);
        console.log(pUserName);
        console.log(pUserUrl);


        document.body.appendChild(pUserId);
        document.body.appendChild(pUserName);
        document.body.appendChild(pUserUrl);


      }


      hideLoading();


    })

    .catch(error => {
      console.error(error);
    });


}






const scrollToEndOfPage = () => {


  let scrollHeight = document.documentElement.scrollHeight;
  console.log(scrollHeight);

  let scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);

  let clientHeight = document.documentElement.clientHeight;
  console.log(clientHeight);

  let sumScrollTopClientHeight = scrollTop + clientHeight;
  console.log(sumScrollTopClientHeight);


  if (sumScrollTopClientHeight >= scrollHeight) {

    showLoading();

    getData();

  }


}







window.addEventListener(`scroll`, scrollToEndOfPage);