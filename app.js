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
    // console.log(cetagory.category_id);
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
  toggleSpinner(true);
}

const displayCatagoryId = async (cetagorysID) => {
  const totalCountNews = document.getElementById('total-count-news');
  totalCountNews.innerText = cetagorysID.length + ' ' + 'items for category';
  if (cetagorysID.length === 0) {
    console.log('no data found')

  }
  console.log(cetagorysID.length);
  for (allCetagory of cetagorysID) {
    console.log(allCetagory);

    // console.log(allCetagory.category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${allCetagory.category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    displayNewsDeteils(data.data ? data.data : 'no data found');
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
    // console.log(news);
    const div = document.createElement('div');
    div.classList.add('container');
    div.innerHTML = `
        <div class="row g-2 mt-3 shadow-sm p-2">
        <div class="col-md-4 ">
          <img src="${news.image_url}" class="img-fluid rounded-start h-100" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title p-3">${news.title ? news.title : 'no data found'}</h5>
            <p class="card-text p-3">${news.details.length > 300 ? news.details.slice(0, 300) + '...' : news.deteils}</p>
            <div class="d-flex justify-content-between p-3">
           
            <span>${news.author.name ? news.author.name : 'no data found'}</span>
            <span>${news.total_view ? news.total_view : 'no data found'}</span>
            <button type="button" onclick ="detailsBtn('${news._id}')"class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Details</button>
        </div>
       
          </div>
          </div>
          
        </div>
      </div>
        `;
    cardDetails.appendChild(div);
    toggleSpinner(false);
    // console.log(news.author.img);
  }

}

const toggleSpinner = (isloding) => {
  const spinner = document.getElementById('spinner-toggle');
  if (isloding) {
    spinner.classList.remove('d-none');
  }
  else {
    spinner.classList.add('d-none')
  }
}

// modal start

const detailsBtn = async (_id) => {
  console.log(_id)
  const url = `https://openapi.programming-hero.com/api/news/${_id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = (phoneDetails) => {
  const displayName = document.getElementById('phoneDetailsModalLabel');
  const modalBody = document.getElementById('modal-body');
  modalBody.textContent = "";
  for (phone of phoneDetails) {
    displayName.innerText = 'Author Name :' + ' ' + phone.author.name;
    // console.log(phone.details)
    const div = document.createElement('div');
    div.classList.add('container');
    div.innerHTML = `
    <img src="${phone.author.img ? phone.author.img : 'no image found'}" class="img-fluid mx-auto d-block rounded h-25 w-25" alt="...">
    <p class="card-text p-3"><span class="text-primary">Post Details</span> :'${phone.details.length > 100 ? phone.details.slice(0, 100) + '...' : phone.deteils}'</p>
    <p class="card-text p-3 d-inline"><span class="text-primary">Total View</span>: ${phone.total_view ? phone.total_view : 'no data found'}</p>
    <p class="card-text p-3 d-inline"><span class="text-primary">Published Date</span>: ${phone.author.published_date ? phone.author.published_date : 'no data found'}</p>
   
    `;
    modalBody.appendChild(div);
    console.log(phone)
  }
}




newsDetails();
// displayCatagoryId();




