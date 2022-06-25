# odin-calculator
Calculator assignment for The ODIN Project

This is a calculator I built in JavaScript without using the Math object. I did my best to emulate the behaviour of a calculator I used in my childhood. For example, pressing "5 + + + + =" will calculate to 25. I really like it!

--Click or tap the ON button 5 times in a row to change the display size. The default is made to fit the screen on mobile devices

-Click or tap the i button 5 times in a row to see this page

--The calculations are as accurate as can be expected with 64-bit floating point numbers. No workarounds are currently implemented. If any rounding or truncation occurs in the display, the display screen will turn green to notify you. No rounding or truncations occur on the numbers themselves (i.e. what the calculator uses in its equations), only to what is shown in the display.

--Keyboard support is enabled! It is a little wonky right now though. Notably, the '=' key will call the plus function, since I don't want to hold shift every time I want to use plus while on my laptop and an Enter key is usually accessible from the number pad. Take care that you don't have a button you're not meaning to use selected when pressing Enter. Other notable keybindings:
    -Control -> ON
    -Enter -> Equals =
    -` or ~ or PageUp -> Negative (-)
    -Backspace or Home -> Backspace ←
    -Escape or Delete -> Clear C
    -x or X or * -> Multiply x
    -I -> README i

--I threw this together before actually going through the JavaScript lesssons, to see if I could do it, so I'm sure there are ways to optimize this code. For example (ToDo):
    
    _______

    -Make text in Display auto-resize to keep from overflowing
        +Allow longer str length (to input longer numbers)

    -Floating point math is inexact. Maybe find a workaround to make, for instance, 0.00001 / 10 equal 0.000001 instead of 0.0000010000000000000002
        +Possible solution: "You can avoid this by multiplying all inputs by 100, adding them, then comparing to 10,000. This will work because all integers between 2^-52 and 2^52 can be exactly represented in a double precision floating point numbers, but fractions may not be. http://en.wikipedia.org/wiki/Double_precision_floating-point_format

        Another approach is to roll your own decimal addition function to work on number strings." 
            - https://stackoverflow.com/questions/7540228/javascript-adds-0-000000002-to-calculation
    
    ---

    -Automatically display Mobile site when viewed from Mobile device, 
    and Desktop when viewed from Desktop device
    
    -Add Info screen

    -Make text resize with viewscreen height as well as width (so whole calculator can be seen, for example, when mobile device is flipped from portrait to landscape) 

    ---

    -Possibly use something more concise than Switch for key recognition

    -Add key-binding configuration interface

    -Maybe make it so clicking on buttons doesn't leave them focused (i.e. if you click + and then press Enter the calculator will run equals() instead of plus() )?

    ---

    -Remove unused/redundant code

    -Organize/rearrange code

    -Do something about so much of style.css and deskstyle.css being duplicated. Maybe use JS to change the values of a single stylesheet, or put common css on one sheet and add another swappable sheet with the unique css options