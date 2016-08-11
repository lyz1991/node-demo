const fs = require('fs'), path = require('path'), rootpath = path.join(__dirname, 'img')
const img = ['.jpg', '.png']

let myread = (mypath) => {
    fs.readdir(mypath, (err,files) => {
        if (err) throw err
        else {
            files.forEach((item) =>{
                let filepath = mypath + '/' + item
                fs.stat(filepath, (err, stats) =>{
                    if(stats.isDirectory()) {
                        myread(filepath)
                    } else {
                        if(img.includes(path.extname(filepath))) {
                            fs.rename(filepath, mypath + '/' + new Date().getTime() + path.extname(filepath))
                        }
                    }
                })
            })
        }
    })
}
myread(rootpath)