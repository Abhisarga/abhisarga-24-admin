export function getGraphQLHitter(url, token) {
    return (hitGraphQl = async (query, variables) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json',
                'Bearer-Token': token,
            },
            body: JSON.stringify({
                query: query,
                variables: variables,
            }),
        }

        try {
            const result = await fetch(url, options)
            const data = await result.json()
            return data
        } catch (err) {
            console.log(err)
        }
    })
}
