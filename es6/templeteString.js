let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here...',
    tags: ['es6', 'template literals', 'javascript'],
    year : [1231, 14214, 3421]
};
const numbers=[30, 78, 64, 39, 63, 90]

const mypost = `My Title Was : ${post.title} tags :${post.tags} numbers: ${numbers[2]} Year: ${post.year[1]}`;
console.log(mypost)