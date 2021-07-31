# Music Hub
My second attempt at Capstone with a music website that comes with many options and features. From learning tabs for guitar to finding lyrics for a song! I used a multitude of technologies for the full stack of this website. All of them had a core piece in the stack and provided a clean experience for a user when using my website, which I dubbed Music Hub.

## How to Run

For anybody that would like to download the code for my website and test out the features, then you are more than free to do so. For anybody that needs some instruction on how to run my project, this section will detail the steps needed to get Music Hub up and running on your local machine.

**Step 1: Get the Code**

Getting my code is easiest by downloading the zip file. To do this, you want to make sure you are in the **"<>Code"** section of this Github respository. If you are in the right spot, there should be a large green button that says **"Code."** Click that button and there should be a dropdown with some options like "Open with Visual Studio", "Open with Github Desktop", and "Download ZIP." I highly recommend clicking the **"Download ZIP"** option. Once you click it, you should have a zip file downloading to your machine. See the screenshot below for a reference if you need it:

![Music Hub Github Code Button](https://drive.google.com/uc?export=view&id=1rMxUSDji3xcycFd3hBchO_dpefC_So34)

Once you have the zip file downloaded to your machine, you want to go to where it was downloaded and then unzip it using your choice of zipping software. I would personally recommend [7zip(click to get 7zip)](https://www.7-zip.org/download.html) myself if you don't have one yet. Once you have the file unzipped, then you can get started.

**Step 2: Install NPM**

To start up the code of Music Hub you want to see if you have npm installed in your machine. To see if you have it installed, press the Window key on your keyboard if you are using Windows and type in __"cmd."__ If you did this, you should see a **Command Prompt** program selected. If you do see this, then press enter to open the Command Prompt. See the screenshot below for a visual:

![Music Hub Command Prompt](https://drive.google.com/uc?export=view&id=1Wm6VWv2lLommLWCwDaCcUNhTaGYLGOMQ)

Once you have the Command Prompt open, you should see a small black screen appear with a path name. Don't worry about anything you currently see on this screen. Simply type in the command below and press enter:

> npm install -g npm

If you get something that says __"npm is not a recognized command"__ then that means you need to install Node.js to your machine. Go to this [link](https://nodejs.org/en/download/) and select the installer you need for your machine. Run the installer and you should be fine.

After you have ran the installer through and are sure you have installed Node.js to your machine, go ahead and try the above command again. If it works, then you should see a progress bar pop up in the Command Prompt that will begin to fill. Wait for this installation to finish and you should have the latest version of npm installed and working on your machine. While you are in the same Command Prompt, you want to see if you have nodemon installed. To install it, enter the command below and press enter:

> npm install -g nodemon

**Step 3: Start the Back-End**

Now that you have npm installed, you have the tools necessary to start running my code. To begin, look for where you unzipped the zip file of this project. Inside that project folder, you want to find the back-end folder and go inside of it. Once there, you need to type in the file path __"cmd"__ and press enter. This should open up a similar Command Prompt that now has the file path leading to the back-end folder of this project. Inside this command prompt you want to insert the below command and press enter:

> npm install

Once you have entered the install command, there should be some files that are now being downloaded to this file directory. Let it run until it finishes. Once it is done, you then want to run the next command:

> npm start

If this works correctly, you should see some messages pop up in the Command Prompt that pertain to "nodemon" a separate package I had you install earlier. As long as you don't see any red, then the back-end should now be running perfectly fine. If you have the back-end running, then you can move on to starting the front-end.

**Step 4: Start the Front-End**

Go back to your file directory and navigate to the front-end folder. Just like with the back-end, you want to type in the file path "cmd" and press enter. This should open another Command Prompt that is in the front-end path. Once you are at this Command Prompt, enter in the same commands you used for the back-end installation, starting with the install and then using npm start afterwards.

If you have done this right, then a new web browser tab should open up to my website. And thus, success! Go ahead and explore around the website and see how many ways you can either break it or enjoy it. If you want to know more about what is going on under the hood, then please proceed to the rest of this document.

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

The last thing to talk about on the Song Page is the "Favorite this Song" button. To put it bluntly, it does simply what it says on the tin. When a user clicks "Favorite this Song", my website will send a request through my API to my database that will save the current song they are viewing as a favorite for their account. If any user wants to see their favorited tracks then they can make their way to the Favorites Page. See it below:

![Music Hub Favorites Page](https://drive.google.com/uc?export=view&id=17hte8wP3GrsQU2fGEwNyOSg3TvgxqL5R)

As you can see, the Favorites Page simply contains a full list of the user's favorited tracks. Every entry has two buttons that will either take the user to the Song Page for that track or will delete the song from their favorites. It's a simple page that is a collective list for every track that any user would love to save for another day, which is one I felt was necessary to have in a website like this.

Now, I will be transparent about this, I did not like that I was not able to include the full song track in the Song Page. It was eating at me inside to exclude a core feature that I wanted in my website. However, I had come to the understanding that I would not be able to include these tracks unless I jumped through some extra hoops with a couple extra dollars out of my pocket. Since I couldn't do that, I needed to come up with something new to make up for this loss in a feature. Luckily, through some digging, I found an API that gives me access to a small database of royalty free audio tracks! So, using this API, I went and added a brand new feature to my website that was dubbed the "Royalty Free Section."

![Music Hub Royalty Free Section](https://drive.google.com/uc?export=view&id=13IDwX8_-_ISFG05lEbwiqTO15UXFYxru)

I was very happy to include this extra section on my website. It filled up the main navbar on the home screen nicely and was a nice added incentive to get possible users to create an account on my website. To explain this section is quite simple. The API that I found supplies me with royalty free audio tracks that I can provide a download link of. Each track is under a specific category, such as Upbeat or Electronic. To search, all the user has to do is select their music category, which I have set to Upbeat by default. Every search result shows the title of the song, duration of the song, a little description of the song, and lastly has the download link to the song. Each song can be saved directly to the user's PC simply by clicking the download link. The best part is that all of the audio provided is royalty free! So every track can be used for anything the user would ever want! Either as an easy audio file to have as background noise or as an extra track to use in a possible video. So, while I was not able to provide the full audio track for every song that is being supplied by Spotify, I am at least able to provide royalty free tracks to any user that just has to make an account on my website.

This entire front-end portion of my website was built using ReactJS. All the user experience bits I have included are simple error messages that explain to the user what is happening and I have extra security supplied on the pages to prevent users from freely accessing other pages without an account. For example, a user cannot go to the Royalty Free Section if they do not have an account. If they try to go to the URL of this section without being signed in, then they get thrown to the Login Page instead. Another User Experience bit I have included is a simple loading message that displays on my Royalty Free Section. The API I am using is a bit slow, so I made sure to include a loading message to let the user know that something is indeed happening if they are wanting to look at royalty free tracks. However, I mentioned something about my own API and my own database. Well, I can finally move on to explain those bits.

### Back-End + Database

Now, to be fair, ReactJS did most of the work on my website. It basically provides every bit of the front-end and even has some things going on under the hood. However, I still needed a back-end to communicate to whenever I needed something extra done. This was done with my very own REST API and a MongoDB.

My REST API has 5 different routes to talk to. The main route of index, which simply holds all other routes, is the main hub that exports the other 4 without needing to come up with another extra dozen paths for me to communicate to. After that, I have my user, tracks, review, and playlist routes. Sadly, since I didn't have the rights to have access to Spotify's full audio tracks, I had to leave playlist out of the project entirely. However, I do have the code made in the playlist route to at least attempt making a playlist when I do have access to those audio tracks. In short, I can't complete my playlist route, but the code is there for when I do have the chance to do so.

As for the other routes, my user route has all the access to my user data. Every url on this route has some way of interacting with user data. For example, I use the user route to login, register, edit accounts, delete accounts, and even add, delete, or get a users favorite tracks. Through each route, I am connected with the User portion of my MongoDB which gives access to each post, put, and delete option through this user route. Essentially, the user route does the bulk of the work, generally handling everything user related in the context of my website.

However, the one thing that my users route does not handle are the reviews. From my experience, I've found it better to store a separate set of data to handle reviews instead of just adding another array to every user in my database. This is because the reviews mainly affect the songs, not the users. So, my reviews route handles two simple things. Getting reviews and adding reviews. During this project, I didn't necessarily have the extra time to be able to focus on editing or deleting reviews, so every review is sadly final. This can be circumvented by me going through MongoDB's external Gui to manually delete and edit data as needed, but I would rather implement a new url in my reviews to be able to edit a review that the current user has saved on a song when I have the time to be able to focus more on this project. In the meantime, this route is meant to post some data that is sent in from the user, then get reviews that pertain to the specific song that is loaded in my website at the time.

Finally, I have my tracks route. This is by far the most important route in my entire project. While users handles all the foundation and bulk of my base website, the tracks route is the one that handles communication with Spotify's API. Normally, I would try to communicate with an API directly through ReactJS in this case. However, I didn't seem to have much of a choice. To put it bluntly, Spotify's API is not the most fun to work with. It has a lot of extra hoops and security keys and authorization keys that I need to keep track of. Quite frankly, adding all that extra work onto React would just make my code a lot more messy at the end of the day and would just bloat my front-end at this point. So, I instead made a route in my REST API that would handle all communication with Spotify to save my front-end the extra work and make accessing all of the data a little easier. My tracks route has three simple urls to choose from. Those are searchByTitle, searchByArtist, and getTracks. Both search urls are used to fuel my search engine through Spotify's API while the getTracks url is used to get specific song data using both the track and artist name through Spotify.

SearchByTitle and searchByArtist do very similar things. One does a search query of Spotify's API to then return a list of results using song title while the other does the same search and return through artis name. In hindsight, I could've combined these two routes into one and just sent in the current category of search and done a split from there, and I will probably do that in case I ever decide to come back to this project. Either way, these routes supply my website with Spotify's wonderful and wide search results of music media.

GetTracks, however, is a different story. GetTracks is the route I use to get specific data for a specific song from Spotify's library of music. Whenever a user wants to view a song on the song page they will have to go through my search results and view the song from the results that Spotify replied back to me with. Once done, I send another request with both the artist name and the song title to get the most accurate result back from Spotify to present the first, and only, result found from the song that the user wants to view. The data that is sent back is always correct because the data that I'm passing in is data that is already supplied by Spotify in the first place. So, even though I already have a security check for the possibility that the song does not exist, that security measure is already in place for the search queries in the first place. Because the user has to search to find a song. GetTracks is also useful for the favorites a user has, because all the data that is in each favorite entry is data that already existed in Spotify. So, there is extremely little room for error in this process and should work every single time as long as the Spotify API is up and running.

In short, a lot of the back-end is my REST API carrying the weight of the user data, track data, review data, and even error checking. I always do a default check on the front-end before even thinking of sending data, but I always have a backup error check in the back-end just in case something the user sent is invalid in some other way. But, my back-end and front-end were not able to do all of this work on their own.

### APIs

As I have mentioned, Spotify is the core API of this project. Spotify handles the search results and song data entirely, which makes up a massive portion of my website. I provide the queries while Spotify supplies me with search results to display on my web page, with samples of the tracks included when possible, and with song data for a very specific result using both the artist name and song title. However, I'm also using two other APIs and a url that a third API provides for some extra small features on my website.

As stated previously, I have a few links provided for every search result that a user might find. One of the links goes directly to the track on Spotify and autoplays for the user in another tab. Another link is connecting the user with Genius, which supplies me with an API that I can use through RapidAPI to get a quick link to Genius' lyrics for a specific song. Whenever a user goes to the Song Page, I have a ComponentDidMount that immediately checks there is a song being passed in. If a song is being passed in, I run both a query to find the song data and another query to find the page of lyrics on Genius using both the song title and artist name. If Genius returns a result, I then grab it and add a link to that result on my song page.

Another little thing I wanted to add as a nice touch to my website was adding a link to song tabs for a song whenever applicable. While I couldn't use their API, Songsterr at least provided me another URL that I could just insert the song title and artist name into and just send the url for a query directly through a link. So, whenever a user clicks on the "Tabs for {song_title} by {artist_name}" link, the user will get sent to a Songsterr page that does an automatic query for the song title and artist name. This doesn't work for every single result, because not all songs have a guitar tab, but it will at least bring the user to a default page if they were at least a little curious about what tabs were. At the end of the day, this feature is meant for people like me who have an interest in guitar and would love to find tabs for the song that they love without having to go and look for the song tabs themself.

Lastly, I used a third API to get my royalty free tracks. This API is a smaller one called "FreePD" that I found through RapidAPI. It is the slowest of the three APIs I use because it doesn't have too much support. However, it does supply me with the data I need for this extra feature that I added into this website. To begin, I simply take in the current state of the "Music Type" when the user clicks "Get Royalty Free Music". I take that music type and send it to FreePD through a query which should return results. During the time of searching, I set a loading state to a message that tells the user the status of the search. If a result is returned, then loading gets set to an empty string while I pass in the results with their respective data points. If a result isn't returned, then I set loading to a message that tells the user that the service is having some issues and to try again. This API isn't the most reliable, but it's the only one I could find at the time and it worked for my situation.

## Final Thoughts

Music Hub is not the perfect website that I would want, but it's far better than any expectation I ever had going into this project. I showed that I could take 10 weeks of my time to put together a project that would make my dad proud and would be a product that not only my dad would use, but would be a product that music lovers in general would use. I put my heart and soul into this project and I personally think this is the best project I have ever finished.

I showed throughout the development process of this project that I can work hard and pivot in a smart way whenever needed. I ran into snags on this project, but I persevered and found a new solution that could work for the current situation I was in. I look back at this project and see flaws and things that I could change, but I still look at this project with awe and pride. My only hope is that I can come back to this project one day and fine tune it so well to the point that it just might become a successful music platform of its own on a server one day. Until then, I will move on to bigger and better things as I build myself up in my career and will be ready to tackle on a massive project ike this once again.
