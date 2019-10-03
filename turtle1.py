import turtle, random
palette = turtle.Turtle()

colors  = ["#9DC3E2","#9DD2D8","#FADCE4","#FFB5CC","#E2B9DB"] 

palette.hideturtle()
palette.ht()

wn = turtle.Screen()
wn.bgcolor('black')

palette.speed(100)

for i in range(36):
    color = random.choice(colors)
    palette.color(color)
    palette.width(1)
    
    palette.circle(100)
    palette.penup()
    palette.setposition(0, 0)
    palette.pendown()
    
    palette.right(10)
    
turtle.done()
