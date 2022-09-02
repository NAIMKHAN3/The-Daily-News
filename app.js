const cetagoryItem = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    const res = await fetch(url);
    const data = await res.json();
    displayCetagory(data.data.news_category);
}
const displayCetagory = async (cetagorys) => {
    const cetagoryName = document.getElementById('cetagory-name');
    // const ul = document.createElement('ul');

    for (cetagory of cetagorys) {
        const ul = document.createElement('ul');
        ul.classList.add('navbar-nav')
        ul.innerHTML = `
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">${cetagory.category_name}</a>
        </li>
        `;
        cetagoryName.appendChild(ul);
        // console.log(cetagory.category_name);
    };

}
cetagoryItem();


const newsDetails = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/category/01';
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDeteils(data.data);
}

const displayNewsDeteils = async (newses) => {
    const cardDetails = document.getElementById('card-details');
    for (news of newses) {
        const div = document.createElement('div');
        div.classList.add('container');
        div.innerHTML = `
        <div class="row g-0 mt-3">
        <div class="col-md-4">
          <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title p-3">${news.title}</h5>
            <p class="card-text p-3">${news.details.length > 300 ? news.details.slice(0, 300) + '...' : news.deteils}</p>
            <div class="d-flex justify-content-between">
        <div class="d-flex">
            <img class="img-fluid img-thumbnail h-25 w-25" src="${news.thumbnail_url}" alt="">
            <h6></h6>
        </div>
        <div class="d-flex">
            <h3>view</h3>
            <button>Details</button>
        </div>
    </div>
          </div>
        </div>
      </div>
        `;
        cardDetails.appendChild(div);
        console.log(news.thumbnail_url);
    }

}
newsDetails();




