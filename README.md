# Capstone-Music-Website-Austin-Blandford-
My second attempt at Capstone with a music website that comes with many options and features. From learning tabs for guitar to finding lyrics for a song! I used a multitude of technologies for the full stack of this website. All of them had a core piece in the stack and provided a clean experience for a user when using my website, which I dubbed Music Hub.

## The Stack

### Front-End
I used ReactJS for the front-end portion of this project. Using ReactJS, I made a standard front-end using a blue color scheme I came up with using my 4 years of Graphic Design experience. With ReactJS, I was able to have a stable UI that was easy to follow and understand. Specific messages will show up when a user is in the website and is not logged in to an account. See the screenshots below for an example!

![Music Hub Home Page](https://drive.google.com/uc?export=view&id=1b4D9FCPDrYd4EXTx-E9H77c2uLamx5Jh)

![Music Hub Home Page(Not Logged In)](https://drive.google.com/uc?export=view&id=14_-j5gwkAUV6KAif_nHBRNUO_NtuZWq0)

Utilizing ReactJS and the Spotify API, I was able to create a search engine on the home page that would allow the user to enter a search term in the text box, choose whether they want to search via artist or song title, and then click the search button to bring back up to 30 song results! Each result will show the song title, artist name, and the album the song came from. Each result checks with their own respective JSON response to see if there is a valid sample that can be played. If it does, then the result will show up with a "Play Sample" button that will be updated when the user clicks on it. The button will also play the sample that has been provided from Spotify for the user to have a short sample of the song they are curious about. If the user is even more curious about a song, then they can click the "View Song" button to then be taken to the song page, which I have a screenshot of below:

![Music Hub Song Page](https://drive.google.com/uc?export=view&id=1lBnPkb5BQY3Hov2-ZJy54HJoIi92vfHk)
