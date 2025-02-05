const express = require('express')
const app = express()

let places = 
   {
      countries: [
          {
            name: "Japan",
            description: "A country blooming with cultrual history. I've always wanted to come here to see what life is like. Trying out the foods and visiting the older parts of Japan. Japan is the first country I want to go to since me and my cousin had been wanting to go since 2019!",
            imageUrl: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
            withWho: "Cousins or friends"
          },
          {
            name: "Italy",
            description: "Although I've been to Itatly before, I've never been here with my cousins who live here. For the record, going to Italy ruined my pasta expeirence at resturants. Since in Italy, the pasta I had was amazing. Thus, making my main goal to visit family and watch my favorite volleyball player in the Italian leauge. Making Italy my second country of choice to visit. All for family and sports.",
            imageUrl: "https://example.com/italy.jpg",
            path: "/place/:2",
            withWho: "Mom side of the family"
          },
          {
            name: "Germany",
            description: "A country I always hear that has fun. Germany has many places to see and I can vouch since I've been there before. Although it would be great to go again wthout being under adult supervision due to the culture in Germany.",
            imageUrl: "https://example.com/australia.jpg",
            path: "/place/:3",
            withWho: "Friends"
          },
          {
            name: "Greece",
            description: "Greece has a lot of history and mythology stories. But another reason I want to visit Greece is because of the beautiful cities within the country. It's great for someone who loves to take picturs and it's more of a family type of trip.",
            imageUrl: "https://example.com/brazil.jpg",
            path: "/greece",
            withWho: "Sisters"
          },
          {
            name: "South Korea",
            description: "Home to one of my top 3 food cultures. South Korea has a unique deli experience than we do in New York, which are much better than we have. I also have other reasons to go to South Korea. For example, going to visit the border between North and South Korea and learning small details between the two countries. ",
            imageUrl: "https://example.com/southafrica.jpg",
            path: "/place/:5",
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
