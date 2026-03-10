## Summary

<!-- Describe the changes introduced by this PR -->

## Related Issues

<!-- Link any related issues, e.g. Closes #123 -->

---

## Security Review Checklist

_Complete this checklist for any PR that modifies GitHub Actions workflows or dependencies._

### Workflow Changes
- [ ] All new or updated workflows define explicit `permissions` with least privilege
- [ ] No workflow grants more permissions than needed for its specific tasks
- [ ] Third-party actions are pinned by full commit SHA (e.g. `uses: actions/checkout@abc1234...`)
- [ ] No secrets are exposed unnecessarily (e.g. passed to untrusted actions or printed to logs)

### Dependency Changes
- [ ] New dependencies have been checked for known vulnerabilities
- [ ] Updated dependencies do not introduce breaking changes

### General
- [ ] CI passes on this PR
