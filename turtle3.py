from turtle import *
import turtle, random

colors  = ["#9DC3E2","#9DD2D8","#FADCE4","#FFB5CC","#E2B9DB"]

turtle.hideturtle()
turtle.ht()

turtle.speed(0)

for n in range (30):
    penup()
    goto(random.randint(-300,300), random.randint(-300,300))
    pendown()

    pencolor(random.choice(colors))

    circle_size = random.randint(5, 30)
    pensize(random.randint(1, 3))

    for i in range(12):
        circle(circle_size)
        left(30)

turtle.done()
