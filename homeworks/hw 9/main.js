const div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

const cloneNode = div.cloneNode(true);
document.body.append(div,cloneNode);

let arr = ['Main','Products','About us','Contacts'];

const menu = document.createElement('ul');
menu.classList.add(`menu`);

for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li)
}
document.body.appendChild(menu);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// for (const course of coursesAndDurationArray) {
//     const ul = document.createElement('ul');
//     ul.innerText = `${course.title} ${course.monthDuration}`
//     document.body.appendChild(ul);
// }

// for (const course of coursesAndDurationArray) {
//     const div = document.createElement('div')
//     const h2 = document.createElement('h2')
//     h2.innerText = course.title
//     const p = document.createElement('p')
//     p.innerText = course.monthDuration
//     div.append(h2, p);
//     document.body.appendChild(div);
// }

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (const course of coursesArray) {
    const blockOfArrays = document.createElement('div')
    for (const blockOfBlocks of blockOfArrays) {
        const blocks = document.createElement('div')
        blocks.innerText = `${course.title} ${course.monthDuration}`

    }

}