# interview-rn
React Native init Boilerplate for code challenge.

Instructions:

The app should have 2 screens:

1. **Top Artis list** : Each row is a component which show the next fields from the API:
  - Name
  - Play Count
  - Image Thumbnail
2. **Artist Detail View**: This view should display the detail of each selected artist with the next fields from API:
 - Name
 - Stats: Listeners & Playcount
 - Lastfm url
 - Bio

The user can scroll the artist list and tap on one of them, then the detail screen shold be displayed as is shown in the next image:


![alt text](https://raw.githubusercontent.com/ivansnek/interview-rn/master/app_screens.png "App Screen")

The app will use LAST.fm API with the next endpoints:


1. [Top Artists](http://www.last.fm/api/show/chart.getTopArtists)
  - Example: `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3eb5746733b334285eb72372126b9a08&format=json`
2. [Artist Info](http://www.last.fm/api/show/artist.getInfo)
  - Example: `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=3eb5746733b334285eb72372126b9a08&format=json`


**NOTE:** The token for the API is: 3eb5746733b334285eb72372126b9a08