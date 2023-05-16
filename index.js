console.log("hello from js")

const {spawn}=require('child_process');

const child_path=spawn('python',['hello.py']);

child_path.stdout.on('data',(data)=>{
    console.log(` ${data}`);
})
child_path.stderr.on('data',(data)=>{
    console.log(`${data}`);
})
child_path.on('close',(code)=>{
    console.log(`process exited with ${code}`);
})
