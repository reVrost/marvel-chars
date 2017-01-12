To start the front-end
run `npm start` on root directory
that should host the app on port 3000
then navigate to localhost:3000

Notes:

Although I'm more experienced with angular 1, I've decided to use react for this project. 
To setup react with babel and webpack would usually take some time to get up and running, so 
I took a shortcut by using create-react-app https://github.com/facebookincubator/create-react-app 
to create the setup and generate little boilerplate for me so I can get to the fun part building the frontend :)

The marvel api was fairly straightforward and wasn't too complicated to setup. I was considering of using
redux but since the app is meant to be simple I opted to do it the traditional way with
just react and using callback functions to communicate from child to the parent component. 

I've also considered doing the conventional pagination with the page count and so on, but due to time constraint
I kept it a bit simple with just next and previous.

I was also thinking of adding more things into the superhero `card` like stories, comics etc. But, I
move away from that idea since the marvel api seems abit incomplete with a lot of the data missing 
which wouldve made the cards look empty and plain.

Apart from that, it was a fun challenge and I enjoyed it. 