const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function render(arr) {
    let html = '';
    arr.forEach((item)=>{
        html+= `
            <div class="post">
                    <div class="post-head">
                        <img src="${item.avatar}" class="post-user-img">
                        <div class="post-head-titles">
                            <h2 class="post-user-name">${item.name}</h2>
                            <p class="post-address">${item.location}</p>
                        </div>
                    </div>
                    <img src="${item.post}" class="post-img">
                    <div class="icons">
                        <img src="images/icon-heart.png" class="icon">
                        <img src="images/icon-comment.png" class="icon">
                        <img src="images/icon-dm.png" class="icon">
                    </div>
                    <p class="likes">${item.likes} likes</p>
                    <p class="caption"><strong>${item.username}</strong> ${item.comment}</p>
                </div>
            </div>
        `
    })
    document.getElementById("root").innerHTML = html
}

render(posts)