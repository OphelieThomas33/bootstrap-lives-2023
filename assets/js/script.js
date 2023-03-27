const listCategories = document.querySelector('.list-categories')
const listArticles = document.querySelector('#allArticles')
const category = '<div class="category"><a href="#">Ma catégorie</a></div>'
const article = '<article class="col-12 col-md-6 col-xl-4"><div><img src="https://picsum.photos/300/150" alt="Image générée par Lorem Picsum"></div><h2>Article</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac commodo augue, nec consequat lacus. Duis placerat, mi quis cursus suscipit, est diam volutpat neque, vitae tincidunt nulla turpis sed ante. Fusce eleifend arcu pharetra augue semper imperdiet. Curabitur eget sagittis risus, quis pulvinar nisi. Suspendisse ut diam et mauris laoreet fringilla.</p></article>'

let htmlCategories = '';

for(let i=0; i<6 ; i++) {
    htmlCategories += category
}
listCategories.innerHTML = htmlCategories;

let htmlArticles ='';
for(let i=0; i<12 ; i++) {
    htmlArticles += article
}
listArticles.innerHTML = htmlArticles;