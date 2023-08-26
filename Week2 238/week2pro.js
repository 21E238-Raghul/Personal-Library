
let book={
    title:"Chandrayan",
    author:"ISRO",
    yearpublished:"2010",
    readstatus:"Done",
    getsummay:function(){
        console.log("hi i am Chand3.");
    },
    togglereadstatus:function(){
        if(this.readstatus=="Done"){
            readstatus="Undone";
        }else{
            this.readstatus="Done";
        }
    },
}
let bookk={
    title:"luna",
    author:"cos",
    yearpublished:"2023",
    readstatus:"Undone",
    getsummay:function(){
        console.log("hi i am luna.");
    },
    togglereadstatus:function(){
        if(this.readstatus=="Done"){
            readstatus="Undone";
        }else{
            this.readstatus="Done";
        }
    }
}; 


let bookobj=[];
bookobj.push(book);
bookobj.push(bookk);

console.log(bookobj)

function addbook(book1){
    bookobj.push(book1);
}
addbook("ALPHA");
console.log(bookobj)

function removelbook(){
    bookobj.pop();
}
removelbook();
console.log(bookobj)

function addfronnt(book2){
    bookobj.unshift(book2)
}
addfronnt("NEXT");
console.log(bookobj);


function removefbook(){
    bookobj.shift();
}
removefbook();
console.log(bookobj);

function getalltitle(){
    let tit=val=>val.title
    let out=bookobj.map(tit)
    console.log(out);
}
getalltitle();

function booksbyauthor(name){
    let cusauthor=bookobj.filter(aut=>aut.author==name)
        console.log(cusauthor);
}
booksbyauthor("ISRO");

function totalbook(year){
    let getyear=bookobj.filter(days=>days.yearpublished<year).reduce((prev,curr)=>prev+1,0);
    console.log(getyear);
}
totalbook("2019");

function removeBookByTitle(Title){
    let index=bookobj.findIndex(
        function removing(){
            if(bookobj.tit==Title){
                return true;
            }
    })
    bookobj.splice(index,1);
    console.log(bookobj);
}
removeBookByTitle("luna");

function getBooksByReadStatus(Status)
{
let stsfil=bookobj.filter(sts=>sts.readstatus===Status);
console.log(stsfil);
}
getBooksByReadStatus("Done");
function getSubLibrary(start, end)
{
let sublib=bookobj.slice(start,end);
console.log(sublib);
}
getSubLibrary(1,2);
