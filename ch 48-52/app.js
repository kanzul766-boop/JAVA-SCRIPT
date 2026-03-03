function readMore() {

    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btn = document.getElementById("btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.innerHTML = "Read More";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.innerHTML = "Read Less";
    }
}


function expandText(){
   var shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos nam adipisci quibusdam! Non placeat ea earum dolores. Magni deserunt porro, impedit reprehenderit quia consectetur alias velit sapiente suscipit saepe vel deleniti "
 var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos nam adipisci quibusdam! Non placeat ea earum dolores. Magni deserunt porro, impedit reprehenderit quia consectetur alias velit sapiente suscipit saepe vel deleniti incidunt recusandae labore accusantium quibusdam distinctio numquam esse cum fugiat facilis neque ea! Expedita eius delectus quis laborum voluptatibus suscipit recusandae sit sunt laudantium minima, culpa numquam temporibus, accusantium error iusto eum. Nisi ullam at, animi dignissimos perferendis possimus laborum excepturi corporis quidem iste quia porro blanditiis consequuntur sapiente deleniti neque, reprehenderit vel velit accusantium exercitationem, sint fugiat. Sed non, quos ut aut porro quae! Animi, ullam reiciendis."

    var remaining = document.getElementById("remaining")
    var link = document.getElementById("link")
    var paraText = document.getElementById("paraText")


    if(link.innerHTML=="See more"){
        // paraText.innerHTML = text
        remaining.style.display = "inline"
        link.innerHTML = "See less"
    }else  if(link.innerHTML=="See less"){
        // paraText.innerHTML = shortText
                remaining.style.display = "none"

        link.innerHTML = "See more"
    }
}