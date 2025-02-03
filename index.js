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
            "withWho": "Mom"
          },
          {
            "place": "Greece",
            "description": "A vast and diverse country featuring iconic landmarks like the Sydney Opera House, Great Barrier Reef, and stunning outback adventures.",
            "imageUrl": "https://example.com/australia.jpg",
            "path": "/greece",
            "withWho": "Friends"
          },
          {
            "place": "Brazil",
            "description": "Known for its vibrant culture, stunning beaches, and the Amazon Rainforest. Experience Rio’s Carnival, Christ the Redeemer, and tropical landscapes.",
            "imageUrl": "https://example.com/brazil.jpg",
            "path": "/brazil",
            "withWho": "Solo"
          },
          {
            "place": "",
            "description": "A destination of breathtaking landscapes, incredible wildlife, and diverse cultures. Go on a safari, visit Cape Town, and explore Table Mountain.",
            "imageUrl": "https://example.com/southafrica.jpg",
            "path": "/southafrica",
            "withWho": "Family"
          }
        ]
      }
      





app.set("view engine", "ejs")

app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })

app.use(express.static(__dirname + "/public"))

app.listen(3000, () => {
    console.log("Server running")
  })
