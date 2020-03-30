const express =  require("express")
const server = express()

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("views", {

    express: server,
    noCache: true,

})

const ideias = [

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Curso de Programação",
        category: "Estudo",
        description: "Em um dia ensolarado, tarde da manhã, quando a lua cheia era minguante, tudo era nada diferente do igual. A temperatura alta congelava o vento, que de desmotivado, motivava-se a soprar sem se por em movimento.",
        url: "https://www.google.com",
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios Físicos",
        category: "Saúde",
        description: "Em um dia ensolarado, tarde da manhã, quando a lua cheia era minguante, tudo era nada diferente do igual. A temperatura alta congelava o vento, que de desmotivado, motivava-se a soprar sem se por em movimento.",
        url: "https://www.oms.com",
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Em um dia ensolarado, tarde da manhã, quando a lua cheia era minguante, tudo era nada diferente do igual. A temperatura alta congelava o vento, que de desmotivado, motivava-se a soprar sem se por em movimento.",
        url: "https://www.youtube.com.br",
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em família",
        description: "Em um dia ensolarado, tarde da manhã, quando a lua cheia era minguante, tudo era nada diferente do igual. A temperatura alta congelava o vento, que de desmotivado, motivava-se a soprar sem se por em movimento.",
        url: "https://www.spotify.com",
    },
]



server.get("/", function(rq,rs){

    const reversedIdeias = [...ideias]
    let lastIdeias = []
    for (let ideia of reversedIdeias.reverse()) {
        if(lastIdeias.length < 2){

            lastIdeias.push(ideia)
        }


    }


    return rs.render("index.html", {ideias:lastIdeias})

        })

server.get("/ideias", function(rq,rs){
    
    const reversedIdeias = [...ideias]
    return rs.render("ideias.html", {ideias: reversedIdeias.reverse()})
    
      
   })

   server.listen(3000)