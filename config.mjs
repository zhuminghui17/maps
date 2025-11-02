export const Config = (() => {
  const firstName = "Matt"
  const lastName = "Zhu"

  const fullName = firstName + " " + lastName
  const domainRoot = "https://maps.mattzhu.net"
  const canonicalRoot = domainRoot
  const twitterAt = "@mattzhu"

  const githubUsername = "zhuminghui17"
  const githubRepo = "maps"

  return {
    FIRST_NAME: firstName,
    LAST_NAME: lastName,
    FULL_NAME: fullName,
    DOMAIN_ROOT: domainRoot,
    CANONICAL_ROOT: canonicalRoot,
    TWITTER_AT: twitterAt,
    GITHUB_USERNAME: githubUsername,
    GITHUB_REPO: githubRepo,
  }
})()
