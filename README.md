# odin-calculator
Calculator assignment for The ODIN Project

This is a calculator I built in JavaScript without using the Math object. I did my best to emulate the behaviour of a calculator I used in my childhood. For example, pressing either "5 + 5 = = = =" or "5 + + + + =" will calculate to 25. I really like it!

--Click or tap the ON button to change the display size. The default is made to fit the screen on mobile devices

--Click or tap the i button to see this page

--If any rounding or truncation occurs in the display, the display screen will turn green to notify you. This can happen even if no rounding or truncation occurs in the real equation, but floating point weirdness occurs in the background (see below)

--Any numbers used are rounded to 6 decimal places, but any more decimals wouldn't be added to the display anyway. Beyond that, no rounding or truncations occur on the numbers themselves (i.e. what the calculator uses in its equations), only to what is shown in the display

--JavaScript uses 64-bit floating point numbers, which can be a bit funky, especially with decimal numbers. As a workaround, in the plus and minus functions x and y are both multiplied by 100 and the result is divided by 100. In the multiplied by function x and y are both multiplied by 100 and the result is divided by 10000. No workaround is currently implemented for the divided by function. I belive any further floating point weirdness will be caught due to the final rounding to 6 decimal places

--Keyboard support is enabled! It is a little weird right now though. Notably, the '=' key will call the plus function, since I don't want to hold shift every time I want to use plus while on my laptop and an Enter key is usually accessible from the number pad. Take care that you don't have a button you're not meaning to use selected when pressing Enter. Other notable keybindings:
    -Enter or Spacebar -> Equals =
    -o or O -> ON
    -` or ~ or PageUp -> Negative (-)
    -Backspace or Home -> Backspace ←
    -Escape or Delete -> Clear C
    -x or X or * -> Multiply x
    -+ or = -> Plus +
    -i or I -> Info i

--I threw this together before actually going through the JavaScript lesssons, to see if I could do it, so I'm sure there are ways to optimize this code. For example (ToDo):
    
    _______

    -Make text in Display auto-resize to keep from overflowing
        +Allow longer heldString length (to input longer numbers)

    ---

    -Automatically display Mobile site when viewed from Mobile device, 
    and Desktop when viewed from Desktop device
    
    -Add Info screen

    -Make text resize with viewscreen height as well as width (so whole calculator can be seen, for example, when mobile device is flipped from portrait to landscape) 

    ---

    -Possibly use something more concise than Switch for key recognition

    -Add key-binding configuration interface

    -Maybe make it so clicking on buttons doesn't leave them focused (i.e. if you click + and then press Enter the calculator will run operateEquals() instead of operatePlus() )?

    ---

    -Remove unused/redundant code

    -Organize/rearrange code

    -Do something about so much of style.css and deskstyle.css being duplicated. Maybe use JS to change the values of a single stylesheet, or put common css on one sheet and add another swappable sheet with the unique css options