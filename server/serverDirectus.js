import {
    createDirectus,
    rest,
    authentication,
    readItems
} from '@directus/sdk';

const runtimeConfig = useRuntimeConfig();
const directusBaseUrl = runtimeConfig.DIRECTUS_URL;
const directus = createDirectus(directusBaseUrl)
    .with(rest())
    .with(authentication('json'));

export {
    directus,
    directusBaseUrl,
    readItems
}