export function getMessageOutOfGraphqlError(error: any) {
    return error?.networkError?.result?.errors[0].message
}