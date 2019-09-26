#Yuan's Game

# let the user know what's going on
print ("Welcome to ")
print ("First, answer some questions,please.")
print ("-----------------------------------")

# variables containing all of your story info
creature1 = raw_input("Think of an animal: ")
play1 = raw_input("Tell me your favorite sports game: ")
place1 = raw_input("Please recommend a tourist site in NYC for me: ")
time1 = raw_input("When is your favorite moment of the day: ")
doing1 = raw_input("Tell me one guilty pleasure of yours: ")
person1 = raw_input("The relative who is close to you: ")
media1 = raw_input("Your favorite social media: ")
celebrity = raw_input("Who is your favorite celebrity: ")
activities = raw_input("Enter one thing you enjoy to do: ")

# this is the story. it is made up of strings and variables.
# the \ at the end of each line let's the computer know our string is a long one
# (a whole paragraph!) and we want to continue more code on the next line. 
# play close attention to the syntax!

story = "Spotted! There was a " + creature1 + " playing " + play1 + " at " + place1 + time1 + "." \
" Nobody paid attention to this at first. Then it started to " + doing1 + " . " + person1 + " took it home with you. " \
"Now you have a new pet! Every night, " + creature1 + " rest next to your bed. You posted pictures of it on " + media1 + " . " \
"One day," + celebrity + " emailed you." + " You were invited to play " + activities + " with " + celebrity + "! " \

# finally we print the story
print (story)
