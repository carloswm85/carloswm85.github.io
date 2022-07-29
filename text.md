https://stackoverflow.com/questions/29641526/how-can-images-be-resized-using-bootstrap

For Bootstrap 5.

Resizing seems not to be an easy task. I haven't found any built-in implementation in BS5 for image resizing.

The best solution I've found is handling images as any other HTML element (a `span` or a `div` element).

# Solution

Use this snippet:

```html
<img
    src="~/Content/images/YourImage.jpg"
    class="img-fluid mx-auto mx-lg-0 h-100 col-8 col-sm-6 col-md-4 col-lg-1 my-auto"
>
```

NOTE: This is just an example. Adapt it to your need.

Explanation (more or less this is what happens):
1. BASIC SET UP:
   - img-fluid: Image is made responsive. This applies max-width: 100%; and height: auto; to the image so that it scales with the parent width.
   - mx-auto: centers the image in the horizontal axis, for phone views. Left and right margins are set to auto
   - mx-lg-0: When the lg break-point is reached, the margin to both sides are set to 0.
2. USING COLUMNS:
   - h-100: Image height is set to 100% relative to the parent. This should preserve the correct aspect ratio.
Now the magic:
   - col-8: At the smallest screen size, image will occupy 8 columns.
   - col-sm-6: After the small screen break point, image will occupy 6 columns.
   - col-md-4: At mid sized screens, 4 columns.
   - col-lg-1: At large sized screens, 1 columns.
   - my-auto: This is for vertical centering.

Remember, you'll set the columns width at will.

# Result

https://imgur.com/a/vJKojGZ

# Links

- https://getbootstrap.com/docs/5.1/content/images/#responsive-images
- https://getbootstrap.com/docs/5.1/layout/columns/
- https://getbootstrap.com/docs/5.1/layout/breakpoints/
- https://getbootstrap.com/docs/5.1/utilities/sizing/#relative-to-the-parent


  [1]: https://imgur.com/vJKojGZ.png