# Music Hub
My second attempt at Capstone with a music website that comes with many options and features. From learning tabs for guitar to finding lyrics for a song! I used a multitude of technologies for the full stack of this website. All of them had a core piece in the stack and provided a clean experience for a user when using my website, which I dubbed Music Hub.

## The Stack

### Front-End
I used ReactJS for the front-end portion of this project. Using ReactJS, I made a standard front-end using a blue color scheme I came up with using my 4 years of Graphic Design experience. With ReactJS, I was able to have a stable UI that was easy to follow and understand. Specific messages will show up when a user is in the website and is not logged in to an account. See the screenshots below for an example!

![Music Hub Home Page](https://drive.google.com/uc?export=view&id=1b4D9FCPDrYd4EXTx-E9H77c2uLamx5Jh)

![Music Hub Home Page(Not Logged In)](https://drive.google.com/uc?export=view&id=14_-j5gwkAUV6KAif_nHBRNUO_NtuZWq0)

Utilizing ReactJS and the Spotify API, I was able to create a search engine on the home page that would allow the user to enter a search term in the text box, choose whether they want to search via artist or song title, and then click the search button to bring back up to 30 song results! Each result will show the song title, artist name, and the album the song came from. Each result checks with their own respective JSON response to see if there is a valid sample that can be played. If it does, then the result will show up with a "Play Sample" button that will be updated when the user clicks on it. The button will also play the sample that has been provided from Spotify for the user to have a short sample of the song they are curious about. If the user is even more curious about a song, then they can click the "View Song" button to then be taken to the song page, which I have a screenshot of below:

![Music Hub Song Page](https://drive.google.com/uc?export=view&id=1lBnPkb5BQY3Hov2-ZJy54HJoIi92vfHk)

The song page is a simple yet complex page that shows the same information that the song result showed in the search. However, I also show the album cover that Spotify provides in the search result. Below that album cover, you can find a rating, ranging 0 to 5 out of 5, that is tied to the reviews that a user can leave on a song. This rating takes the average from the ratings every user has left with their review and then displays it out of 5. I will go more over the reviews in a moment, but I want to point out that there are some disclaimers I had to make known just so the user can know why I don't have a full playable file on the song page. This is due to copyright issues with the music that is provided by Spotify. However, I can still provide links for the song that can send the user directly to the song on Spotify and listen to it there. I also provide a link to the lyrics for the song and a link to possible guitar tabs for the song. Here's another screenshot that shows all those features.

![Music Hub Disclaimer and Links](https://drive.google.com/uc?export=view&id=1W6MxL-4LjoZ0ZY4AyBADLVWAbJgtpcXu)

Also, if you look more closely, I provide two other links that will allow the user to share the song on their respective Twitter and Facebook account if they have one for those respective sites. There is also a "Favorite this Song" button, which I will go over later.

There is one thing I glanced over with this page that I can now explain, and that is the reviews section. As I stated, I have a rating out of 5 for every song that is available. This rating is being supplied by the users of my website, or the users that would exist if this website were to be hosted on a server. Anyways, I have a textbox with a rating system at the bottom of the Song Page that will take in a user's review and rating of the song. To show that this is working, I made some extra accounts for my website and made different and varying ratings and reviews that would get sent to my database. Of course, I have some measures in place that will check for errors on the passed in data to make sure that the user does indeed send both a rating and a review. Anyways, every time the user goes to a song page, I have the page fetch all available ratings and reviews for the song from my database to then calculate the actual rating average for the song and every individual review gets shown at the bottom of the page, shown via the screenshot below:

![Music Hub Ratings and Reviews](https://drive.google.com/uc?export=view&id=1rAnN5aGjt_-vVtVHz3NeL8xFhvSeAUGg)

The last thing to talk about on the Song Page is the "Favorite this Song" button. To put it bluntly, it does simply what it says on the tin. When a user clicks "Favorite this Song", my website will send a request through my api to my database that will save the current song they are viewing as a favorite for their account. If any user wants to see their favorited tracks then they can make their way to the Favorites Page. See it below:

![Music Hub Favorites Page](https://drive.google.com/uc?export=view&id=17hte8wP3GrsQU2fGEwNyOSg3TvgxqL5R)
