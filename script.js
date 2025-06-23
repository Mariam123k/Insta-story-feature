var arr =[
    {dp: "https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg",str:"https://www.purina.in/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageHERO.jpg"},
    {dp:"https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/golden-retriever-tongue-out.jpg?h=430&w=710&hash=7FEB820D235A44B76B271060E03572C7",str:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-180680638-676f621f720bc.jpg?crop=1.00xw:0.752xh;0,0.118xh&resize=1200:*"},
    {dp:"https://vetsonparker.com.au/wp-content/uploads/2015/04/Rabbit-Facts.jpg",str:"https://i.pinimg.com/736x/2d/15/74/2d157475da3f359c2bfcd10875aaa872.jpg"},
     {dp:"https://supertails.com/cdn/shop/articles/indian-parrot_905855fc-e32a-444b-9965-203d5ab678c6.jpg?v=1742204056",str:"https://cdn.britannica.com/35/3635-050-96241EC1/Scarlet-macaw-ara-macao.jpg"},
      {dp:"https://a-z-animals.com/media/2019/11/Mouse-header.jpg",str:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmIu8tvXUJ7KY4hUji9ik7o4CzX5QQS9d89A&s"}
]
var story = document.querySelector("#story")
var clutter=""
arr.forEach(function(elem,idx){
     clutter +=`<div class="str">
                <img id="${idx}" src="${elem.dp}"alt="">
            </div>`
});
story.innerHTML = clutter;
story.addEventListener("click",function(dets){
        document.querySelector("#full-screen").style.display = "block"
        document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].str})`;



        setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
        },2000)
});