const cetagoryItem = async () => {
  const url = 'https://openapi.programming-hero.com/api/news/categories';
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data.data);
  displayCetagory(data.data.news_category);
}
const displayCetagory = async (cetagorys) => {
  const cetagoryName = document.getElementById('cetagory-name');
  // const ul = document.createElement('ul');

  for (cetagory of cetagorys) {
    console.log(cetagory.category_id);
    const idCetagory = cetagory.category_id;
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav')
    ul.innerHTML = `
        <li class="nav-item">
          <a onclick="cetagoryId('${idCetagory}')" class="nav-link active" aria-current="page" href="#">${cetagory.category_name}</a>
        </li>
        `;

    cetagoryName.appendChild(ul);
    // console.log(cetagory.category_name);
  };

}
cetagoryItem();


const cetagoryId = async (category_id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayCatagoryId(data.data);
}

const displayCatagoryId = async (cetagorysID) => {
  console.log(cetagorysID);
  for (allCetagory of cetagorysID) {
    console.log(allCetagory.category_id);
    // console.log(allCetagory.category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${allCetagory.category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayNewsDeteils(data.data);
  }
  // return allCetagory.category_id;
}


const newsDetails = async (cetagorysID) => {
  // const url = `https://openapi.programming-hero.com/api/news/category/${}`;
  // const res = await fetch(url);
  // const data = await res.json();
  // console.log(data);
  // displayNewsDeteils(data.data);
}

const displayNewsDeteils = async (newses) => {
  const cardDetails = document.getElementById('card-details');
  cardDetails.textContent = "";
  for (news of newses) {
    const div = document.createElement('div');
    div.classList.add('container');
    div.innerHTML = `
        <div class="row g-2 mt-3 shadow">
        <div class="col-md-4 ">
          <img src="${news.image_url}" class="img-fluid rounded-start h-100" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title p-3">${news.title}</h5>
            <p class="card-text p-3">${news.details.length > 300 ? news.details.slice(0, 300) + '...' : news.deteils}</p>
            <div class="d-flex justify-content-between p-3">
            <img class="img-tumbnail" src="" alt="">
            <span>${news.author.name}</span>
            <span>${news.total_view}</span>
            <button type="button" class="btn btn-primary">Primary</button>
        </div>
        <div class="d-flex">
        
        </div>
          </div>
          </div>
          
        </div>
      </div>
        `;
    cardDetails.appendChild(div);

    // console.log(news.category_id);
  }

}
newsDetails();
// displayCatagoryId();




