# js-training
part1

key takeaways : 

One codebase, many versions
- Use one project in version control (like Git), but deploy it in many environments (dev, test, production).

Declare your tools
- List all tools and libraries your app needs (like in package.json) so others can install them easily.

Store settings outside the code
- Keep passwords, keys, and URLs in environment variables, not hardcoded in files.

Use external services like plug-ins
- Treat databases, email services, etc., as separate services you can connect to.

Separate build and run steps
- First build your app, then release, then run. Don’t mix them up.

Keep it stateless
- Don’t store data or sessions in memory. Use databases or caches for that.

Run it on a port
- Your app should listen on a port (like a website) so users can connect directly.

Scale with processes
- Want to handle more users? Run more copies (processes) of your app.

Start fast, stop clean
- Your app should start quickly and shut down safely, so it can be deployed easily.

Keep all environments similar
- Make sure dev, testing, and production are as similar as possible to avoid bugs.

Stream logs
- Just print logs to the screen

- Run tasks separately

part 2
key takeaways :

- A methodology for creating design systems by breaking interfaces into smaller, reusable components.

- Five Stages of Atomic Design:

   Atoms:
     Basic building blocks like buttons, labels, inputs, colors, fonts.
     Example: A button or a text input field.

   Molecules:
     Groups of atoms working together as a unit.
     Example: A search form made of a text input + button.

   Organisms:
     Complex components made of groups of molecules and/or atoms.
     Example: A header with logo, navigation menu, and search form.

   Templates:
     Page-level structures that combine organisms to form layouts.
     Example: A page layout showing header, content area, and footer.

   Pages:
     Specific instances of templates with real content.
     Example: The homepage with actual text, images, and data filled in.

- Benifits

   Encourages reusability
   Maintains consistency
   Simplifies design and development
   Makes scaling UI easier

- Summary
   Build small reusable pieces → combine into bigger parts → compose full pages.

