// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    "data": [{
        "name": "Auto Chess",
        "id": 1,
        "region": "US",
        "createdOn": 1615747418069,
        "price": {
          "1 Week - 1 Month": '$100',
          "6 Month": "$500",
          "1 Year": "$900"
        },
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url":"https://drive.google.com/uc?id=1GFDNnx-FWrDQMhD4wzsdKIumZIU611VD" 
      },
      {
        "name": "Summoners War",
        "id": 2,
        "region": "CA, FR",
        "createdOn": 1615517912069,
        "price": {
          "1 Week - 1 Month": '$100',
          "6 Month": "$500",
          "1 Year": "$900"
        },
        "csv": "Some CSV link for Super Jewels Quest",
        "report": "Some report link for Super Jewels Ques",
        "image_url":"https://drive.google.com/uc?id=1G7noyjGTmT-GqKcZMs8qVH3AIjUFFd1W"
      },
      {
        "name": "Garena",
        "id": 3,
        "region": "FR",
        "createdOn": 1615912918039,
        "price": {
          "1 Week - 1 Month": '$100',
          "6 Month": "$500",
          "1 Year": "$900"
        },
        "csv": "Some CSV link for Mole Slayer",
        "report": "Some report link for Mole Slayer",
        "image_url":"https://drive.google.com/uc?id=19nRVpIs36mPZNq28pt24ZmDFreq8vgXD"
      },
      {
        "name": "Shadow Fight 3",
        "id": 4,
        "region": "JP",
        "createdOn": 1613712918068,
        "price": {
          "1 Week - 1 Month": '$100',
          "6 Month": "$500",
          "1 Year": "$900"
        },
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"https://drive.google.com/uc?id=174zWpVLR1XOMVsNCpSx2bScXEpe_a3m5"
      },
      {
        "name": "NFS",
        "id": 5,
        "region": "JP",
        "createdOn": 1615717418069,
        "price": {
          "1 Week - 1 Month": '$100',
          "6 Month": "$500",
          "1 Year": "$900"
        },
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"https://drive.google.com/uc?id=1lalRazTO_WHqJbiIlbn1QbV0VOrz6A3t"
      },
      {
        "name": "Pubg",
        "id": 6,
        "region": "JP",
        "createdOn": 1619877518069,
        "price": {
          "1 Week - 1 Month": '$100',
          "6 Month": "$500",
          "1 Year": "$900"
        },
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"https://drive.google.com/uc?id=1zTzHsuhn16r1N9SDIHQV9INRHXG326YZ"
      },
      {
        "name": "Flow Free",
        "id": 7,
        "region": "JP",
        "createdOn": 1695717918369,
        "price": {
          "1 Week - 1 Month": '$100',
          "6 Month": "$500",
          "1 Year": "$900"
        },
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"https://drive.google.com/uc?id=1hItm-yXG8HbVONf8Yb9FIguquVUTl1XC"
      },
      {
        "name": "Mortal Kombat",
        "id": 8,
        "region": "JP",
        "createdOn": 1611317918069,
        "price": {
          "1 Week - 1 Month": '$100',
          "6 Month": "$500",
          "1 Year": "$900"
        },
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"https://drive.google.com/uc?id=1a2yFxT7u9hNhr80AMBmyhLwYjeWxw7aj"
      }
    ]
  })
}
