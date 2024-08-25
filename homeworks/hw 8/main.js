function scanCopy(object) {
    if (object) {
        let functions = [];
        for (const key in object) {
            if (typeof object[key] === 'function'){
                const functionClone = object[key].bind({});
                functions.push({functionClone, key});
            }
        }
        const parsingObject = JSON.parse(JSON.stringify(object));
        for (const func of functions) {
            parsingObject[func.key] = func.functionClone;
        }
        console.log(parsingObject);
        return parsingObject;
    }
    throw new Error('Error');
}
const clone = scanCopy({id:666, name: 'Belial', greeting() {console.log('hello')}, foo() {console.log('world')}});
clone.foo();

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.map((course, index) => ({...course, id: index + 1})));