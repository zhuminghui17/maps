# Maps

I start to make maps! 

---

[http://maps.mattzhu.net/](http://maps.mattzhu.net/)

---

## Quick Start

To run this site locally:

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Preview the site locally
npm run preview
```

If the preview command doesn't work, you can also run:
```bash
npx serve dist
```

This repo is automatically maintained by a `til` script, found in `/bin/til`,
symlinked into my `/.local/bin` directory. It relies on some local programs
being available, such as `vim` and `fzf`.

Setting this up for your own system in its current state might not be so
straightforward. If setting up your own til is interesting enough to you that
you would be willing to help factor out reusable parts, open an issue to
discuss.


## Deploy to Vercel

To deploy this site to Vercel:

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Vercel will automatically detect the build settings from `package.json`
4. The build command (`npm run build`) and output directory (`dist`) are configured automatically

That's it! Vercel will build and deploy your site.

## Deploy to GitHub Pages

- In [GitHub pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), set it so you have the settings:
  - Source: Deploy from a branch (Classic Pages experience)
  - Branch: `gh-pages`, from the folder `/ (root)`

## Setup (only works on *nix)

- Install [NodeJS](https://nodejs.org/en/download)
- Install fzf
  - Ubuntu: `sudo apt install fzf bat`
- Ubuntu:
  - `batcat -> bat symlink`: 
```sh
mkdir -p ~/.local/bin
ln -s /usr/bin/batcat ~/.local/bin/bat
```
- Modify the [Config File](./config.mjs) with your own info


## License

Code found here is licensed under [MIT]. Content under [CC BY 4.0].

[MIT]: ./LICENSE
[CC BY 4.0]: https://creativecommons.org/licenses/by/4.0/
