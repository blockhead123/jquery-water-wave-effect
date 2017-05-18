Water Wave Effect jQuery
=====================


Required Libraries:
-------
**jQuery**
http://code.jquery.com/jquery-1.10.1.js

Browser Compatibility
------
+ Firefox - not tested help test :)
+ Chrome - not tested help test :)
+ Explorer: not tested help test :)
+ Ipad Safari: not tested help test :)
+ Iphone Safari: not tested help test :)
+ IOS Safari: not tested help test :)
+ Android Chrome: not tested help test :)
+ IOS Chrome: not tested help test :)

[Demo](http://water-wave-jquery.oso-link.com/scr/)
-------

Example
-------

    <script>
    $(function(){
    var box = $(".waterwave-canvas").waterwave({
        direction: 'down',
        background: '<your image url>'
    });
    });
    </script>
    <canvas class="waterwave-canvas" />

Options
-------

<table>
    <tr>
        <th>
            Name
        </th>
        <th>
            Type
        </th>
        <th>
            Default
        </th>
        <th colspan=3>
            Description
        </th>
        <th>
            Example
        </th>
    </tr>
    <tr>
        <td>
            direction
        </td>
        <td>
            String
        </td>
        <td>
            up
        </td>
        <td colspan=3>
            Vertical direction of a wave
        </td>
        <td>
            ['up','down']
        </td>
    </tr>
    <tr>
      <td colspan=7>
      </td>
    </tr>
    <tr>
        <td>
            parent
        </td>
        <td>
            String
        </td>
        <td>
            ''
        </td>
        <td colspan=4>
            Sets the parent of the canvas and uses its width and height as basis of the canvas wave
        </td>
    </tr>
    <tr>
      <td colspan=7>
      </td>
    </tr>
    <tr>
        <td>
            color
        </td>
        <td>
            String
        </td>
        <td>
            #000
        </td>
        <td colspan=4>
            Sets the color of the canvas water wave
        </td>
    </tr>
    <tr>
      <td colspan=7>
      </td>
    </tr>
    <tr>
        <td>
            background
        </td>
        <td>
            String
        </td>
        <td>
            ''
        </td>
        <td colspan=4>
            Sets the background image of the water wave if this is set background color is not used.
        </td>
    </tr>
</table>
