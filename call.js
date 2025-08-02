const person ={
    name:"Saurav",
    greet:function(title){
        console.log(this.name, title)
    }
}

person.greet("Singh")
person.greet.call({name:"Saurav Pratap"},"Singh")