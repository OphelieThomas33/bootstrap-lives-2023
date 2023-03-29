const listCategories = document.querySelector('.list-categories')
const listArticles = document.querySelector('#allArticles')
const category = '<div class="category list-group-item"><a href="#">Ma catégorie</a></div>'
const article = '<article class="col-12 col-md-6 col-xl-4 mb-3"><div class="card" style="width: 18rem;"><img src="https://picsum.photos/300/150" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Article</h5><p class="card-text">Lorem ipsum dolor sit amet, Curabitur eget sagittis risus, quis pulvinar nisi. Suspendisse ut diam et mauris laoreet fringilla.</p><a href="#" class="btn btn-primary">Lire la suite<i class="bi bi-plus"></i></a></div></div></article>'

let htmlCategories = '';

for(let i=0; i<6 ; i++) {
    htmlCategories += category
}
listCategories.innerHTML += htmlCategories;

let htmlArticles ='';
for(let i=0; i<12 ; i++) {
    htmlArticles += article
}
listArticles.innerHTML += htmlArticles;