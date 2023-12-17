---
sidebar_position: 4
---

# Definition of Done

The following are our proposal for the criteria that a user story must meet to be considered "done":

- **Code implemented**: The user story's core features have been developed from backend to frontend.
- **Acceptance Criteria Met**: The user story's acceptance criteria should be met before it is considered "done".
- **Tests Passed**: The user story should pass all relevant tests before it is considered "done".
- **Quality Gates Passed**: The user story should pass all relevant quality gates before it is considered "done".
- **Documentation Updated**: The user story's documentation should be updated before it is considered "done".
- **Reviewed**: The user story should be reviewed by the development team before it is considered "done".

If a user story meets all of these criteria, it can be considered "done".

## Quality Gates

The following are the quality gates to be considered in the static code analysis:

1. **Coverage is less than 80.0%** - This sets a minimum code coverage requirement. If your unit test coverage falls below 80%, the code won't pass the quality gate.
2. **Duplicated Lines is greater than 3.0%** - This sets a threshold for the percentage of duplicated lines. If there are too many duplicated lines in your code, it won't meet the quality gate.
3. **Maintainability Rating is worse than A** - This requires that your code maintain a high level of maintainability, typically measured by static code analysis tools. If your maintainability rating is lower than an "A," it doesn't pass the quality gate.
4. **Reliability Rating is worse than A** - Similar to maintainability, this ensures that your code is reliable. If your reliability rating is worse than an "A," it doesn't meet the quality gate.
5. **Security Hotspots Reviewed is less than 100%** - This requires that you review all security hotspots identified by SonarQube. If some are not reviewed, it doesn't meet the quality gate.
6. **Security Rating is worse than A** - This ensures that your code is secure, and if the security rating is worse than an "A," it won't pass the quality gate.
