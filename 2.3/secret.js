function createSecretHolder(secret) {
   return {
    getSecret() { return secret },
    setSecret(input) { secret = input }
  }
}