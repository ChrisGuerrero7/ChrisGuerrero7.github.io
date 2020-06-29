// Navbar Links

const navbar = document.querySelector(".navbar")
a = navbar.querySelectorAll("a")

a.forEach(function(element){
    element.addEventListener("click", function(){
        for(let i=0; i<a.length; i++){
            a[i].classList.remove("text-menu-select")
        }
        this.classList.add("text-menu-select")
        document.querySelector(".navbar").classList.toggle("show");
    })
})
