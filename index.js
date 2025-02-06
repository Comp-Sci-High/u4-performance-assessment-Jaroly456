// https://chatgpt.com/share/67a0de06-7c88-8006-81db-796d3dbadc1c
const express = require('express')
const app = express()

let places = 
   {
      countries: [
          {
            name: "Japan",
            description: "A country blooming with cultrual history. I've always wanted to come here to see what life is like. Trying out the foods and visiting the older parts of Japan. Japan is the first country I want to go to since me and my cousin had been wanting to go since 2019!",
            imageUrl: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
            withWho: "Cousins"
          },
          {
            name: "Italy",
            description: "Although I've been to Itatly before, I've never been here with my cousins who live here. For the record, going to Italy ruined my pasta expeirence at resturants. Since in Italy, the pasta I had was amazing. However, my main goal is to visit family and watch my favorite volleyball player in the Italian leauge. Making Italy my second country of choice to visit. All for family and sports.",
            imageUrl: "https://th.bing.com/th/id/R.763fb4e5962cb983b229a6bd6a402a4a?rik=%2f%2f96fcgUH%2byF2g&riu=http%3a%2f%2ffoundtheworld.com%2fwp-content%2fuploads%2f2014%2f07%2fVenice-Italy-9.jpg&ehk=AMdUCIMBmKRF%2bqBgeUFh2%2fSODWfDsENJplgMZZQ7yQY%3d&risl=&pid=ImgRaw&r=0",
            withWho: "Mom side of the family"
          },
          {
            name: "Germany",
            description: "A country I always hear that has fun. Germany has many places to see and I can vouch since I've been there before. Although it would be great to go again wthout being under adult supervision due to the culture in Germany.",
            imageUrl: "https://wallpapercave.com/wp/wp2953051.jpg",
            withWho: "Friends"
          },
          {
            name: "Greece",
            description: "Greece has a lot of history and mythology stories. But another reason I want to visit Greece is because of the beautiful cities within the country. It's great for someone who loves to take picturs and it's more of a family type of trip.",
            imageUrl: "https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/Hand-Luggage-Only-7.jpg?fit=1600%2C1067&ssl=1",
            withWho: "Sisters"
          },
          {
            name: "South Korea",
            description: "Home to one of my top 3 food cultures. South Korea has a unique deli experience than we do in New York, which are much better than we have. I also have other reasons to go to South Korea. For example, going to visit the border between North and South Korea and learning small details between the two countries. ",
            imageUrl: "https://www.agoda.com/wp-content/uploads/2018/10/Experience-Seoul_attractions_Gyeongbokgung-Palace.jpg",
            withWho: "Solo or with friends"
          }
        ]
      }


app.set("view engine", "ejs")

app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.render("index.html", places)
})

app.get("/destinations", (req, res) => {
  res.render("overview.ejs", places)
})

app.get("/:country", (req, res) => {
  const country = req.params.country
  res.status(200).render("place.ejs", places.countries[country])
})


app.listen(3000, () => {
    console.log("Server running")
  })
