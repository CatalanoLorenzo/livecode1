const movies = [
    {
        title: "film1",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vXINFy2RkzfsFsswhS4OJPotIQM.jpg",
        description: "lorem"
    },
    {
        title: "film2",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A5s5tWNPQtnxNjQh8dx2G5tBKxu.jpg",
        description: "lorem"
    },
    {
        title: "film3",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ewF3IlGscc7FjgGEPcQvZsAsgAW.jpg",
        description: "lorem"
    },
    {
        title: "film4",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bqkClyt9iJcbmZXouCgUrIna91W.jpg",
        description: "lorem"
    }
]
const rowEl = document.querySelector('.row')
console.log(movies);
for (let i = 0; i < movies.length; i++) {
    const thismovie = movies[i];
    console.log(thismovie);
    const markup = `
    <div class="col">
        <div class="card">
            <img src="${thismovie.img}" alt="" class="card-img-top">
            <div class="card-body">
                <h3>
                    ${thismovie.title} 
                </h3>
                <p>
                    ${thismovie.description}
                </p>
            </div>
            
        </div>
    </div>`
    rowEl.innerHTML += markup
}

