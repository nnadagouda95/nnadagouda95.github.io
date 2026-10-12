# Info-Synth project page

Static GitHub Pages project page based on the latest supplied manuscript. All public paper actions point to:

- Abstract page: https://arxiv.org/abs/2605.26072
- PDF: https://arxiv.org/pdf/2605.26072

## Add the figures

Export your figures to `assets/` using these exact filenames:

- `fig-framework.png`
- `fig-query-confidence-1.png`
- `fig-query-confidence-2.png`
- `fig-query-confidence-3.png`
- `fig-user-study-1.png`
- `fig-user-study-2.png`
- `fig-synthetic.png`
- `fig-text-1.png`
- `fig-text-2.png`
- `fig-robot.png`

Each placeholder is automatically hidden when its image is available.

## Publish

Copy this folder into your personal-site repository as `info-synth/`, then commit and push. The URL will be:

`https://nnadagouda95.github.io/info-synth/`

Preview locally from the repository root with:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/info-synth/`.
