export default function makeSearchUrl(queryOptions){
    const apiSite = 'https://api.edamam.com/search';
    const appId = '7eb7fdd9';
    const appKey = '118829b10666e8997e7b626691e1d5c2';

    if(!queryOptions) {
        return;
    }
    const pageInt = parseInt(queryOptions.page);
    let num = ((pageInt - 1) * 10) - 2;
    
    let from = 0;
    if(pageInt === 1){
        from = 0;
    } else {
        from = pageInt + num;
    }
    

    const url = new URL(apiSite);
    url.searchParams.set('app_id', appId);
    url.searchParams.set('app_key', appKey);
    url.searchParams.set('q', queryOptions.q);
    url.searchParams.set('page', queryOptions.page);
    url.searchParams.set('from', from);
    return url.toString();
} 




