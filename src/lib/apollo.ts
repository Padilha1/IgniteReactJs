import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u7iese0l7d01uhaiwyfi99/master',
    cache: new InMemoryCache()
})