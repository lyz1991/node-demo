/**
 * Created by lyz on 2016-08-08.
 */
const os = require('os')
const child = require('child_process')
for(let i = 0;i < os.cpus().length; i++) {
    child.fork('./localhost.js')
}