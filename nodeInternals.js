const person = {
    name:"sps",
    greet:function(){
        console.log(this.name)
    }
}

setTimeout(person.greet,2000)