Widget display

General idea:
- Create a widget shell
- Allow for different content to be pulled in and displayed
- Allow user to customize look and feel
- Make the widget adaptable to pull content from different types of lists (XML is used for this demo, but the code could easily be tweaked to pull from a custom SharePoint list)

A working demo of this can be found on my website here: http://jclukeydesigns.com/widget_demo/Index.html

This widget is capable of:
- Displaying different types of content in different configurations, depending on the options the user chooses.
- Allows the user to choose from a wide variety of display options, both for the headers and for the content itself.

All customizable options:
- Widget type (determines what type of content the widget will pull in)
- Color theme (pre-set color options that effect headers,links and some icons)
- Placement/width (sets width of the widget)

Under Layout
- Header
  - Title (on/off)
  - Background (solid, light, off)
  - Underline (on/off)
- Header icon options
  - Icon (select from a large variety of icons)
  - Background (select background shape for the icon)
- Body
  - Background (background behind the body content - on/off)
  - Bottom line (bottom line under the body content - on/off)
  - Border (border around body content - on/off)

Under Options
- Header
  - Display (options for list, summary and thumbnails display formatting options)
  - Count (how many items are displayed in the body content area)
  - Icon (Icon that displays to the left of list and summary views)

Under Thumbnails - This tab is only displayed if the "Thumbnails" display option is selected under the Options tab
- Per row (how many thumbnails are displayed per row - Recommend setting the width of the widget to higher values for any "Per row" value higher than 2)
- Title (Allows for different title display options - overlay, standard, hover and off)
- Summary ((Allows for different summary display options - overlay, standard, hover and off - option may depend on title setting above)

Under Archive - Archive will not appear below the widget unless a text selection has been made.)
- Type (visual format of the archive link - transparent/solid)
- Color (color that will be applied to the archive link - theme/gray)
- Icon (icon that will appear next to the archive text)
- Text (Text that will be linked to point to the archive page)
- Link (disabled for demo, but would apply the desired URL to the archive link text.
