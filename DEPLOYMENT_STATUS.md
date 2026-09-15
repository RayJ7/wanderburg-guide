# Deployment Status

Verified: 2026-09-15

- Production URL: `https://wanderburgguide.site`
- Hosting target: Cloudflare Pages (see README; this project should not use Vercel).
- The repository does not use a GitHub Actions deployment job; an empty GitHub deployment status is therefore not a failure signal.
- Production was checked against current repository content: the Build Planner and Bosses pages are live, and the current Contact page includes the updated contact address from `main`.
- `.github/workflows/verify-build.yml` independently verifies that the current `main` branch installs and builds successfully.

When auditing deployment health, use both signals: the Verify build workflow must be green and the production URL must serve the expected current content.
