// 把角度转换为弧度
const electron = require('electron');
function angleToRad(angle) {
    return Math.PI / 180 * angle;
}

// 把第二个对象的属性copy到第一个对象中
function extend(obj1, obj2) {
    for (var key in obj2) {
        obj1[key] = obj2[key];
    }
}

function extractParentDirectoryPath(dirPath,dirSeparator){
    if (!dirPath) return;
    let path = dirPath;
    if (path.endsWith(dirSeparator)) {
      path = path.substring(0, path.lastIndexOf(dirSeparator));
    }
    const lastIndex = path.lastIndexOf(dirSeparator);
    if (lastIndex !== -1) {
      return path.substring(0, lastIndex);
    }
    // return root dir in cases that dirPath not start with dirSeparator (AWS)
    return '';
 }

