const fbgraph = require('../lib/fbgraph');

exports.extendPageAccessToken = async (query) => {
    const data = await fbgraph.extendPageAccessToken({
        page_id: query.page_id,
        access_token: query.access_token
    });

    return data;
};

exports.hideComment = async (commentId, access_token) => {
    return await fbgraph.post(`/${commentId}?access_token=${access_token}`, {is_hidden: true});
};