import turtle, random
palette = turtle.Turtle()

colors  = ["#9DC3E2","#9DD2D8","#FADCE4","#FFB5CC","#E2B9DB"] 

palette.hideturtle()
palette.ht()

wn = turtle.Screen()
wn.bgcolor('black')

palette.speed(0)

for i in range(36):
    color = random.choice(colors)
    palette.color(color)
    palette.width(0)
    palette.begin_fill()
    rotate=int(360)
    palette.forward(100)
    palette.right(10)
    palette.forward(50)
    palette.right(120)
    palette.forward(50)
    palette.right(10)
    palette.forward(50)
    palette.end_fill()

    palette.right(10)
    

turtle.done()
