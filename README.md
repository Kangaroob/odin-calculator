# odin-calculator
Calculator assignment for The ODIN Project

This is a calculator I build without using the Math object. I threw this together before actually going through the JavaScript lesssons, to see if I could do it, so I'm sure there are ways to optimize this code. For example (ToDo):
    
    _______

    -Make text in Disply auto-resize to keep from overflowing
        +Allow longer str length (to input longer numbers)

    -Floating point math is inexact. Maybe find a workaround to make, for instance, 0.00001 / 10 equal 0.000001 instead of 0.0000010000000000000002
        +Possible solution: "You can avoid this by multiplying all inputs by 100, adding them, then comparing to 10,000. This will work because all integers between 2^-52 and 2^52 can be exactly represented in a double precision floating point numbers, but fractions may not be. http://en.wikipedia.org/wiki/Double_precision_floating-point_format

        Another approach is to roll your own decimal addition function to work on number strings." 
            - https://stackoverflow.com/questions/7540228/javascript-adds-0-000000002-to-calculation
    
    ---

    -Automatically display Mobile site when viewed from Mobile device, 
        and Desktop when viewed from Desktop device
    
    -Add Info button/screen

    ---

    -Possibly use something more concise than Switch for key recognition

    -Add key-binding configuration interface

    -Maybe make it so clicking on buttons doesn't leave them focused (i.e. if you click + and then press Enter the calculator will run equals() instead of plus() )?

    ---

    -Remove unused/redundant code

    -Organize/rearrange code