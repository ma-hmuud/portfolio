const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./components');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace rounded classes with rounded-none
    content = content.replace(/\brounded-(?:full|3xl|2xl|xl|lg|md|sm)\b/g, 'rounded-none');
    content = content.replace(/(?<!-)rounded\b/g, 'rounded-none');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
