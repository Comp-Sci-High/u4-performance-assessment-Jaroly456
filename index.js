const express = require('express')
const app = express()

let places = 
    {
        "countries": [
          {
            "place": "Japan",
            "description": "A beautiful country blending ancient traditions with cutting-edge technology. Experience cherry blossoms, bustling cities, and serene temples.",
            "imageUrl": "https://example.com/japan.jpg",
            "path": "/japan",
            "withWho": "Cousin"
          },
          {
            "place": "Italy",
            "description": "Home to rich history, stunning architecture, and world-famous cuisine. Explore Rome’s Colosseum, Venice’s canals, and the Tuscan countryside.",
            "imageUrl": "https://example.com/italy.jpg",
            "path": "/italy",
            "withWho": "Mom side of the family"
          },
          {
            "place": "Germany",
            "description": "A vast and diverse country featuring iconic landmarks like the Sydney Opera House, Great Barrier Reef, and stunning outback adventures.",
            "imageUrl": "https://example.com/australia.jpg",
            "path": "/germany",
            "withWho": "Friends"
          },
          {
            "place": "Greece",
            "description": "Known for its vibrant culture, stunning beaches, and the Amazon Rainforest. Experience Rio’s Carnival, Christ the Redeemer, and tropical landscapes.",
            "imageUrl": "https://example.com/brazil.jpg",
            "path": "/greece",
            "withWho": "Sister"
          },
          {
            "place": "Turkey",
            "description": "A destination of breathtaking landscapes, incredible wildlife, and diverse cultures. Go on a safari, visit Cape Town, and explore Table Mountain.",
            "imageUrl": "https://example.com/southafrica.jpg",
            "path": "/turkey",
            "withWho": "Solo"
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


app.listen(3000, () => {
    console.log("Server running")
  })
