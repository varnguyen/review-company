export default function reander_text_links(text, campaign_url_builder = '') {
    // eslint-disable-next-line
    const text_break = text.replace(/(\r\n|\r|\n)+/g, ' </br> ');
    // eslint-disable-next-line
    return (text_break || '').replace(/([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
        (match, space, url) => {
            let hyperlink = url;
            // eslint-disable-next-line
            if (!hyperlink.match('^https?:\/\/')) {
                // eslint-disable-next-line
                hyperlink = 'http://' + hyperlink;
            }
            return space + '<a href="' + hyperlink + campaign_url_builder + '" target="_blank">' + url + '</a>';
        }
    );
}
